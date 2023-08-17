import clientImage from '../../../../assets/07.jpg'
import React, { useState } from 'react';

export const Accounts = () => {

    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        // <section className="relative md:py-24 py-16 px-10 md:px-44">
        //     <div className="container">
        //         <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
        //         <div className="lg:col-span-3 md:col-span-5">
        //             <div className="flex items-center">
        //             <img
        //                 src={clientImage}
        //                 className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
        //                 alt=""
        //             />
        //             <div className="ms-2">
        //                 <p className="font-semibold text-slate-400">Hello,</p>
        //                 <h5 className="text-lg font-semibold">Cally Joseph</h5>
        //             </div>
        //             </div>
        //         </div>
        //         {/*end col*/}
        //         <div className="lg:col-span-9 md:col-span-7">
        //             <p className="text-slate-400 max-w-xl">
        //             Start working with Tailwind CSS that can provide everything you need
        //             to generate awareness, drive traffic, connect.
        //             </p>
        //         </div>
        //         {/*end col*/}
        //         <div className="lg:col-span-3 md:col-span-5">
        //             <div className="sticky top-20">
        //             <ul
        //                 className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
        //                 id="myTab"
        //                 data-tabs-toggle="#myTabContent"
        //                 role="tablist"
        //             >
        //                 <li role="presentation">
        //                 <button
        //                     className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full transition-all duration-500 ease-in-out ${
        //                         activeTab === 'dashboard' ? 'bg-indigo-600 text-white ' : 'text-black'
        //                       }`}
        //                     onClick={() => handleTabClick('dashboard')}
        //                     id="dashboard-tab"
        //                     data-tabs-target="#dashboard"
        //                     type="button"
        //                     role="tab"
        //                     aria-controls="dashboard"
        //                     aria-selected="true"
        //                 >
        //                     <i className="uil uil-dashboard text-[20px] me-2 align-middle" />{" "}
        //                     Dashboard
        //                 </button>
        //                 </li>
        //                 <li role="presentation">
        //                 <button
        //                     className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${
        //                         activeTab === 'order' ? 'bg-indigo-600 text-white ' : 'text-black'
        //                       }`}
        //                     onClick={() => handleTabClick('order')}
        //                     id="order-tab"
        //                     data-tabs-target="#order"
        //                     type="button"
        //                     role="tab"
        //                     aria-controls="order"
        //                     aria-selected="false"
        //                 >
        //                     <i className="uil uil-list-ul text-[20px] me-2 align-middle" />{" "}
        //                     Orders
        //                 </button>
        //                 </li>
        //                 <li role="presentation">
        //                 <button
        //                     className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${
        //                         activeTab === 'download' ? 'bg-indigo-600 text-white ' : 'text-black'
        //                       }`}
        //                     onClick={() => handleTabClick('download')}
        //                     id="download-tab"
        //                     data-tabs-target="#download"
        //                     type="button"
        //                     role="tab"
        //                     aria-controls="download"
        //                     aria-selected="false"
        //                 >
        //                     <i className="uil uil-arrow-circle-down text-[20px] me-2 align-middle" />{" "}
        //                     Downloads
        //                 </button>
        //                 </li>
        //                 <li role="presentation">
        //                 <button
        //                     className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${
        //                         activeTab === 'address' ? 'bg-indigo-600 text-white ' : 'text-black'
        //                       }`}
        //                     onClick={() => handleTabClick('address')}
        //                     id="address-tab"
        //                     data-tabs-target="#address"
        //                     type="button"
        //                     role="tab"
        //                     aria-controls="address"
        //                     aria-selected="false"
        //                 >
        //                     <i className="uil uil-map-marker text-[20px] me-2 align-middle" />{" "}
        //                     Addresses
        //                 </button>
        //                 </li>
        //                 <li role="presentation">
        //                 <button
        //                     className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${
        //                         activeTab === 'accountdetail' ? 'bg-indigo-600 text-white ' : 'text-black'
        //                     }`}
        //                     onClick={() => handleTabClick('accountdetail')}
        //                     id="accountdetail-tab"
        //                     data-tabs-target="#accountdetail"
        //                     type="button"
        //                     role="tab"
        //                     aria-controls="accountdetail"
        //                     aria-selected="false"
        //                 >
        //                     <i className="uil uil-user text-[20px] me-2 align-middle" />{" "}
        //                     Account Details
        //                 </button>
        //                 </li>
        //                 <li role="presentation">
        //                 <a
        //                     href="auth-login.html"
        //                     className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
        //                     type="button"
        //                 >
        //                     <i className="uil uil-sign-out-alt text-[20px] me-2 align-middle" />{" "}
        //                     Logout
        //                 </a>
        //                 </li>
        //             </ul>
        //             </div>
        //         </div>
        //         {/*end col*/}
        //         <div className="lg:col-span-9 md:col-span-7">
        //             <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" >
        //                     {activeTab === 'dashboard' && ( 
        //                             <div className="" id="dashboard" role="tabpanel" aria-labelledby="profile-tab" >
        //                                     <p className="text-slate-400 font-semibold">
        //                                     Hello{" "}
        //                                     <span className="text-slate-900 dark:text-white">
        //                                         cally_joseph
        //                                     </span>{" "}
        //                                     (not{" "}
        //                                     <span className="text-slate-900 dark:text-white">
        //                                         cally_joseph
        //                                     </span>
        //                                     ?{" "}
        //                                     <a href="javascript:void(0)" className="text-red-600">
        //                                         Log out
        //                                     </a>
        //                                     )
        //                                     </p>
        //                                     <p className="text-slate-400 font-semibold mt-4">
        //                                     From your account dashboard you can view your{" "}
        //                                     <a href="javascript:void(0)" className="text-red-600">
        //                                         recent orders
        //                                     </a>
        //                                     , manage your{" "}
        //                                     <a href="javascript:void(0)" className="text-red-600">
        //                                         shipping and billing addresses
        //                                     </a>
        //                                     , and{" "}
        //                                     <a href="javascript:void(0)" className="text-red-600">
        //                                         edit your password and account details
        //                                     </a>
        //                                     .
        //                                     </p>
        //                             </div>
        //                     )}
        //                     {activeTab === 'order' && (
        //                         <div className="" id="order" role="tabpanel" aria-labelledby="order-tab">
        //                             <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
        //                                 <table className="w-full text-start text-slate-500 dark:text-slate-400">
        //                                     <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
        //                                         <tr className="text-start">
        //                                             <th scope="col" className="px-2 py-3 text-start">
        //                                                 Order no.
        //                                             </th>
        //                                             <th scope="col" className="px-2 py-3 text-start">
        //                                                 Date
        //                                             </th>
        //                                             <th scope="col" className="px-2 py-3 text-start">
        //                                                 Status
        //                                             </th>
        //                                             <th scope="col" className="px-2 py-3 text-start">
        //                                                 Total
        //                                             </th>
        //                                             <th scope="col" className="px-2 py-3 text-start">
        //                                                 Action
        //                                             </th>
        //                                         </tr>
        //                                     </thead>
        //                                     <tbody>
        //                                         <tr className="bg-white dark:bg-slate-900 text-start">
        //                                             <th className="px-2 py-3 text-start" scope="row">
        //                                                 7107
        //                                             </th>
        //                                             <td className="px-2 py-3 text-start">1st November 2021</td>
        //                                             <td className="px-2 py-3 text-start text-green-600">
        //                                                 Delivered
        //                                             </td>
        //                                             <td className="px-2 py-3 text-start">
        //                                                 $ 320 <span className="text-slate-400">for 2items</span>
        //                                             </td>
        //                                             <td className="px-2 py-3 text-start">
        //                                                 <a href="javascript:void(0)" className="text-indigo-600">
        //                                                     View <i className="uil uil-arrow-right" />
        //                                                 </a>
        //                                             </td>
        //                                         </tr>
        //                                         <tr className="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
        //                                             <th className="px-2 py-3 text-start" scope="row">
        //                                                 8007
        //                                             </th>
        //                                             <td className="px-2 py-3 text-start">4th November 2021</td>
        //                                             <td className="px-2 py-3 text-start text-slate-400">
        //                                                 Processing
        //                                             </td>
        //                                             <td className="px-2 py-3 text-start">
        //                                                 $ 800 <span className="text-slate-400">for 1item</span>
        //                                             </td>
        //                                             <td className="px-2 py-3 text-start">
        //                                                 <a href="javascript:void(0)" className="text-indigo-600">
        //                                                     View <i className="uil uil-arrow-right" />
        //                                                 </a>
        //                                             </td>
        //                                         </tr>
        //                                         <tr className="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
        //                                             <th className="px-2 py-3 text-start" scope="row">
        //                                                 8008
        //                                             </th>
        //                                             <td className="px-2 py-3 text-start">4th November 2021</td>
        //                                             <td className="px-2 py-3 text-start text-red-600">
        //                                                 Canceled
        //                                             </td>
        //                                             <td className="px-2 py-3 text-start">
        //                                                 $ 800 <span className="text-slate-400">for 1item</span>
        //                                             </td>
        //                                             <td className="px-2 py-3 text-start">
        //                                                 <a href="javascript:void(0)" className="text-indigo-600">
        //                                                     View <i className="uil uil-arrow-right" />
        //                                                 </a>
        //                                             </td>
        //                                         </tr>
        //                                     </tbody>
        //                                 </table>
        //                             </div>
        //                         </div>
        //                     )}
        //                     {activeTab === 'download' && ( 
        //                         <div className="" id="download" role="tabpanel" aria-labelledby="download-tab" >
        //                             <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
        //                             <table className="w-full text-start text-slate-500 dark:text-slate-400">
        //                                 <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
        //                                 <tr className="text-start">
        //                                     <th
        //                                     scope="col"
        //                                     className="px-2 py-3 text-start min-w-[160px]"
        //                                     >
        //                                     Product Name
        //                                     </th>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-2 py-3 text-start min-w-[360px]"
        //                                     >
        //                                     Description
        //                                     </th>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-2 py-3 text-start min-w-[160px]"
        //                                     >
        //                                     Status
        //                                     </th>
        //                                 </tr>
        //                                 </thead>
        //                                 <tbody>
        //                                 <tr className="bg-white dark:bg-slate-900 text-start">
        //                                     <th className="px-2 py-3 text-start" scope="row">
        //                                     Quick heal
        //                                     </th>
        //                                     <td className="px-2 py-3 text-start">
        //                                     It is said that song composers of the past used dummy
        //                                     texts as lyrics when writing melodies in order to have a
        //                                     'ready-made' text to sing with the melody.
        //                                     </td>
        //                                     <td className="px-2 py-3 text-start text-green-600">
        //                                     Downloaded
        //                                     </td>
        //                                 </tr>
        //                                 </tbody>
        //                             </table>
        //                             </div>
        //                         </div>
        //                     )}
        //                     {activeTab === 'address' && (
        //                         <div
        //                             className=""
        //                             id="address"
        //                             role="tabpanel"
        //                             aria-labelledby="address-tab"
        //                         >
        //                             <h6 className="text-slate-400 mb-0">
        //                                 The following addresses will be used on the checkout page by
        //                                 default.
        //                             </h6>
        //                             <div className="md:flex mt-6">
        //                                 <div className="md:w-1/2 md:px-3">
        //                                     <div className="flex items-center mb-4 justify-between">
        //                                         <h5 className="text-xl font-semibold">Billing Address:</h5>
        //                                         <a href="#" className="text-indigo-600 text-lg">
        //                                             <i className="uil uil-edit align-middle" />
        //                                         </a>
        //                                     </div>
        //                                     <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
        //                                         <p className="text-lg font-semibold mb-2">Cally Joseph</p>
        //                                         <ul className="list-none">
        //                                             <li className="flex">
        //                                                 <i className="uil uil-map-marker text-lg me-2" />
        //                                                 <p className="text-slate-400">
        //                                                     C/54 Northwest Freeway, Suite 558, <br /> Houston, USA
        //                                                     485
        //                                                 </p>
        //                                             </li>
        //                                             <li className="flex mt-1">
        //                                                 <i className="uil uil-phone text-lg me-2" />
        //                                                 <p className="text-slate-400">+123 897 5468</p>
        //                                             </li>
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                                 <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0">
        //                                     <div className="flex items-center mb-4 justify-between">
        //                                         <h5 className="text-xl font-semibold">Shipping Address:</h5>
        //                                         <a href="#" className="text-indigo-600 text-lg">
        //                                             <i className="uil uil-edit align-middle" />
        //                                         </a>
        //                                     </div>
        //                                     <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
        //                                         <p className="text-lg font-semibold mb-2">Cally Joseph</p>
        //                                         <ul className="list-none">
        //                                             <li className="flex">
        //                                                 <i className="uil uil-map-marker text-lg me-2" />
        //                                                 <p className="text-slate-400">
        //                                                     C/54 Northwest Freeway, Suite 558, <br /> Houston, USA
        //                                                     485
        //                                                 </p>
        //                                             </li>
        //                                             <li className="flex mt-1">
        //                                                 <i className="uil uil-phone text-lg me-2" />
        //                                                 <p className="text-slate-400">+123 897 5468</p>
        //                                             </li>
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )}
        //                     {activeTab === 'accountdetail' && (
        //                         <div
        //                             className=""
        //                             id="accountdetail"
        //                             role="tabpanel"
        //                             aria-labelledby="accountdetail-tab"
        //                         >
        //                             <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
        //                             <form>
        //                                 <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        //                                     <div>
        //                                         <label className="form-label font-medium">
        //                                             First Name : <span className="text-red-600">*</span>
        //                                         </label>
        //                                         <div className="form-icon relative mt-2">
        //                                             <i
        //                                                 data-feather="user"
        //                                                 className="w-4 h-4 absolute top-3 start-4"
        //                                             />
        //                                             <input
        //                                                 type="text"
        //                                                 className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                 placeholder="First Name:"
        //                                                 id="firstname"
        //                                                 name="name"
        //                                                 required=""
        //                                             />
        //                                         </div>
        //                                     </div>
        //                                     <div>
        //                                         <label className="form-label font-medium">
        //                                             Last Name : <span className="text-red-600">*</span>
        //                                         </label>
        //                                         <div className="form-icon relative mt-2">
        //                                             <i
        //                                                 data-feather="user-check"
        //                                                 className="w-4 h-4 absolute top-3 start-4"
        //                                             />
        //                                             <input
        //                                                 type="text"
        //                                                 className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                 placeholder="Last Name:"
        //                                                 id="lastname"
        //                                                 name="name"
        //                                                 required=""
        //                                             />
        //                                         </div>
        //                                     </div>
        //                                     <div>
        //                                         <label className="form-label font-medium">
        //                                             Your Email : <span className="text-red-600">*</span>
        //                                         </label>
        //                                         <div className="form-icon relative mt-2">
        //                                             <i
        //                                                 data-feather="mail"
        //                                                 className="w-4 h-4 absolute top-3 start-4"
        //                                             />
        //                                             <input
        //                                                 type="email"
        //                                                 className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                 placeholder="Email"
        //                                                 name="email"
        //                                                 required=""
        //                                             />
        //                                         </div>
        //                                     </div>
        //                                     <div>
        //                                         <label className="form-label font-medium">
        //                                             Occupation :{" "}
        //                                         </label>
        //                                         <div className="form-icon relative mt-2">
        //                                             <i
        //                                                 data-feather="bookmark"
        //                                                 className="w-4 h-4 absolute top-3 start-4"
        //                                             />
        //                                             <input
        //                                                 name="name"
        //                                                 id="occupation"
        //                                                 type="text"
        //                                                 className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                 placeholder="Occupation :"
        //                                             />
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 {/*end grid*/}
        //                                 <div className="grid grid-cols-1">
        //                                     <div className="mt-5">
        //                                         <label className="form-label font-medium">
        //                                             Description :{" "}
        //                                         </label>
        //                                         <div className="form-icon relative mt-2">
        //                                             <i
        //                                                 data-feather="message-circle"
        //                                                 className="w-4 h-4 absolute top-3 start-4"
        //                                             />
        //                                             <textarea
        //                                                 name="comments"
        //                                                 id="comments"
        //                                                 className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                 placeholder="Message :"
        //                                                 defaultValue={""}
        //                                             />
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 {/*end row*/}
        //                                 <input
        //                                     type="submit"
        //                                     id="submit"
        //                                     name="send"
        //                                     className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
        //                                     defaultValue="Save Changes"
        //                                 />
        //                             </form>
        //                             {/*end form*/}
        //                             <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
        //                                 <div>
        //                                     <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
        //                                     <form>
        //                                         <div className="grid grid-cols-1 gap-5">
        //                                             <div>
        //                                                 <label className="form-label font-medium">
        //                                                     Phone No. :
        //                                                 </label>
        //                                                 <div className="form-icon relative mt-2">
        //                                                     <i
        //                                                         data-feather="phone"
        //                                                         className="w-4 h-4 absolute top-3 start-4"
        //                                                     />
        //                                                     <input
        //                                                         name="number"
        //                                                         id="number"
        //                                                         type="number"
        //                                                         className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                         placeholder="Phone :"
        //                                                     />
        //                                                 </div>
        //                                             </div>
        //                                             <div>
        //                                                 <label className="form-label font-medium">
        //                                                     Website :
        //                                                 </label>
        //                                                 <div className="form-icon relative mt-2">
        //                                                     <i
        //                                                         data-feather="globe"
        //                                                         className="w-4 h-4 absolute top-3 start-4"
        //                                                     />
        //                                                     <input
        //                                                         name="url"
        //                                                         id="url"
        //                                                         type="url"
        //                                                         className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                         placeholder="Url :"
        //                                                     />
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                         {/*end grid*/}
        //                                         <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">
        //                                             Add
        //                                         </button>
        //                                     </form>
        //                                 </div>
        //                                 {/*end col*/}
        //                                 <div>
        //                                     <h5 className="text-lg font-semibold mb-4">
        //                                         Change password :
        //                                     </h5>
        //                                     <form>
        //                                         <div className="grid grid-cols-1 gap-5">
        //                                             <div>
        //                                                 <label className="form-label font-medium">
        //                                                     Old password :
        //                                                 </label>
        //                                                 <div className="form-icon relative mt-2">
        //                                                     <i
        //                                                         data-feather="key"
        //                                                         className="w-4 h-4 absolute top-3 start-4"
        //                                                     />
        //                                                     <input
        //                                                         type="password"
        //                                                         className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                         placeholder="Old password"
        //                                                         required=""
        //                                                     />
        //                                                 </div>
        //                                             </div>
        //                                             <div>
        //                                                 <label className="form-label font-medium">
        //                                                     New password :
        //                                                 </label>
        //                                                 <div className="form-icon relative mt-2">
        //                                                     <i
        //                                                         data-feather="key"
        //                                                         className="w-4 h-4 absolute top-3 start-4"
        //                                                     />
        //                                                     <input
        //                                                         type="password"
        //                                                         className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                         placeholder="New password"
        //                                                         required=""
        //                                                     />
        //                                                 </div>
        //                                             </div>
        //                                             <div>
        //                                                 <label className="form-label font-medium">
        //                                                     Re-type New password :
        //                                                 </label>
        //                                                 <div className="form-icon relative mt-2">
        //                                                     <i
        //                                                         data-feather="key"
        //                                                         className="w-4 h-4 absolute top-3 start-4"
        //                                                     />
        //                                                     <input
        //                                                         type="password"
        //                                                         className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        //                                                         placeholder="Re-type New password"
        //                                                         required=""
        //                                                     />
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                         {/*end grid*/}
        //                                         <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">
        //                                             Save password
        //                                         </button>
        //                                     </form>
        //                                 </div>
        //                                 {/*end col*/}
        //                             </div>
        //                             {/*end row*/}
        //                         </div>
        //                     )}
        //             </div>
        //         </div>
        //         {/*end col*/}
        //         </div>
        //         {/*end grid*/}
        //     </div>
        // </section>
        <main className='main-content w-full px-[var(--margin-x)] pb-8 mt-28'>
            <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                <div className="col-span-12 lg:col-span-4">
                    <div className="card p-4 sm:p-5">
                    <div className="flex items-center space-x-4">
                        <div className="avatar h-14 w-14">
                        <img
                            className="rounded-full"
                            src={clientImage}
                            alt="avatar"
                        />
                        </div>
                        <div>
                        <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
                            Travis Fuller
                        </h3>
                        <p className="text-xs+">Author</p>
                        </div>
                    </div>
                    <ul className="mt-6 space-y-1.5 font-inter font-medium">
                        <li>
                        <a
                            className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
                            href="#"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            </svg>
                            <span>Account</span>
                        </a>
                        </li>
                        <li>
                        <a
                            className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="#"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                            </svg>
                            <span>Notification</span>
                        </a>
                        </li>
                        <li>
                        <a
                            className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="#"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                            </svg>
                            <span>Security</span>
                        </a>
                        </li>
                        <li>
                        <a
                            className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="#"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                            </svg>
                            <span>Apps</span>
                        </a>
                        </li>
                        <li>
                        <a
                            className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="#"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                            </svg>
                            <span> Privacy &amp; data </span>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="card">
                    <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                        <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Account Setting
                        </h2>
                        <div className="flex justify-center space-x-2">
                        <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                            Cancel
                        </button>
                        <button className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                            Save
                        </button>
                        </div>
                    </div>
                    <div className="p-4 sm:p-5">
                        <div className="flex flex-col">
                        <span className="text-base font-medium text-slate-600 dark:text-navy-100">
                            Avatar
                        </span>
                        <div className="avatar mt-1.5 h-20 w-20">
                            <img
                            className="mask is-squircle"
                            src={clientImage}
                            alt="avatar"
                            />
                            <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
                            <button className="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        </div>
                        <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="block">
                            <span>Display name </span>
                            <span className="relative mt-1.5 flex">
                            <input
                                className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Enter name"
                                type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                <i className="fa-regular fa-user text-base" />
                            </span>
                            </span>
                        </label>
                        <label className="block">
                            <span>Full Name </span>
                            <span className="relative mt-1.5 flex">
                            <input
                                className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Enter full name"
                                type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                <i className="fa-regular fa-user text-base" />
                            </span>
                            </span>
                        </label>
                        <label className="block">
                            <span>Email Address </span>
                            <span className="relative mt-1.5 flex">
                            <input
                                className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Enter email address"
                                type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                <i className="fa-regular fa-envelope text-base" />
                            </span>
                            </span>
                        </label>
                        <label className="block">
                            <span>Phone Number</span>
                            <span className="relative mt-1.5 flex">
                            <input
                                className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Enter phone number"
                                type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                <i className="fa fa-phone" />
                            </span>
                            </span>
                        </label>
                        </div>
                        <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
                        <div>
                        <h3 className="text-base font-medium text-slate-600 dark:text-navy-100">
                            Linked Accounts
                        </h3>
                        <p className="text-xs+ text-slate-400 dark:text-navy-300">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center space-x-4">
                            <div className="h-12 w-12">
                                <img src="images/logos/google.svg" alt="logo" />
                            </div>
                            <p className="font-medium line-clamp-1">Sign In with Google</p>
                            </div>
                            <button className="btn h-8 rounded-full border border-slate-200 px-3 text-xs+ font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                            Connect
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}