import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Disclosure, Menu, Transition, Switch  } from '@headlessui/react';
import { Fragment } from 'react';
import logo from '../../../../assets/logo/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartLength } from '../../../../redux/Actions/CartAction';
import DeliveryPickupToggle from '../../minor-components/delivery-pickup-toggle/Toggle';
import { Modal } from '../../minor-components/model/Model';
import { ChangeLocationInModel } from '../../minor-components/location/ChangeLocationInModel';

const navigation = [
    { name: 'Home', href: '/home', current: true },
    { 
        name: 'Join Us', 
        href: '/', 
        current: false, 
        dropdownItems: [
            { name: 'Become a Restaurant', href: '/restaurant/createAccount' },
            { name: 'Become a Delivery Man', href: '/' }
        ]
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const [isOpen, setIsOpen] = useState(false);
    const [formattedAddress, setFormattedAddress] = useState('');

    useEffect(() => {
        const address = localStorage.getItem('geomatery');
        const formatted = JSON.parse(address);
        if (address) {   
            if (Object.keys(formatted).length > 0) {
                setFormattedAddress(formatted.formattedAddress)
            }
        } else {
            navigate('/')
        }
    }, [localStorage.getItem('geomatery')])

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert.show('Logout Successfully')
        navigate('/');
    };

    // GET CART LENGTH

    const {cart, cartLength } = useSelector(
        (state) => state.cartReducer
      )
    
      useEffect(() => {
        dispatch(getCartLength());
      }, [cart, cartLength])

    return (
        <Disclosure as="nav" className="bg-gray-800 absolute inset-x-0 top-0 z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FontAwesomeIcon icon="fa-solid fa-xmark" className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FontAwesomeIcon icon="fa-solid fa-bars" className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {formattedAddress ?
                                            <div className='location-container' onClick={() => { setIsOpen(true)}}>
                                                <FontAwesomeIcon className='icons-style !h-3' icon="fa-solid fa-location-dot" />
                                                <p className='location-inner-typo-address !text-primaryTextColor'>{formattedAddress}</p>
                                                <FontAwesomeIcon className='icons-style !h-3' icon="fa-solid fa-chevron-down" />
                                            </div>
                                        : null}
                                        <Modal
                                            open={isOpen}
                                            onClose={() => setIsOpen(false)}
                                            extraClasses="w-[90%] lg:w-[45%] md:w-[30%] sm:w-[95%]"
                                        >
                                            <ChangeLocationInModel />
                                        </Modal>
                                        <DeliveryPickupToggle />
                                        {navigation.map((item) => (
                                            <Fragment key={item.name}>
                                                {item.dropdownItems ? (
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="group flex rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                {item.name}
                                                                <svg
                                                                    className="ml-2 -mr-0.5 h-4 w-4 group-hover:text-gray-400"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
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
                                                            <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="px-1 py-1">
                                                                    {item.dropdownItems.map((dropdownItem) => (
                                                                        <Menu.Item key={dropdownItem.name}>
                                                                            {({ active }) => (
                                                                                <a
                                                                                  href={dropdownItem.href}
                                                                                  target='_blank'
                                                                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                                >
                                                                                    {dropdownItem.name}
                                                                                </a>
                                                                            )}
                                                                        </Menu.Item>
                                                                    ))}
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                ) : (
                                                        <>
                                                            {formattedAddress !== '' ? 
                                                                item.name === formattedAddress ?
                                                                    null
                                                                    :
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                                        )}
                                                                        aria-current={item.current ? 'page' : undefined}
                                                                        >
                                                                        {item.name}
                                                                    </a>
                                                                : 
                                                               null}    
                                                    </>
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button type="button" className="relative rounded-full bg-gray-600 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <FontAwesomeIcon icon="fa-solid fa-bell" size='lg' aria-hidden="true" />
                                </button>
                                <Link to="/checkout">
                                    <div className='relative rounded-full bg-gray-600 p-2 text-gray-400 hover:text-white'>
                                        <FontAwesomeIcon size='lg' icon="fa-solid fa-basket-shopping" />
                                        <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                                            {cartLength}
                                        </div>
                                    </div>
                                    {/* <IconBgRound svg={shoppingCart} bg="bg-primaryColor" width="12" imgWidth={5} isCart={true} totalCartItems={cartLength} /> */}
                                </Link>
                                {localStorage.getItem('token') ? 
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
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
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                            onClick={handleLogout}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm cursor-pointer text-gray-700')}>
                                                            Sign out
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    : (
                                        <Link to="/login">
                                            <button type="button" className="relative rounded-md font-bold bg-bgOrangeColor hover:bg-bgOrangeColorHover text-primaryTextColor px-5 py-2" >
                                                Sign In
                                            </button>
                                        </Link>
                                    )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
