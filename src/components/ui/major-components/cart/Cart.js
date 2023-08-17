
import thirdImage from '../../../../assets/3.jpg'
export const Cart = () => {
    return ( 
        <section className="relative md:py-24 py-16 px-10 md:px-28">
  <div className="container">
    <div className="grid lg:grid-cols-1">
      <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
        <table className="w-full text-start">
          <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
            <tr>
              <th scope="col" className="p-4 w-4" />
              <th scope="col" className="text-start p-4 min-w-[220px]">
                Product
              </th>
              <th scope="col" className="p-4 w-24 min-w-[100px]">
                Price
              </th>
              <th scope="col" className="p-4 w-56 min-w-[220px]">
                Qty
              </th>
              <th scope="col" className="p-4 w-24 min-w-[100px]">
                Total($)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-slate-900">
              <td className="p-4">
                <a href="">
                  <i className="mdi mdi-window-close text-red-600" />
                </a>
              </td>
              <td className="p-4">
                <span className="flex items-center">
                  <img
                    src={thirdImage}
                    className="rounded shadow dark:shadow-gray-800 w-12"
                    alt=""
                  />
                  <span className="ms-3">
                    <span className="block font-semibold">Special Rise</span>
                  </span>
                </span>
              </td>
              <td className="p-4 text-center">$ 280</td>
              <td className="p-4 text-center">
                <div className="qty-icons">
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"
                  >
                    -
                  </button>
                  <input
                    min={0}
                    name="quantity"
                    defaultValue={3}
                    type="number"
                    className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity"
                  />
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4  text-end">$ 840</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900">
              <td className="p-4">
                <a href="">
                  <i className="mdi mdi-window-close text-red-600" />
                </a>
              </td>
              <td className="p-4">
                <span className="flex items-center">
                  <img
                    src={thirdImage}
                    className="rounded shadow dark:shadow-gray-800 w-12"
                    alt=""
                  />
                  <span className="ms-3">
                    <span className="block font-semibold">Special Rise</span>
                  </span>
                </span>
              </td>
              <td className="p-4 text-center">$ 280</td>
              <td className="p-4 text-center">
                <div className="qty-icons">
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"
                  >
                    -
                  </button>
                  <input
                    min={0}
                    name="quantity"
                    defaultValue={3}
                    type="number"
                    className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity"
                  />
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4  text-end">$ 840</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900">
              <td className="p-4">
                <a href="">
                  <i className="mdi mdi-window-close text-red-600" />
                </a>
              </td>
              <td className="p-4">
                <span className="flex items-center">
                  <img
                    src={thirdImage}
                    className="rounded shadow dark:shadow-gray-800 w-12"
                    alt=""
                  />
                  <span className="ms-3">
                    <span className="block font-semibold">Special Rise</span>
                  </span>
                </span>
              </td>
              <td className="p-4 text-center">$ 280</td>
              <td className="p-4 text-center">
                <div className="qty-icons">
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"
                  >
                    -
                  </button>
                  <input
                    min={0}
                    name="quantity"
                    defaultValue={3}
                    type="number"
                    className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity"
                  />
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4  text-end">$ 840</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div className="lg:col-span-9 md:order-1 order-3">
          <a
            href=""
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
          >
            Shop Now
          </a>
          <a
            href=""
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2"
          >
            Add to Cart
          </a>
        </div>
        <div className="lg:col-span-3 md:order-2 order-1">
          <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
            <li className="flex justify-between p-4">
              <span className="font-semibold text-lg">Subtotal :</span>
              <span className="text-slate-400">$ 1500</span>
            </li>
            <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
              <span className="font-semibold text-lg">Taxes :</span>
              <span className="text-slate-400">$ 150</span>
            </li>
            <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-lg">Total :</span>
              <span className="font-semibold">$ 1650</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}