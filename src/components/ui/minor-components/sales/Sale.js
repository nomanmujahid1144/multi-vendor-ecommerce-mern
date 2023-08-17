import backgroudImage from '../../../../assets/cta.jpg';

export const Sales = () => {
    return (
        <section
  style={{ backgroundImage: `url(${backgroudImage})` }}
  className={`py-28 w-full table relative bg-center bg-no-repeat bg-cover jarallax`}
  data-jarallax=""
  data-speed="0.5"
>
  <div className="absolute inset-0 bg-slate-900/30" />
  <div className="container relative">
    <div className="grid grid-cols-1 text-center">
      <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">
        End of Season Clearance <br /> Sale up to 30%
      </h3>
      <p className="text-white/80 max-w-xl mx-auto">
        Start working with Techwind that can provide everything you need to
        generate awareness, drive traffic, connect.
      </p>
      <div className="mt-6">
        <a
          href=""
          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
        >
          <i className="mdi mdi-cart-outline" /> Shop Now
        </a>
      </div>
    </div>
    {/*end grid*/}
  </div>
  {/*end container*/}
</section>


    )
}