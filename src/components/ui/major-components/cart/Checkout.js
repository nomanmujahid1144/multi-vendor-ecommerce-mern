export const Checkout = () => {
    return (
        // <div className="relative mx-auto w-full bg-white">
        //     <div className="grid min-h-screen grid-cols-10">
        //         <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
        //         <div className="mx-auto w-full max-w-lg">
        //             <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
        //             Secure Checkout
        //             <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20" />
        //             </h1>
        //             <form action="" className="mt-10 flex flex-col space-y-4">
        //             <div>
        //                 <label
        //                 htmlFor="email"
        //                 className="text-xs font-semibold text-gray-500"
        //                 >
        //                 Email
        //                 </label>
        //                 <input
        //                 type="email"
        //                 id="email"
        //                 name="email"
        //                 placeholder="john.capler@fang.com"
        //                 className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
        //                 />
        //             </div>
        //             <div className="relative">
        //                 <label
        //                 htmlFor="card-number"
        //                 className="text-xs font-semibold text-gray-500"
        //                 >
        //                 Card number
        //                 </label>
        //                 <input
        //                 type="text"
        //                 id="card-number"
        //                 name="card-number"
        //                 placeholder="1234-5678-XXXX-XXXX"
        //                 className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
        //                 />
        //                 <img
        //                 src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
        //                 alt=""
        //                 className="absolute bottom-3 right-3 max-h-4"
        //                 />
        //             </div>
        //             <div>
        //                 <p className="text-xs font-semibold text-gray-500">
        //                 Expiration date
        //                 </p>
        //                 <div className="mr-6 flex flex-wrap">
        //                 <div className="my-1">
        //                     <label htmlFor="month" className="sr-only">
        //                     Select expiration month
        //                     </label>
        //                     <select
        //                     name="month"
        //                     id="month"
        //                     className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
        //                     >
        //                     <option value="">Month</option>
        //                     </select>
        //                 </div>
        //                 <div className="my-1 ml-3 mr-6">
        //                     <label htmlFor="year" className="sr-only">
        //                     Select expiration year
        //                     </label>
        //                     <select
        //                     name="year"
        //                     id="year"
        //                     className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
        //                     >
        //                     <option value="">Year</option>
        //                     </select>
        //                 </div>
        //                 <div className="relative my-1">
        //                     <label htmlFor="security-code" className="sr-only">
        //                     Security code
        //                     </label>
        //                     <input
        //                     type="text"
        //                     id="security-code"
        //                     name="security-code"
        //                     placeholder="Security code"
        //                     className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
        //                     />
        //                 </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <label htmlFor="card-name" className="sr-only">
        //                 Card name
        //                 </label>
        //                 <input
        //                 type="text"
        //                 id="card-name"
        //                 name="card-name"
        //                 placeholder="Name on the card"
        //                 className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
        //                 />
        //             </div>
        //             </form>
        //             <p className="mt-10 text-center text-sm font-semibold text-gray-500">
        //             By placing this order you agree to the{" "}
        //             <a
        //                 href="/"
        //                 className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
        //             >
        //                 Terms and Conditions
        //             </a>
        //             </p>
        //             <button
        //             type="submit"
        //             className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
        //             >
        //             Place Order
        //             </button>
        //         </div>
        //         </div>
        //         <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
        //         <h2 className="sr-only">Order summary</h2>
        //         <div>
        //             <img
        //             src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        //             alt=""
        //             className="absolute inset-0 h-full w-full object-cover"
        //             />
        //             <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95" />
        //         </div>
        //         <div className="relative">
        //             <ul className="space-y-5">
        //             <li className="flex justify-between">
        //                 <div className="inline-flex">
        //                 <img
        //                     src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        //                     alt=""
        //                     className="max-h-16"
        //                 />
        //                 <div className="ml-3">
        //                     <p className="text-base font-semibold text-white">
        //                     Nano Titanium Hair Dryer
        //                     </p>
        //                     <p className="text-sm font-medium text-white text-opacity-80">
        //                     Pdf, doc Kindle
        //                     </p>
        //                 </div>
        //                 </div>
        //                 <p className="text-sm font-semibold text-white">$260.00</p>
        //             </li>
        //             <li className="flex justify-between">
        //                 <div className="inline-flex">
        //                 <img
        //                     src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        //                     alt=""
        //                     className="max-h-16"
        //                 />
        //                 <div className="ml-3">
        //                     <p className="text-base font-semibold text-white">Luisia H35</p>
        //                     <p className="text-sm font-medium text-white text-opacity-80">
        //                     Hair Dryer
        //                     </p>
        //                 </div>
        //                 </div>
        //                 <p className="text-sm font-semibold text-white">$350.00</p>
        //             </li>
        //             </ul>
        //             <div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
        //             <div className="space-y-2">
        //             <p className="flex justify-between text-lg font-bold text-white">
        //                 <span>Total price:</span>
        //                 <span>$510.00</span>
        //             </p>
        //             <p className="flex justify-between text-sm font-medium text-white">
        //                 <span>Vat: 10%</span>
        //                 <span>$55.00</span>
        //             </p>
        //             </div>
        //         </div>
        //         <div className="relative mt-10 text-white">
        //             <h3 className="mb-5 text-lg font-bold">Support</h3>
        //             <p className="text-sm font-semibold">
        //             +01 653 235 211 <span className="font-light">(International)</span>
        //             </p>
        //             <p className="mt-1 text-sm font-semibold">
        //             support@nanohair.com <span className="font-light">(Email)</span>
        //             </p>
        //             <p className="mt-2 text-xs font-medium">
        //             Call us now for payment related issues
        //             </p>
        //         </div>
        //         <div className="relative mt-10 flex">
        //             <p className="flex flex-col">
        //             <span className="text-sm font-bold text-white">
        //                 Money Back Guarantee
        //             </span>
        //             <span className="text-xs font-medium text-white">
        //                 within 30 days of purchase
        //             </span>
        //             </p>
        //         </div>
        //         </div>
        //     </div>
        // </div>
<section className="relative md:py-24 py-16 px-10 md:px-28">
  <div className="container">
    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
      <div className="lg:col-span-8">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
          <h3 className="text-xl leading-normal font-semibold">
            Billing address
          </h3>
          <form>
            <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
              <div className="lg:col-span-6">
                <label className="form-label font-semibold">
                  First Name : <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="First Name:"
                  id="firstname"
                  name="name"
                  required=""
                />
              </div>
              <div className="lg:col-span-6">
                <label className="form-label font-semibold">
                  Last Name : <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="Last Name:"
                  id="lastname"
                  name="name"
                  required=""
                />
              </div>
              <div className="lg:col-span-6">
                <label className="form-label font-semibold">Username</label>
                <div className="relative mt-2">
                  <span
                    className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                    id="basic-addon1"
                  >
                    <i className="uil uil-at" />
                  </span>
                  <input
                    type="text"
                    className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    min={1}
                    max={1000}
                    placeholder="Enter Amount"
                    id="amount"
                    aria-describedby="inputGroupPrepend"
                    required=""
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <label className="form-label font-semibold">
                  Your Email : <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="Email"
                  name="email"
                  required=""
                />
              </div>
              <div className="lg:col-span-12">
                <label className="form-label font-semibold">
                  Address : <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="Address:"
                  id="address"
                  name="name"
                  required=""
                />
              </div>
              <div className="lg:col-span-12">
                <label className="form-label font-semibold">Address 2 : </label>
                <input
                  type="text"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="Address:"
                  id="address"
                  name="name"
                  required=""
                />
              </div>
              <div className="lg:col-span-4">
                <label className="font-semibold">Country:</label>
                <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                  <option value="USA">USA</option>
                  <option value="CAD">Canada</option>
                  <option value="CHINA">China</option>
                </select>
              </div>
              <div className="lg:col-span-4">
                <label className="font-semibold">State:</label>
                <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                  <option value="CAL">California</option>
                  <option value="TEX">Texas</option>
                  <option value="FLOR">Florida</option>
                </select>
              </div>
              <div className="lg:col-span-4">
                <label className="form-label font-semibold">
                  Zip Code : <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="Zip:"
                  id="zipcode"
                  name="number"
                  required=""
                />
              </div>
              <div className="lg:col-span-12">
                <div className="flex items-center w-full mb-0">
                  <input
                    className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                    type="checkbox"
                    defaultValue=""
                    id="sameaddress"
                  />
                  <label
                    className="form-check-label text-slate-400"
                    htmlFor="sameaddress"
                  >
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div className="flex items-center w-full mb-0">
                  <input
                    className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                    type="checkbox"
                    defaultValue=""
                    id="savenexttime"
                  />
                  <label
                    className="form-check-label text-slate-400"
                    htmlFor="savenexttime"
                  >
                    Save this information for next time
                  </label>
                </div>
              </div>
            </div>
          </form>
          <h3 className="text-xl leading-normal font-semibold mt-6">Payment</h3>
          <form action="">
            <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
              <div className="lg:col-span-12">
                <div className="block">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        name="radio-colors"
                        defaultValue={1}
                        defaultChecked=""
                      />
                      <span className="text-slate-400">Credit card</span>
                    </label>
                  </div>
                </div>
                <div className="block mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        name="radio-colors"
                        defaultValue={1}
                      />
                      <span className="text-slate-400">Debit Card</span>
                    </label>
                  </div>
                </div>
                <div className="block mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        name="radio-colors"
                        defaultValue={1}
                      />
                      <span className="text-slate-400">PayPal</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <label className="form-label font-semibold">
                  Account Holder Name : <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="Name:"
                  id="accountname"
                  name="name"
                  required=""
                />
              </div>
              <div className="lg:col-span-6">
                <label className="form-label font-semibold">
                  Credit card number : <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder="**** **** **** ****"
                  id="cardnumber"
                  name="number"
                  required=""
                />
              </div>
              <div className="lg:col-span-3">
                <label className="form-label font-semibold">
                  Expiration : <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder=""
                  id="expiration"
                  name="number"
                  required=""
                />
              </div>
              <div className="lg:col-span-3">
                <label className="form-label font-semibold">
                  CVV : <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  placeholder=""
                  id="cvv"
                  name="number"
                  required=""
                />
              </div>
            </div>
          </form>
          <div className="mt-4">
            <input
              type="submit"
              className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
              defaultValue="Continue to checkout"
            />
          </div>
        </div>
      </div>
      {/*end col*/}
      <div className="lg:col-span-4">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold">Your Cart</h5>
            <a
              href="javascript:void(0)"
              className="bg-indigo-600 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5"
            >
              3
            </a>
          </div>
          <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
            <div className="p-3 flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Product Name</h5>
                <p className="text-sm text-slate-400">Brief description</p>
              </div>
              <p className="text-slate-400 font-semibold">$ 12</p>
            </div>
            <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
              <div>
                <h5 className="font-semibold">Second product</h5>
                <p className="text-sm text-slate-400">Brief description</p>
              </div>
              <p className="text-slate-400 font-semibold">$ 18</p>
            </div>
            <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
              <div>
                <h5 className="font-semibold">Third item</h5>
                <p className="text-sm text-slate-400">Brief description</p>
              </div>
              <p className="text-slate-400 font-semibold">$ 20</p>
            </div>
            <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
              <div>
                <h5 className="font-semibold">Promo code</h5>
                <p className="text-sm text-green-600">EXAMPLECODE</p>
              </div>
              <p className="text-red-600 font-semibold">-$ 10</p>
            </div>
            <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
              <div>
                <h5 className="font-semibold">Total (USD)</h5>
              </div>
              <p className="font-semibold">$ 30</p>
            </div>
          </div>
          <div className="subcribe-form mt-6">
            <form className="relative max-w-xl">
              <input
                type="email"
                id="subcribe"
                name="email"
                className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                placeholder="Promo code"
              />
              <button
                type="submit"
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full"
              >
                Redeem
              </button>
            </form>
            {/*end form*/}
          </div>
        </div>
      </div>
      {/*end col*/}
    </div>
    {/*end grid*/}
  </div>
</section>

    )
}