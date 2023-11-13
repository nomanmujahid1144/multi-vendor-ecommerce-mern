import React, { useEffect, useRef, useState } from 'react'
import {  getLatLng } from 'use-places-autocomplete';
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


export const HeroSection = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const searchInput = useRef(null);
    const [address, setAddress] = useState({});

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
        // <div className="bg-bgGrayLight">
        //     <div className="relative isolate px-6 pt-14 lg:px-8">
        //         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >
        //         <div
        //             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        //             style={{
        //             clipPath:
        //                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        //             }}
        //         />
        //         </div>
        //         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        //         <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        //             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        //             Announcing our next round of funding.{" "}
        //             <a href="/" className="font-semibold text-primaryColor hover:text-primaryColorHover">
        //                 <span className="absolute inset-0" aria-hidden="true" />
        //                 Read more <span aria-hidden="true">→</span>
        //             </a>
        //             </div>
        //         </div>
        //         <div className="text-center">
        //             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        //             Data to enrich your online business
        //             </h1>
        //             <p className="mt-6 text-lg leading-8 text-gray-600">
        //             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        //             cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
        //             aliqua.
        //             </p>
        //             <div className="mt-10 flex items-center justify-center gap-x-6">
        //             <a
        //                 href="/"
        //                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //             >
        //                 Get started
        //             </a>
        //             <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
        //                 Learn more <span aria-hidden="true">→</span>
        //             </a>
        //             </div>
        //         </div>
        //         </div>
        //         <div
        //         className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        //         aria-hidden="true"
        //         >
        //         <div
        //             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        //             style={{
        //             clipPath:
        //                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        //             }}
        //         />
        //         </div>
        //     </div>
        // </div>
        <div className="pick-location-background">
            <div className="location-size"></div>
            <div className="location-middle">
                <div className="location-inner-container">
                    <p className="location-inner-heading">Multi-Restaurant</p>
                    <p className="location-inner-smallHeading">Find Restaurants Near You</p>
                    <div className="location-picker-container">
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
                                <p className="location-picker-divider">Or</p>
                                <button className="location-picker-search-button location-picker-search-button-border-rounded">
                                    Pick From Me
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="location-size"></div>
        </div>
   ) 
}