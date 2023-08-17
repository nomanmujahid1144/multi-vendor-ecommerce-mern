import logo from '../../../../assets/logo/logo.png'
import { SocialIcons } from './SocialMediaIcons'

export const Footer = () => {
    return (
        // <footer className="bg-textGrey">
        //     <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        //         <div className="md:flex md:justify-between">
        //         <div className="mb-6 md:mb-0">
        //             <a href="https://flowbite.com/" className="flex items-center">
        //             <img
        //                 src={logo}
        //                 className="h-8 mr-3 rounded-full"
        //                 alt="FlowBite Logo"
        //             />
        //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        //                 Codebreakers
        //             </span>
        //             </a>
        //         </div>
        //         <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        //             <div>
        //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        //                 Resources
        //             </h2>
        //             <ul className="text-gray-600 dark:text-gray-400 font-medium">
        //                 <li className="mb-4">
        //                 <a href="https://flowbite.com/" className="hover:underline">
        //                     Flowbite
        //                 </a>
        //                 </li>
        //                 <li>
        //                 <a href="https://tailwindcss.com/" className="hover:underline">
        //                     Tailwind CSS
        //                 </a>
        //                 </li>
        //             </ul>
        //             </div>
        //             <div>
        //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        //                 Follow us
        //             </h2>
        //             <ul className="text-gray-600 dark:text-gray-400 font-medium">
        //                 <li className="mb-4">
        //                 <a
        //                     href="https://github.com/themesberg/flowbite"
        //                     className="hover:underline "
        //                 >
        //                     Github
        //                 </a>
        //                 </li>
        //                 <li>
        //                 <a
        //                     href="https://discord.gg/4eeurUVvTy"
        //                     className="hover:underline"
        //                 >
        //                     Discord
        //                 </a>
        //                 </li>
        //             </ul>
        //             </div>
        //             <div>
        //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        //                 Legal
        //             </h2>
        //             <ul className="text-gray-600 dark:text-gray-400 font-medium">
        //                 <li className="mb-4">
        //                 <a href="/" className="hover:underline">
        //                     Privacy Policy
        //                 </a>
        //                 </li>
        //                 <li>
        //                 <a href="/" className="hover:underline">
        //                     Terms &amp; Conditions
        //                 </a>
        //                 </li>
        //             </ul>
        //             </div>
        //         </div>
        //         </div>
        //         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        //         <div className="sm:flex sm:items-center sm:justify-between">
        //         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        //             © 2023{" "}
        //             <a href="https://flowbite.com/" className="hover:underline">
        //             Codebreakers™
        //             </a>
        //             . All Rights Reserved.
        //         </span>
        //         <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        //             <SocialIcons />
        //         </div>
        //         </div>
        //     </div>
        // </footer>
        <footer className="footer bg-black relative text-gray-200 dark:text-gray-200 px-10 md:px-28">
  <div className="container relative">
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="py-[60px] px-0">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-12">
              <a href="#" className="text-[22px] focus:outline-none">
                <img src={logo} className='h-7' alt="" />
              </a>
              <p className="mt-6 text-gray-300">
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p>
              <ul className="list-none mt-6">
                {/* <SocialIcons /> */}
                {/* <li className="inline">
                  <a
                    href="../../item/techwind-tailwind-css-multipurpose-landing-template/37847929.html"
                    target="_blank"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-shopping-cart align-middle"
                      title="Buy Now"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="../../shreethemes.html"
                    target="_blank"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-dribbble align-middle"
                      title="dribbble"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="../../shreethemes-1.html"
                    target="_blank"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i className="uil uil-behance" title="Behance" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i className="uil uil-linkedin" title="Linkedin" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="../../shreethemes-2.html"
                    target="_blank"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-facebook-f align-middle"
                      title="facebook"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="../../shreethemes/index.htm"
                    target="_blank"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-instagram align-middle"
                      title="instagram"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://twitter.com/shreethemes"
                    target="_blank"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-twitter align-middle"
                      title="twitter"
                    />
                  </a>
                </li> */}
              </ul>
              {/*end icon*/}
            </div>
            {/*end col*/}
            <div className="lg:col-span-6 md:col-span-12">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">
                Shopping &amp; Clothes
              </h5>
              <div className="grid md:grid-cols-12 grid-cols-1">
                <div className="md:col-span-4">
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Men
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Jackets &amp;
                        Coats{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Jeans{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Loungewear{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Polo shirts{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Shirts
                      </a>
                    </li>
                  </ul>
                </div>
                {/*end col*/}
                <div className="md:col-span-4">
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Shorts{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Suits Swimwear{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> T-shirts{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Tracksuits{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Trousers
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Shirts
                      </a>
                    </li>
                  </ul>
                </div>
                {/*end col*/}
                <div className="md:col-span-4">
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> My account{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Order History{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Wish List{" "}
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Newsletter
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Affiliate
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Returns
                      </a>
                    </li>
                  </ul>
                </div>
                {/*end col*/}
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-4">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">
                Newsletter
              </h5>
              <p className="mt-6">
                Sign up and receive the latest tips via email.
              </p>
              <form>
                <div className="grid grid-cols-1">
                  <div className="my-3">
                    <label className="form-label">
                      Write your email <span className="text-red-600">*</span>
                    </label>
                    <div className="form-icon relative mt-2">
                      <i
                        data-feather="mail"
                        className="w-4 h-4 absolute top-3 start-4"
                      />
                      <input
                        type="email"
                        className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submitsubscribe"
                    name="send"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            {/*end col*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end col*/}
      </div>
    </div>
    {/*end grid*/}
    <div className="grid grid-cols-1">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div className="flex items-center lg:justify-center">
            <i className="uil uil-truck align-middle text-lg mb-0 me-2" />
            <h6 className="mb-0 font-medium">Free delivery</h6>
          </div>
          {/*end content*/}
          <div className="flex items-center lg:justify-center">
            <i className="uil uil-archive align-middle text-lg mb-0 me-2" />
            <h6 className="mb-0 font-medium">Non-contact shipping</h6>
          </div>
          {/*end content*/}
          <div className="flex items-center lg:justify-center">
            <i className="uil uil-transaction align-middle text-lg mb-0 me-2" />
            <h6 className="mb-0 font-medium">Money-back quarantee</h6>
          </div>
          {/*end content*/}
          <div className="flex items-center lg:justify-center">
            <i className="uil uil-shield-check align-middle text-lg mb-0 me-2" />
            <h6 className="mb-0 font-medium">Secure payments</h6>
          </div>
          {/*end content*/}
        </div>
        {/*end grid*/}
      </div>
      {/*end*/}
    </div>
    {/*end grid*/}
  </div>
  {/*end container*/}
  <div className="py-[30px] px-0 border-t border-slate-800">
    <div className="container relative text-center">
      <div className="grid md:grid-cols-2 items-center">
        <div className="md:text-start text-center">
          <p className="mb-0">
            © Techwind. Design with <i className="mdi mdi-heart text-red-600" />{" "}
            by{" "}
            <a
              href="https://shreethemes.in/"
              target="_blank"
              className="text-reset"
            >
              Shreethemes
            </a>
            .
          </p>
        </div>
        <ul className="list-none md:text-end text-center mt-6 md:mt-0">
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/american-ex.png"
                className="max-h-6 inline"
                title="American Express"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/discover.png"
                className="max-h-6 inline"
                title="Discover"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/master-card.png"
                className="max-h-6 inline"
                title="Master Card"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/paypal.png"
                className="max-h-6 inline"
                title="Paypal"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/visa.png"
                className="max-h-6 inline"
                title="Visa"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </div>
</footer>

    )
}