import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import logo from '../../assets/logo2.png'
import { axiosInstance } from "../../constants/axiosInstance";

export const Otp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [OTP, setOTP] = useState('');
  const PhoneNum = location.state.phoneNumber;


  const addPhone = async () => {
    const res = await axiosInstance.patch('/api/v1/admin/addadminNumber', { PhoneNum }, {
      headers: {
        "authorization": localStorage.getItem('token')
      },
    });
    setTimeout(function () {
      navigate("/");
    }, 500);
    // if (json.success) {

    // }else{
    //   console.log("Can't Save Your Phone No");
    // }
  }

  const handleSubmit = async (e) => {
    if (OTP.length === 6) {
      let conformatoinResult = window.conformatoinResult;
      conformatoinResult.confirm(OTP).then((result) => {
        const user = result.user;
        addPhone();

      }).catch((error) => {
        console.log(error + "OTP Fail");
      });
    }


    // setOTP(OTP);


  }

  const onChange = (e) => {
    setOTP(e.target.value);
  };


  return (
    <>
      {/* <div>
      <Navbar />
    </div> */}
      <div className="h-[100vh] flex bg-emerald-50 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-auto shadow-md rounded-md bg-white flex justify-center">
          <div floated={false} className="h-auto p-12">
            <div className="max-w-md w-full space-y-8">
              <div className="w-96">
                <img
                  className="w-36 mx-auto"
                  src={logo}
                  alt="Workflow"
                />
                <h2 className="mt-2 pb-7 text-center text-2xl font-normal text-gray-600">
                  Let's get Started
                </h2>
              </div>
              <form className="mt-8 space-y-6" >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <div className="mb-3 ml-4 ">
                      <label className="font-bold">Enter the code send to {PhoneNum}</label>
                    </div>
                    <input
                      id="otp"
                      name="otp"
                      type="text"
                      value={OTP}
                      onChange={onChange}
                      minLength={6}
                      maxLength={6}
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded relative block w-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-myBg-500 focus:border-myBg-500 focus:z-10 sm:text-sm"
                      placeholder="000000"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button" onClick={handleSubmit}
                    className="group relative w-96 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-myBg hover:bg-myBg-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myBg-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Submit
                  </button>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
      {/* <div>
      <Footer />
    </div> */}
    </>
  );
};
