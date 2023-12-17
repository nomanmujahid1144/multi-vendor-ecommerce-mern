import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PopularRestaurant } from '../../major-components/restaurants/Restaurants'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { baseURL } from '../../../../constants/baseURL'
import { getRestaurantsByUserLocation } from '../../../../redux/Actions/RestaurantAction'
import PriceFilter from './PriceFilter'
import SortFilters from './SortFilter'
import DeliveryFeeFilter from './DeliveryFeeFilter'
import CategoryFilter from './CategoryFilter'
import DietFilter from './DietFilters'
import { isTaxInRange } from '../../../../constants/helpingFunctions'
import { getWebsiteDefaultDataByUserLocation } from '../../../../redux/Actions/WebsiteAction'
import { SectionHeading } from '../headings/SectionHeading'
import { Category } from '../category/Category'
import { SlickSlider, SlickSliderStaticBanners } from '../slider/SlickSlider'
import { SingleProduct } from '../../major-components/product/SingleProduct'
import { addToCart } from '../../../../redux/Actions/CartAction'

// const sortOptions = [
//   { name: 'Most Popular', href: '#', current: true },
//   { name: 'Best Rating', href: '#', current: false },
//   { name: 'Newest', href: '#', current: false },
//   { name: 'Price: Low to High', href: '#', current: false },
//   { name: 'Price: High to Low', href: '#', current: false },
// ]
const subCategories = [
  { name: 'Top Rated', href: '#' },
  { name: 'Delivery Time', href: '#' },
  { name: 'Newest', href: '#' }
]
const filters = [
  {
    id: 'Price',
    name: 'Price',
    opt: 'price-tabs'
  },
  {
    id: 'Delivery Fee',
    name: 'Delivery Fee',
    opt: 'delivery-fee'
  },
  {
    id: 'Dietary',
    name: 'Dietary',
    opt: 'dietary'
  },
];

