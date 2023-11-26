import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
// import DefaultImage from '../../assets/Default.png'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useAlert } from 'react-alert'
import "@reach/combobox/styles.css";
import { useNavigate } from "react-router-dom"
import InputField from "../../minor-components/fields/InputField"
import { PageInstructure } from "../../minor-components/headings/PageInstructure"
import { useDispatch } from "react-redux";
import { useState } from "react"
import TextAreaField from "../../minor-components/fields/TextAreaField"
import SelectionField from "../../minor-components/fields/SeletionField"
import { SubmitButton } from "../../minor-components/button/SubmitButton";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { addRestaurant } from "../../../../redux/Actions/RestaurantAction"
// MAP-Creation
const containerStyle = {
    width: "100%",
    height: '50vh'
};
const center = { lat: 40.7810694898019, lng: -102.88417905250878 }

export const RestaurantRegistration = () => {


    let navigate = useNavigate();
    let dispatch = useDispatch();
    const alert = useAlert();
  
    const [value, setValue] = useState();
    const [credentials, setcredentials] = useState({
        restaurantName: '',
        tax: '',
        restaurantDescription: '',
        minDeliveryTime: '',
        maxDeliveryTime: '',
        timeStamp: '',

        cuisine: '',
        diningMode: '',


        owner_FirstName : '',
        owner_LastName : '',
        owner_email : '',
        owner_PhoneNumber : '',
    });

    const [selectCoverImage, setSelectCoverImage] = useState(null);
    const [selectCoverImagePreview, setSelectCoverImagePreview] = useState(null);
    
    const [restaurantLogo, setRestaurantLogo] = useState(null);
    const [restaurantLogoPreview, setRestaurantLogoPreview] = useState(null);
    const [formattedAddress, setFormattedAddress] = useState('');
    const [selected, setSelected] = useState(null);
    const [radius, setRadius] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        credentials.owner_PhoneNumber = value;
        
        var formData = new FormData();
        formData.append('restaurantLogo', restaurantLogo);
        formData.append('restaurantCoverImage', selectCoverImage);

        let obj = {
            geometry: { coordinates: [selected.lat, selected.lng] },
            formattedAddress: formattedAddress,
        };

        credentials.geometry = obj.geometry
        credentials.formattedAddress = obj.formattedAddress

        dispatch(addRestaurant(credentials, formData, navigate, alert));
    //   const { email, password } = credentials;
    };
  
    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    
    const handleReset = () => {
        setcredentials({
            restaurantName: '',
            tax: '',
            restaurantDescription: '',
            minDeliveryTime: '',
            maxDeliveryTime: '',
            timeStamp: '',

            cuisine: '',
            diningMode: '',


            owner_FirstName: '',
            owner_LastName: '',
            owner_email: '',
            owner_PhoneNumber: '',
        });
        setValue();
        setSelectCoverImage(null);
        setSelectCoverImagePreview(null);
        setRestaurantLogo(null);
        setRestaurantLogoPreview(null);
    } 

    return (
        <>
            <PageInstructure
                heading={'Restaurant registration application'}
            />
            <section className="m-0 landing-inline-1 section-gap">
                <div className="container">
                    <div class="step__header">
                        <h4 class="title">Restaurant registration application</h4>
                        <div class="step__wrapper">
                            <div class="step__item current">
                                <span class="shapes"></span>
                                General Information
                            </div>
                            <div class="step__item">
                                <span class="shapes"></span>
                                Business Plan
                            </div>
                            <div class="step__item">
                                <span class="shapes"></span>
                                Complete
                            </div>
                        </div>
                    </div>

                    
                    <div className="card __card">
                        <div class="card-header py-3 bg-transparent">
                            <h5 class="card-title my-1 text-primary">
                                <span class="card-header-icon">
                                    <i class="fa-solid fa-store"></i>
                                </span>
                                Restaurant info
                            </h5>
                        </div>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                                <div className="form-group mb-0 lang_form" id="default-form">
                                    <InputField
                                        variant="auth"
                                        extra=""
                                        label="Restaurant name (Default)*"
                                        placeholder="Ex : ABC Company"
                                        id="restaurantName"
                                        type="text"
                                        value={credentials.restaurantName}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group mb-0 lang_form">
                                    <InputField
                                        variant="auth"
                                        extra=""
                                        label="Vat/tax (%)*"
                                        placeholder="Vat/tax"
                                        id="tax"
                                        type="number"
                                        value={credentials.tax}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="lang_form default-form">
                                    <div class="form-group mb-0">
                                        <TextAreaField
                                            variant="auth"
                                            extra=""
                                            label="Restaurant Details (Default)*"
                                            placeholder="Restaurant Details"
                                            id="restaurantDescription"
                                            type="text"
                                            value={credentials.restaurantDescription}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                                    <div class="form-group mb-0">
                                        <InputField
                                            variant="auth"
                                            extra=""
                                            label="Min delivery time*"
                                            placeholder="30"
                                            id="minDeliveryTime"
                                            type="number"
                                            value={credentials.minDeliveryTime}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div class="form-group mb-0">
                                        <InputField
                                            variant="auth"
                                            extra=""
                                            label="Max delivery time*"
                                            placeholder="40"
                                            id="maxDeliveryTime"
                                            type="number"
                                            value={credentials.maxDeliveryTime}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div class="form-group mb-0">
                                        <SelectionField
                                            options={[
                                                { value: "minutes", label: "Minutes" },
                                                { value: "hours", label: "Hours" }
                                            ]}
                                            variant="auth"
                                            extra=""
                                            label="Select Time Stamp*"
                                            placeholder="Select Time Stamp*"
                                            id="timeStamp"
                                            value={credentials.timeStamp}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-29px">
                                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                                    <div className="w-full">
                                        <div className="form-group">
                                            <center>
                                            <img
                                                className="landing-initial-1"
                                                id="coverImageViewer"
                                                src={selectCoverImagePreview ? selectCoverImagePreview :  "https://stackfood-admin.6amtech.com/public/assets/landing/img/restaurant-cover.png"}
                                                alt="Product thumbnail"
                                            />
                                            </center>
                                            <div className="landing-input-file-grp">
                                            <label htmlFor="name" className="form-label pt-3">
                                                Restaurant cover photo{" "}
                                                <span className="text-danger">(Ratio 2:1)</span>
                                            </label>
                                            <label className="custom-file">
                                                <input
                                                    type="file"
                                                    name="cover_photo"
                                                    id="coverImageUpload"
                                                    className="form-control"
                                                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                                    onChange={(event) => {
                                                        setSelectCoverImage(event.currentTarget.files[0])
                                                        setSelectCoverImagePreview(URL.createObjectURL(event.target.files[0]));
                                                    }}
                                                />
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="form-group">
                                            <center>
                                            <img
                                                className="landing-initial-1"
                                                id="logoImageViewer"
                                                src={restaurantLogoPreview ? restaurantLogoPreview : "https://stackfood-admin.6amtech.com/public/assets/landing/img/restaurant-logo.png"}
                                                alt="Product thumbnail"
                                            />
                                            </center>
                                            <div className="landing-input-file-grp">
                                            <label className="form-label pt-3">
                                                Restaurant logo
                                                <small className="text-danger"> ( Ratio 1:1 )</small>
                                            </label>
                                            <label className="custom-file">
                                                <input
                                                    type="file"
                                                    name="logo"
                                                    id="customFileEg1"
                                                    className="form-control"
                                                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                                    required=""
                                                    onChange={(event) => {
                                                        setRestaurantLogo(event.currentTarget.files[0])
                                                        setRestaurantLogoPreview(URL.createObjectURL(event.target.files[0]));
                                                    }}
                                                />
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-3">
                                <div >
                                    <div className="form-group">
                                        <SelectionField
                                            options={[
                                                { value: "bengali", label: "Bengali" },
                                                { value: "chinese", label: "Chinese" },
                                                { value: "japanese", label: "Japanese" },
                                                { value: "italian", label: "Italian" },
                                                { value: "indian", label: "Indian" },
                                                { value: "fast food", label: "Fast Food" },
                                                { value: "sea food", label: "Sea Food" },
                                            ]}
                                            variant="auth"
                                            extra=""
                                            label="Cuisine*"
                                            placeholder="Select Cuisine*"
                                            id="cuisine"
                                            value={credentials.cuisine}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group">
                                        <SelectionField
                                            options={[
                                                { value: "delivery", label: "Delivery" },
                                                { value: "pickup", label: "Pick Up" },
                                                { value: "both", label: "Both" },
                                            ]}
                                            variant="auth"
                                            extra=""
                                            label="Delivery Mode*"
                                            placeholder="Select Delivery Mode*"
                                            id="diningMode"
                                            value={credentials.diningMode}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group">
                                        <label className={`text-sm text-navy-700 ml-1.5 font-medium dark:text-white`}>
                                            Search Your Address
                                        </label>
                                        <PlacesAutocomplete
                                            setSelected={setSelected}
                                            selected={selected}
                                            radius={radius}
                                            setRadius={setRadius}
                                            setFormattedAddress={setFormattedAddress}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 mt-4">
                                <Map selected={selected} radius={radius}/>
                            </div>
                            <h5 className="card-title mb-3 text--primary text-capitalize mt-4 pt-1">
                            Owner info
                            </h5>
                            <div className="grid grid-cols-3 gap-4">
                                <div >
                                    <div className="form-group">
                                        <InputField
                                            variant="auth"
                                            extra=""
                                            label="First name*"
                                            placeholder="First Name"
                                            id="owner_FirstName"
                                            type="text"
                                            value={credentials.owner_FirstName}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group">
                                        <InputField
                                            variant="auth"
                                            extra=""
                                            label="Last name*"
                                            placeholder="Last Name"
                                            id="owner_LastName"
                                            type="text"
                                            value={credentials.owner_LastName}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group">
                                        <InputField
                                            variant="auth"
                                            extra=""
                                            label="Email*"
                                            placeholder="Ex : ex@example.com"
                                            id="owner_email"
                                            type="email"
                                            value={credentials.owner_email}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">
                                            Phone
                                        </label>
                                       <PhoneInput
                                            isValidPhoneNumber={true}
                                            limitMaxLength={true}
                                            className="form-control"
                                            international
                                            initialValueFormat="international"
                                            countryCallingCodeEditable={false} 
                                            defaultCountry="PK"
                                            name="phoneNumber"
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange={setValue}
                                            displayInitialValueAsLocalNumber
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="btn--container justify-end mt-3">
                                <div className="mb-4">
                                    <button
                                        type="reset"
                                        onClick={handleReset}
                                        className={`btn btn--reset py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full`}
                                    >Reset</button>
                                </div>
                                <SubmitButton
                                    // extras="submitBtn"
                                    type="submit"
                                    innerText='Submit'
                                />
                        </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}


    //MAP-CODING

function Map({ selected, radius }) {
        console.log(selected, 'selected')
        console.log(radius, 'radius')
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
      
      
      
const PlacesAutocomplete = ({ setSelected, selected, setFormattedAddress}) => {
    const {
        ready,    
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();
    
    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
    
        const results = await getGeocode({ address });
        const { lat, lng } = getLatLng(results[0]);
        setFormattedAddress(results[0].formatted_address)
        setSelected({ lat, lng });
        };
        
    return (
        <Combobox onSelect={handleSelect}>
        <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
            placeholder="Search an address"
        />
        <ComboboxPopover>
            <ComboboxList>
            {status === "OK" &&
                data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
        </ComboboxPopover>
        </Combobox>
    );
};