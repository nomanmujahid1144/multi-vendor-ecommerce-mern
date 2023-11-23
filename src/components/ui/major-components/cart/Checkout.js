import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getCart, getCartLength, removeFromCart } from "../../../../redux/Actions/CartAction";
import InputField from "../../minor-components/fields/InputField";
import { baseURL } from "../../../../constants/baseURL";
import { useAlert } from "react-alert";
import { deleteCart, orderPlace } from "../../../../redux/Actions/OrderAction";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  
  const { userCart } = useSelector(
    (state) => state.cartReducer
  )

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handleIncrementInCart = (productId, restaurantId) => {
    const details = {
      productId: productId,
      restaurantId: restaurantId
    }
    dispatch(addToCart(details, alert)).then(() => {
      dispatch(getCart());
    })
  }

  const handleDecrementInCart = (productId, restaurantId) => {
    const details = {
      productId: productId,
      restaurantId: restaurantId
    }
    dispatch(removeFromCart(details, alert)).then(() => {
      dispatch(getCart());
    })
  }

  const placeOrder = () => {

    let order = {
      restaurantId: userCart.restaurantId._id,
      details: userCart.details,
      totalPrice: userCart.totalPrice,
      deliveryFee: userCart.deliveryFee,
      subTotal: userCart.totalPrice - userCart.deliveryFee,
      totalProducts: userCart.totalProducts,
      // formattedAddress: deliveryAddress,
      // postalCode: postalCode,
      // paymentMethod: paymentMethod,
      // geometry: [coordinates[0], coordinates[1]]
    }

    dispatch(orderPlace(order, navigate, alert)).then(() => {
      dispatch(deleteCart()).then(() => {
        dispatch(getCartLength());
      })
    })
  }

  return (
    <>
      <div className="MuiContainer-root MuiContainer-maxWidthLg mui-style-159cdno">
        <main className="pos-app w-full pb-6 transition-all duration-[.25s]" >
          {userCart?.details?.length > 0 ? 
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px] mt-32">
              <div className="lg:col-span-7">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Your Cart</h5>
                    <div className="bg-bgOrangeColor flex justify-center items-center text-primaryTextColor text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5">
                      {userCart.totalProducts}
                    </div>
                  </div>
                <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                  {userCart?.details?.map((product) => (
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2">
                        <img className="w-16 rounded-md" src={baseURL + product.productId.productPhoto} />
                        <div>
                          <h5 className="font-semibold">{product.productId.name}</h5>
                          <p className="text-sm text-slate-400">Quantity: {product.quantity} x {product.productId.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-col px-4 py-4 ">
                        <div className="custom-number-input m-[4%]  w-28 top-0 right-0">
                          <div className="flex flex-row h-6 w-full border border-[#FFFFFF]-600 rounded-lg relative opacity-[0.67] bg-[#000000] hover:text-[#000000]-700 hover:bg-[#000000]-400 bg-transparent mt-1">
                            <span onClick={() => handleDecrementInCart(product?.productId?._id, userCart?.restaurantId?._id)} className={`flex items-center w-full justify-center  bg-bgOrangeColor hover:bg-bgOrangeColorHover  text-primaryTextColor rounded-l-md  h-full   ${product.quantity !== 0 ? 'cursor-pointer' : 'cursor-not-allowed '} outline-none m-auto text-lg font-thin`}>
                                -
                            </span>
                            <input
                              type="text"
                              id="quantity"
                              readOnly
                              name="custom-input-number"
                              value={product.quantity}
                              className="quantity focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-gray-600 focus:text-gray-600  md:text-basecursor-default flex items-center text-gray-700 outline-none"
                            />
                            <span onClick={() => handleIncrementInCart(product?.productId?._id, userCart?.restaurantId?._id)} className=" flex items-center w-full rounded-r-md justify-center bg-bgOrangeColor hover:bg-bgOrangeColorHover  text-primaryTextColor  text-lg  h-full  cursor-pointer m-auto  font-thin">
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-400 font-semibold">$ {product.quantity * product.productId.price}</p>
                    </div>
                  ))}
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Sub-Total</h5>
                    </div>
                    <p className="font-semibold">$ {userCart?.subTotal}</p>
                  </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Discount</h5>
                    </div>
                    <p className="font-semibold">$ 0</p>
                  </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">VAT/TAX</h5>
                    </div>
                    <p className="font-semibold">$ 0</p>
                  </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Total</h5>
                    </div>
                    <p className="font-semibold">$ {userCart?.totalPrice}</p>
                  </div>
                </div>
                
                  {/* <div className="subcribe-form mt-6">
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
                  </div> */}
                </div>
              </div>
            
              <div className="lg:col-span-5">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                  <h3 className="text-xl leading-normal font-semibold">
                    Billing address
                  </h3>
                  <form>
                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                    <div className="lg:col-span-12">
                        <InputField
                          variant="auth"
                          label="Full Name*"
                          placeholder="Name"
                          id="name"
                          type="text"
                          disabled={true}
                          value={userCart?.userId?.fullName}
                          // onChange={onChange}
                        />
                      </div>
                      <div className="lg:col-span-12">
                        <InputField
                          variant="auth"
                          label="Email*"
                          placeholder="Email"
                          id="email"
                          type="text"
                          disabled={true}
                          value={userCart?.userId?.email}
                          // onChange={onChange}
                        />
                      </div>
                    </div>
                  </form>
                <div className="mt-4">
                  <button onClick={placeOrder} type="submit" className="bg-bgOrangeColor hover:bg-bgOrangeColorHover text-primaryTextColor py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-md w-full">
                    Place Order
                  </button>
                  </div>
                </div>
              </div>
            </div>
          : 
            <div className="block text-center justify-center my-10">
              <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_qh5z2fdq.json" background="transparent" speed={1} style={{ height: '300px', display: 'inline-block' }} loop autoPlay />
              <p className="text-4xl text-textColor font-bold">
                Cart is Empty!Please Add some Products
              </p>
            </div>
          }
        </main>
      </div>
      </>
    )
}