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

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Top Rated', href: '#' },
  { name: 'Delivery Time', href: '#' },
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' }
]
const filters = [
  {
    id: 'Sort',
    name: 'Sort',
    opt: 'options',
    options: [
      { value: 'Newest', label: 'newest', checked: false },
      { value: 'Price: Low to High', label: 'price-low-to-high', checked: false },
      { value: 'Price: High to Low', label: 'price-high-to-low', checked: true }
    ],
  },
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
];

export const HomeFilters = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const diningMode = params.get('diningMode');

  const [locationFromIndexPage, setLocationFromIndexPage] = useState();

  const { restaurantsByUserLocation } = useSelector(
      (state) => state.restaurantReducer
  );

  useEffect(() => {
    if (diningMode === 'DELIVERY') {
      // Do something for DELIVERY mode
      console.log('DELIVERY')
    } else if (diningMode === 'PICKUP') {
      // Do something for PICKUP mode
      console.log('PICKUP')
    }
  }, [diningMode])

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
    }
  }, [locationFromIndexPage]);

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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">All stores</h1>
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
                  {subCategories.map((category, optionIdx) => (
                    <li key={category.name}>
                      {/* <a href={category.href}>{category.name}</a> */}
                      
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
                  ))}
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
                                  <PriceFilter /> 
                              : <>
                                  {section.opt === 'delivery-fee' ?
                                    <DeliveryFeeFilter />
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

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
                    {restaurantsByUserLocation?.map((restaurant) => (
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
              </div>

            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
