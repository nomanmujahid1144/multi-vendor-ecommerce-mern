
import DashboardHeroSection from "./components/major-components/DashboardHeroSection";
import { Signup } from "./screen/Signup";
import { Login } from "./screen/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SideAndNavbar } from "./components/major-components/SideAndNavbar";
import { Products } from './components/major-components/Products'
import { Orders } from "./components/major-components/Orders";
import { Drivers } from "./components/major-components/Drivers";
import { Categories } from "./components/major-components/Categories";
import { Customers } from "./components/major-components/Customers";
import { SalesPromotion } from "./components/major-components/SalesPromotion";
import { Accounts } from "./components/major-components/Accounts";
import { StoreLocator } from "./components/major-components/StoreLocator";
import { WebsiteSetting } from "./components/major-components/WebsiteSetting";
import { AppSettings } from "./components/major-components/AppSettings";
import { Radius } from "./components/major-components/Radius";
import { Otp } from "./components/major-components/Otp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, setRestaurantData } from "./redux/Actions/ProfileActions";
import { useJsApiLoader} from "@react-google-maps/api";
import { SingleRestaurant } from "./components/major-components/SingleRestaurant";
import { AllRestaurants } from "./components/major-components/AllRestaurants";
import { AboutUs } from "./components/major-components/AboutUs";
import { TrakingDetails } from "./components/minor-components/TrackingDetails";
import { Layout } from "./components/minor-components/Layout";


import "./components/fontawesomeIcons"
import { ApplyNewRestaurant } from "./components/major-components/apply-new-restaurant/ApplyNewRestaurant";
import { singleRestaurant } from "./redux/Actions/RestaurantAction";


const places = ["places"]
function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyASE7MqDo7TNZ_4fmORznk_JMBFm0d_pKY',
    libraries: places,
  });
  const dispatch = useDispatch();
  const {token} = useSelector(
    (state) => state.ProfileReducer
  );

  
  useEffect(() => {
    const localStorageToken = localStorage.getItem('token'); 
    const restaurantData = localStorage.getItem('restaurant');  
    if (localStorageToken) {
      dispatch(adminLogin(localStorageToken))
    }
    if (restaurantData) {
      dispatch(setRestaurantData(JSON.parse(restaurantData)));
    }
    dispatch(singleRestaurant());
  }, [])

  return (
    <>
      <Router >
        <Layout >
          <Routes >
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/verification' element={<Otp />} />
              <Route path='/restaurant/apply' element={<ApplyNewRestaurant />} />
              <Route path='/' element={token ? <SideAndNavbar /> : <Login />} >
                <Route index element={<DashboardHeroSection />} />
                <Route path='/products' element={<Products />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/drivers' element={<Drivers />} />
                <Route path='/categories' element={<Categories />} />
                {/* <Route path='/customers' element={<Customers />} /> */}
                {/* <Route path='/salesPromotion' element={<SalesPromotion />} /> */}
                {/* <Route path='/accounts' element={<Accounts />} />
                <Route path='/storelocator' element={<StoreLocator />} /> */}
                <Route path='/earnings' element={<WebsiteSetting />} />
                {/* <Route path='/appSettings' element={<AppSettings />} /> */}
                <Route path='/aboutus' element={<AboutUs />} />
                {/* <Route path='/all-restaurants' element={<AllRestaurants />} />
                <Route path='/add-restaurant' element={<Radius />} />
                <Route path='/singleRestaurant/:restaurantName' element={<SingleRestaurant />} /> */}
                <Route path='/trackorder' element={<TrakingDetails /> } />
              </Route>
          </Routes>
        </Layout>
      </Router>

    </>
  );
}

export default App;
