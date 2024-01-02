import React, { useEffect, useRef, useState } from 'react'
import {  getLatLng } from 'use-places-autocomplete';
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRestaurantsByUserLocation } from '../../../../redux/Actions/RestaurantAction';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';

const apiKey = 'AIzaSyC7bLhDH_v6YSanp-5f41zwMgoio0eO-6Y';
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';
let lats, lngs;
let formatted_address;


const containerStyle = {
    width: "100%",
    height: '40vh'
  };
const center = { lat: 40.7810694898019, lng: -102.88417905250878 }

function loadAsyncScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src
    })
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  })
}

const extractAddress = (place) => {

  // const results = await getGeocode({ place });

  if (typeof (place.geometry.location.lat) && typeof (place.geometry.location.lng) != 'function') {
    lats = place.geometry.location.lat;
    lngs = place.geometry.location.lng;
  } else {
    const { lat, lng } = getLatLng(place);
    lats = lat;
    lngs = lng;
  }

  formatted_address = place.formatted_address;

  const address = {
    sublocal2: "",
    sublocal: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const sublocal2 = this.sublocal2 ? this.sublocal2 + ", " : "";
      const sublocal = this.sublocal ? this.sublocal + ", " : "";
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return sublocal2 + sublocal + city + zip + state + this.country;
    }
  }

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach(component => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("sublocality_level_2")) {
      address.sublocal2 = value;
    }
    if (types.includes("sublocality_level_1")) {
      address.sublocal = value;
    }
    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }

  });

  return address;
}

export const ChangeLocationInModel = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const searchInput = useRef(null);
    const [address, setAddress] = useState({});
    const [selected, setSelected] = useState(null);
    const [radius, setRadius] = useState('');

    // init gmap script
    const initMapScript = () => {
        // if script already loaded
        if (window.google) {
        return Promise.resolve();
        }
        const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
        return loadAsyncScript(src);
    }

    // do something on address change
    const onChangeAddress = async (autocomplete) => {
        const place = autocomplete.getPlace();
        console.log(place, 'AutoComplete')
        console.log('here')
        if (place && place.geometry) {
            const latitude = place.geometry.location.lat();
            const longitude = place.geometry.location.lng();
            
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
            setSelected({ lat: latitude, lng:  longitude });
            // Use latitude and longitude for your purposes, e.g., display on a map or store in a database
        }
        setAddress(extractAddress(place));
    }

    // init autocomplete
    const initAutocomplete = () => {
        if (!searchInput.current) return;
        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
        console.log(autocomplete, 'autocomplete')
        autocomplete.setFields(["address_component", "formatted_address", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

    }


    const reverseGeocode = async ({ latitude: lat, longitude: lng }) => {
        const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
        searchInput.current.value = "Getting your location...";
        fetch(url)
        .then(response => response.json())
        .then(location => {
            const place = location.results[0];
            const _address = extractAddress(place);
            setAddress(_address);
            searchInput.current.value = _address.plain();
        })
    }

    const findMyLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              reverseGeocode(position.coords)
          })
        }
    }


    // load map script after mounted
    useEffect(() => {
        initMapScript().then(() => initAutocomplete())
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            geometry: { coordinates: [lats, lngs] },
            formattedAddress: formatted_address,
        }
        dispatch(getRestaurantsByUserLocation(obj, navigate, alert))
    }

    return (
        <div className="px-3 pt-4 pb-3">
            <div className="location-picker-container !max-w-full">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="location-picker-inner">
                        <div className="location-picker-search">
                            <div className="location-picker-search-Bg">
                                <div className="w-full">
                                    <div className="location-picker-search-Bg-inner !flex !flex-row">
                                        <FontAwesomeIcon size='lg' className='text-textColor top-3 left-4 absolute bg-transparent z-10' icon="fa-location-dot" />
                                        <input ref={searchInput} className="h-[44px] pl-10 pr-16 border-0 outline-0  hover:outline-0 focus:shadow-none focus:outline-none relative opacity-50 w-full rounded-lg  text-sm" type="text" name="search" placeholder="Enter your delivery address..." />
                                        {/* <FontAwesomeIcon onClick={findMyLocation} size='lg' className='text-textColor absolute bg-transparent z-20 cursor-pointer top-3 right-4' icon="fa-location-crosshairs" /> */}
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className="location-picker-search-button">
                                Pick Location
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='py-4 h-2/6'>
                <Map
                    selected={selected}
                    radius={radius}
                />
            </div>
            <div className='!max-w-full'>
                <button className="location-picker-search-button location-picker-search-button-border-rounded">
                    Pick Location
                </button>
            </div>
        </div>
    )
}


function Map({ selected, radius }) {
    const options = {
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 0.5,
      fillColor: '#000000',
      fillOpacity: 0.4,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: radius,
      zIndex: 1
    }
    return (
      <>
        <GoogleMap
            mapContainerStyle={containerStyle}      
            center={selected ? selected : center}
            zoom={selected ? 15 : 5}
        >
  
          {selected &&
            <Marker position={selected} />}
          {selected && radius && <Circle
            center={selected}
            options={options}
          />}
        </GoogleMap>
      </>
    );
  }