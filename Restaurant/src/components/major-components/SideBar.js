import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { axiosInstance } from "../../constants/axiosInstance";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconBg } from '../minor-components/IconBg';
import logo2 from '../../assets/logo2.png';
import dashboardHome from '../../assets/dashboard-home.svg';
import restaurant from '../../assets/restaurant.svg';
import product from '../../assets/product.svg';
import order from '../../assets/order.svg';
import driver from '../../assets/driver.svg';
import category from '../../assets/category.svg';
import tracking from '../../assets/tracking.svg';
import account from '../../assets/account.svg';
import salesPromotion from '../../assets/sales-promotion.svg';
import logout from '../../assets/logout.svg';

const SideBar = () => {
    const navigate = useNavigate();
    const [openChildIndex, setOpenChildIndex] = useState(-1);
    const [restaurantArray, setRestaurantArray] = useState([]);

    const token = useSelector((state) => state.ProfileReducer);

    React.useEffect(() => {
        if (token) {
            getShopName();
        }
    }, [token]);

    const getShopName = async () => {
        try {
            const res = await axiosInstance.get('/api/v1/admin/getradius', {
                headers: {
                    "authorization": localStorage.getItem('token')
                }
            });

            if (res.data.success) {
                const shops = res.data.data.map((restu) => {
                    return {
                        title: restu.shopName,
                        path: `/singleRestaurant/${restu.products?.restaurantName}`,
                        action: 1
                    };
                });
                
                // Manually create "All Shops" and "Add Shop" links
                const allShopsLink = {
                    title: 'All Restaurants',
                    path: '/all-restaurants', // Update this path if needed
                    action: 0
                };
                const addShopLink = {
                    title: 'Add Restaurant',
                    path: '/add-restaurant', // Update this path if needed
                    action: 0
                };

                // Concatenate the links and fetched shops
                const updatedRestaurantArray = [allShopsLink, addShopLink, ...shops];
                setRestaurantArray(updatedRestaurantArray);
            } else {
                alert.show('Not Found');
            }
        } catch (error) {
            console.error("Error fetching shop names:", error);
        }
    }

    const sidebarData = [
        {
            title: 'Dashboard',
            path: '/',
            svg: dashboardHome,


        },
        {
            title: 'Categories',
            path: '/categories',
            svg: category,

        },
        {
            title: 'Products',
            path: '/products',
            svg: product,

        },
        {
            title: 'My Restaurant',
            path: '/restaurant/view',
            // childrens: restaurantArray,
            svg: restaurant
        },
        {
            title: 'Orders',
            path: '/orders',
            svg: order,

        },
        {
            title: 'Drivers',
            path: '/drivers',
            svg: driver
        },
        {
            title: 'Earning',
            path: '/earnings',
            svg: salesPromotion
        },
        {
            title: 'App Setting',
            path: '/appSettings',
            svg: account
        },
        {
            title: 'About Us',
            path: '/aboutus',
            svg: account
        },
        {
            title: 'Track Order',
            path: '/trackorder',
            svg: tracking
        },
        {
            title: 'Logout',
            path: '/logout',
            svg: logout
        }
    ]

    const loadWindow = (restaurantName) => {
        const res = restaurantName.toLowerCase();
        navigate(`/singleRestaurant/${res}`, { state: { restaurantName: res } });
        window.location = `/singleRestaurant/${res}`;
    }

    const handleChildItemClick = (index) => {
        if (openChildIndex === index) {
            setOpenChildIndex(-1); // Clicking the same child closes it
        } else {
            setOpenChildIndex(index); // Clicking a child opens it
        }
    }

    return (
        <>
        <div style={{ scrollbarWidth: 'none' }} className='shadow-xl bg-white fixed overflow-y-auto scroll-thin top-0 h-full left-0 w-[18%] md:hidden'>
            <div className='h-24 bg-gray-50 flex justify-center items-center p-0 m-0'>
                <img className='mx-auto mt-0 w-[5.5rem]' src={logo2} alt='logo' />
            </div>
            <ul className='flex flex-col'>
                {sidebarData.map((item, index) => (
                    <li key={index} className={`font-semibold p-5 flex justify-between cursor-pointer`}>
                        <IconBg svg={item.svg} />
                        <div className='flex-1 flex justify-between items-center pl-[20%] text-xs'>
                            {item.path === '/logout' ? (
                                <p className='text-gray-800' onClick={() => {
                                    localStorage.removeItem('token');
                                    navigate('/login');
                                }}>{item.title}</p>
                            ) : (
                                <>
                                    {item.childrens ? (
                                        <>
                                            <div className={openChildIndex === index ? "sidebar-item w-full open" : "sidebar-item w-full"}>
                                                <div className="sidebar-title w-full flex justify-between ">
                                                    <span>
                                                        {item.icon && <i className={item.icon}></i>}
                                                        {item.title}
                                                    </span>
                                                    <FontAwesomeIcon className="bi-chevron-down toggle-btn" icon="fa-solid fa-angle-up fa-2xl" onClick={() => handleChildItemClick(index)} size='lg' />
                                                </div>
                                                <div className="sidebar-content" style={{ maxHeight: openChildIndex === index ? '9999px' : '0' }}>
                                                    <ul className='flex flex-col'>
                                                        {/* <li className='p-1 mt-2 flex justify-between cursor-pointer'>
                                                            <NavLink end to='/all-restaurants' className={({ isActive }) => (isActive ? 'text-myBg block ml-2' : 'text-gray-800 block ml-2')}>
                                                                All Shops
                                                            </NavLink>
                                                        </li>
                                                        <li className='p-1 mt-2 flex justify-between cursor-pointer'>
                                                            <NavLink end to='/add-restaurant' className={({ isActive }) => (isActive ? 'text-myBg block ml-2' : 'text-gray-800 block ml-2')}>Add Shop</NavLink>
                                                        </li> */}
                                                        {item.childrens.map((child, childIndex) => (
                                                            <li key={childIndex} className='font-semibold p-1 mt-2 flex justify-between cursor-pointer'>
                                                                {child.action === 0 ? 
                                                                    <NavLink end to={child.path} className={({ isActive }) => (isActive ? 'text-myBg block ml-2' : 'text-gray-800 block ml-2')}>{child.title}</NavLink>
                                                                :
                                                                    <NavLink
                                                                        to={{ pathname: child.path }}
                                                                        onClick={() => loadWindow(child.title)}
                                                                        state={{ restaurantName: child.title }}
                                                                        restaurantName={child}
                                                                        className={({ isActive }) => (isActive ? 'text-myBg block ml-2' : 'text-gray-800 block ml-2')}
                                                                    >
                                                                        {child.title}
                                                                    </NavLink>
                                                                }
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <NavLink end to={item.path} className={({ isActive }) => (isActive ? 'text-myBg' : 'text-gray-800')}>
                                            {item.title}
                                        </NavLink>
                                    )}
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default SideBar