export const HomeFilters = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const diningMode = params.get('diningMode');
  const categories = params.get('category') || [];
  const prices = params.get('price') || [];
  const diets = params.get('diet') || [];
  const deliveryFee = params.get('df') || 3;

  const [locationFromIndexPage, setLocationFromIndexPage] = useState();
  const [filterRestaurants, setFilteredRestaurants] = useState(false);
  const [filterProducts, setFilteredProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [defaultData, setDefaultData] = useState(false);

  // Category Filter State
  const initialSelectedCategories = params.get('category')
    ? params.get('category').split(',')
    : JSON.parse(localStorage.getItem('selectedCategories')) || [];
  const [selectedCategories, setSelectedCategories] = useState(initialSelectedCategories);

  // Price Filter State
  const [selectedPrices, setSelectedPrices] = useState([]);
  const urlPrices = params.get('price');
  let decodedPrices = [];
  if (urlPrices) {
    decodedPrices = urlPrices.split(',').map(price => {
      switch (price) {
        case 'dollar':
          return '$';
        case 'doubleDollar':
          return '$$';
        case 'tripleDollar':
          return '$$$';
        case 'quadrupleDollar':
          return '$$$$';
        default:
          return price;
      }
    });
  }

  // diet Filter State
  const [selectedDiet, setSelectedDiet] = useState([])
  const urlDiets = params.get('diet');
    if (urlDiets) {
      const decodedDiets = urlDiets.split(',').map(diet => diet.trim());
    }
  // delivery fee Filter State
  const [selectedDeliveryFee, setSelectedDeliveryFee] = useState(deliveryFee)
  const urlDeliveryFee = params.get('df');

  const { restaurantsByUserLocation } = useSelector(
      (state) => state.restaurantReducer
  );
  const { homeData } = useSelector(
      (state) => state.websiteReducer
  );

  useEffect(() => {
    const Geomatery = localStorage.getItem('geomatery');
    if (Geomatery) {
      if (Object.keys(JSON.parse(Geomatery)).length) {
        setLocationFromIndexPage(JSON.parse(Geomatery))
      }
    }
  }, []);

  useEffect(() => {
    if (locationFromIndexPage) {
      dispatch(getRestaurantsByUserLocation(locationFromIndexPage, navigate, alert))
      dispatch(getWebsiteDefaultDataByUserLocation(locationFromIndexPage, navigate, alert))
    }
  }, [locationFromIndexPage]);

  
  const applyFilters = (restaurants, diningMode, selectedCategories, selectedPrices, selectedDiets, deliveryFee) => {
    
    let filteredRestaurants = restaurants;

    // Apply dining mode filter
    filteredRestaurants = filteredRestaurants.filter((restaurant) => {
      // Your condition for dining mode
      return restaurant.diningMode?.toLowerCase() === diningMode?.toLowerCase();
    });
  
    // Apply category filter
    if (selectedCategories.length > 0) {
      filteredRestaurants = filteredRestaurants.filter((restaurant) => {
        // Your condition for categories
        return selectedCategories.includes(restaurant.category);
      });
    }
  
    // Apply price filter
    if (selectedPrices.length > 0) {
      // Filter restaurants based on the selected prices
      filteredRestaurants = filteredRestaurants.filter(restaurant => {
        // Check if at least one product in the restaurant matches the selected price
        return restaurant.products.some(product => {
          // Assuming product.price is a number, convert it to string and get the appropriate price tag
          const priceTag = (() => {
            const priceLength = product.price.toString().length;
            if (priceLength === 1) return 'dollar';
            if (priceLength === 2) return 'doubleDollar';
            if (priceLength === 3) return 'tripleDollar';
            if (priceLength === 4) return 'quadrupleDollar';
            // You can define more ranges if needed
            return 'other';
          })();

          // Check if the price tag is in the selected prices
          return selectedPrices.includes(priceTag.toString());
        });
      });
    }
  
    // Apply diet filter
    if (selectedDiet.length > 0) {
      filteredRestaurants = filteredRestaurants.filter((restaurant) => {
        // Check if any selected diet matches any dietary option of the restaurant
        return selectedDiet.some((selectedDiet) => {
          return restaurant.dietary.includes(selectedDiet.replace(/\s+/g, '-').toLowerCase());
        });
      });
    }

    // Filter restaurants based on the selected delivery fee
    filteredRestaurants = filteredRestaurants.filter(restaurant => {
      return isTaxInRange(restaurant.tax, selectedDeliveryFee);
    });


  
    return filteredRestaurants;
    // setFilteredProducts(filteredRestaurants)
  };
  
  useEffect(() => { 
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('df', selectedDeliveryFee);
  }, []) 

  useEffect(() => {

    if (defaultData && (selectedCategories.length > 0 || selectedPrices.length > 0 || selectedDiet.length > 0)) {
      // Apply filters and get the updated list of restaurants
      const filteredList = applyFilters(
        restaurantsByUserLocation,
        diningMode,
        categories,
        prices,
        diets,
        deliveryFee
      );
      // Log the filtered list
      setFilteredProducts(filteredList);
    } else {
      setDefaultProducts(homeData);
    }

    
  }, [diningMode, filterRestaurants, defaultData])



  // Update URL Function
  const updateURL = () => {
    const diningMode = params.get('diningMode');
    const newSearchParams = new URLSearchParams();
  
    if (diningMode) {
      newSearchParams.set('diningMode', diningMode);
    }

    if (selectedCategories.length > 0) {
      newSearchParams.set('category', selectedCategories.join(','));
    }
    if (selectedPrices.length > 0) {
      const readablePrices = selectedPrices.map(price => {
        switch (price) {
          case '$':
            return 'dollar';
          case '$$':
            return 'doubleDollar';
          case '$$$':
            return 'tripleDollar';
          case '$$$$':
            return 'quadrupleDollar';
          default:
            return price;
        }
      });
      newSearchParams.set('price', readablePrices.join(','));
    }
    if (selectedDiet.length > 0) {
      newSearchParams.set('diet', selectedDiet.join(','));
    }
    newSearchParams.set('df', selectedDeliveryFee);
    
  
    setFilteredRestaurants(!filterRestaurants);
    setDefaultData(true)
    navigate(`?${newSearchParams.toString()}`);
  };


  // Category filter Handle
  const handleClickCategory = (categoryName) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryName)
        ? prevSelected.filter((category) => category !== categoryName)
        : [...prevSelected, categoryName]
    );
  }
 

  // Price Filter Handle
  const handleClickPrice = (priceTag) => {
    setSelectedPrices((prevSelected) =>
      prevSelected.includes(priceTag)
        ? prevSelected.filter((price) => price !== priceTag)
        : [...prevSelected, priceTag]
    );
  }

  // Diet Filter Handle
  const handleClickDiet = (dietTag) => {
    setSelectedDiet((prevSelected) =>
      prevSelected.includes(dietTag)
        ? prevSelected.filter((diet) => diet !== dietTag)
        : [...prevSelected, dietTag]
    );
  }

  // Delivery Fee Filter Handle
  const handleClickDeliveryFee = (deliveryFee) => {
    setSelectedDeliveryFee(deliveryFee);
  }

  // update Call on These states changes
  useEffect(() => {
    updateURL();
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  }, [selectedCategories, selectedPrices, selectedDiet, selectedDeliveryFee, diningMode]);

  const handleResetFilter = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedDiet([]);
    setSelectedDeliveryFee(3);
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('diningMode', 'DELIVERY');
  }


  const handleCart = (productId, restaurantId) => {
    // const product = restaurant.products.find((product) => product._id === id);
    const details = {
      productId: productId,
      restaurantId: restaurantId
    }
    dispatch(addToCart(details, alert));
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon="fa-solid fa-xmark" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category, optionIdx) => (
                        <li key={category.name}>
                          {/* <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a> */}
                          <div key={category.name} className="items-center block px-2 py-3">
                            <input
                              id={`filter-mobile-${category.name}-${optionIdx}`}
                              name={`${category.name}[]`}
                              defaultValue={false}
                              type="checkbox"
                              defaultChecked={false}
                              className="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${category.name}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {category.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div"  defaultOpen={true} key={section.id} className=" px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <FontAwesomeIcon icon="fa-solid fa-minus" className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <FontAwesomeIcon icon="fa-solid fa-plus" className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                              {section.opt === 'options' ? <>
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </>
                              : <>
                                    {section.opt === 'price-tabs' ? 
                                      <div className='flex flex-wrap gap-3'>
                                        <button className='bg-[#EEEEEE] px-3 py-2 rounded-full'>$</button>  
                                        <button className='bg-[#EEEEEE] px-3 py-2 rounded-full'>$$</button>  
                                        <button className='bg-[#EEEEEE] px-3 py-2 rounded-full'>$$$</button>  
                                        <button className='bg-[#EEEEEE] px-3 py-2 rounded-full'>$$$$</button>  
                                      </div>  
                                  : <>
                                      {section.opt === 'delivery-fee' ?
                                          <div className='ranger-filter-container'>
                                            <div className='ranger-filter-inner'>
                                              <div className='ranger-filter-wrapper'>
                                                <div className='ranger-filter-inner-wrapper'>
                                                  <div className='ranger-filter-inner-one'>$2</div>
                                                  <div className='ranger-filter-inner-one'>$4</div>
                                                  <div className='ranger-filter-inner-one'>$6</div>
                                                  <div className='ranger-filter-inner-one'>$10</div>
                                                </div>
                                                <input className='range-filter-input' max="3" type="range" value="2" />
                                              </div>
                                            </div>
                                          </div>
                                      : null}
                                  </>}
                                </>}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between  pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {defaultData && (selectedCategories.length > 0 || selectedPrices.length > 0 || selectedDiet.length > 0) ? filterProducts.length : 'All'} stores
              {defaultData && (selectedCategories.length > 0 || selectedPrices.length > 0 || selectedDiet.length > 0) ?
                <span className='flex justify-between'>
                  <p onClick={handleResetFilter} className='font-thin text-lg cursor-pointer hover:underline mt-3'>Clear All</p>
                </span>
                :null}
            </h1>
            <div className="flex items-center">
              {/* <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <FontAwesomeIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" icon="fa-solid fa-chevron-down" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */}

              {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <FontAwesomeIcon className="h-5 w-5" aria-hidden="true"  icon="fa-solid fa-border-all" />
              </button> */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FontAwesomeIcon icon="fa-solid fa-filter" className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="sm:hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {/* {subCategories.map((category, optionIdx) => (
                    <li key={category.name}>
                      <div key={category.name} className="">
                            <input
                              id={`filter-mobile-${category.name}-${optionIdx}`}
                              name={`${category.name}[]`}
                              defaultValue={false}
                              type="radio"
                              defaultChecked={false}
                              className="h-4 w-4 rounded-full border-gray-300 text-bgOrangeColor focus:ring-bgOrangeColor"
                            />
                            <label
                              htmlFor={`filter-mobile-${category.name}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {category.name}
                            </label>
                          </div>
                    </li>
                  ))} */}
                  <CategoryFilter
                    subCategories={subCategories}
                    alredyselectedCategories={selectedCategories}
                    handleClickCategory={handleClickCategory}
                  />
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} defaultOpen={true} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                            {open ? (
                                <FontAwesomeIcon icon="fa-solid fa-minus" className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <FontAwesomeIcon icon="fa-solid fa-plus" className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                          {section.opt === 'options' ? <>
                            <SortFilters section={section}/>
                          </>
                          : <>
                                {section.opt === 'price-tabs' ? 
                                  <PriceFilter
                                    alredyselectedPrices={selectedPrices}
                                    handleClickPrice={handleClickPrice}
                                  /> 
                              : <>
                                  {section.opt === 'delivery-fee' ?
                                      <DeliveryFeeFilter
                                        alredyselectedDeliveryFee={selectedDeliveryFee}
                                        handleClickDeliveryFee={handleClickDeliveryFee}
                                      />
                                :<>
                                  {section.opt === 'dietary' ?
                                          <DietFilter
                                            alredyselectedDiet={selectedDiet}
                                            handleClickDiet={handleClickDiet}
                                          />
                                    : null}
                                </>}
                              </>}
                            </>}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                  {defaultData && (selectedCategories.length > 0 || selectedPrices.length > 0 || selectedDiet.length > 0) ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
                      {filterProducts?.map((restaurant) => (
                        <PopularRestaurant
                          goToSingleRestaurant={`/restaurant/${restaurant._id}`}
                          restaurantName={restaurant.restaurantName}
                          restaurantCoverImage={baseURL + restaurant.restaurantCoverImage}
                          restaurantMinDeliveryTime={restaurant.minDeliveryTime}
                          restaurantMaxDeliveryTime={restaurant.maxDeliveryTime}
                          restaurantTimeStamp={restaurant.timeStamp}
                          />
                        ))}
                    </div>
                  :
                    <main className="pos-app w-full pb-6 transition-all duration-[.25s]" >
                      <SectionHeading
                        heading="Categories"
                      />
                      <Category
                        Categories={defaultProducts?.categories}
                      />
                      <SectionHeading
                        heading="Products Under $40"
                      />
                      <SlickSlider className="flex">
                        {console.log(defaultProducts?.discountedProducts, 'defaultProducts?.discountedProducts')}
                        {defaultProducts?.discountedProducts?.map((product, index) => (  
                          <div key={index} className='p-4'>
                            <SingleProduct
                              productId={product._id}
                              restaurantId={product.restaurantId}
                              productName={product.name}
                              productPrice={product.price}
                              productPhoto={baseURL + product.productPhoto}
                              getId={handleCart}
                            />
                          </div>
                        ))}
                      </SlickSlider>
                      <SectionHeading
                        heading="Restaurants Near You"
                      />
                      <SlickSliderStaticBanners>
                        {defaultProducts?.restaurantsNear?.map((restaurant) => (
                          <div className='px-2'>
                            <PopularRestaurant
                              goToSingleRestaurant={`/restaurant/${restaurant._id}`}
                              restaurantName={restaurant.restaurantName}
                              restaurantCoverImage={baseURL + restaurant.restaurantCoverImage}
                              restaurantMinDeliveryTime={restaurant.minDeliveryTime}
                              restaurantMaxDeliveryTime={restaurant.maxDeliveryTime}
                              restaurantTimeStamp={restaurant.timeStamp}
                              />
                          </div>
                        ))}
                      </SlickSliderStaticBanners>
                      <SectionHeading
                        heading="All Restaurants"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
                        {defaultProducts?.restaurants?.map((restaurant) => (
                          <PopularRestaurant
                            goToSingleRestaurant={`/restaurant/${restaurant._id}`}
                            restaurantName={restaurant.restaurantName}
                            restaurantCoverImage={baseURL + restaurant.restaurantCoverImage}
                            restaurantMinDeliveryTime={restaurant.minDeliveryTime}
                            restaurantMaxDeliveryTime={restaurant.maxDeliveryTime}
                            restaurantTimeStamp={restaurant.timeStamp}
                            />
                          ))}
                      </div>
                    </main>
                  }
              </div>

            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
