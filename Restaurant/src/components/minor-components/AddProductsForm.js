import cannabisForm from '../../assets/cannabis-form.jpg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageHolder from '../../assets/upload.svg'
import 'rsuite/dist/rsuite.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { addProduct } from '../../redux/Actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'
import { baseURL } from '../../constants/baseURL';
import { updateProduct } from '../../redux/Actions/ProductActions';
import { axiosInstance } from '../../constants/axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const SignupSchema = Yup.object().shape({
    productPhoto: Yup.string().required('Image is required'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    category: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    subCategory: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    type: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(10000, 'Too Long!')
        .required('Required'),
    brand: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    price: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    extras: Yup.array(),
});

export const AddProductsForm = (props) => {
    const status = !props.isAdd ? props.isAdd : true
    const alert = useAlert()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [moreExtras, setMoreExtras] = useState(1)
    const [filePreview, setFilePreview] = useState(null)
    const [editItem, setEditItem] = useState([])
    const [brandField, setBrandField] = useState('')
    const [categoryItems, setCategoryItems] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [brandType, setBrandType] = useState([])
    const [imgCheck, setImgCheck] = useState(false)

    const { restaurantProducts } = useSelector(
        (state) => state.productReducer
    );
    useEffect(() => {
        getCategory()
        if (!status) {
            setEditItem(restaurantProducts?.filter(
                (product) => product._id === global.editId
            ))
            loadData()
            let num = 1;
            restaurantProducts.filter((product) => {
                if (product._id === global.editId) {
                    num = product.extras.length
                }
            })
            setMoreExtras(num)
        }
    }, [])


    const loadData = async () => {
        let brandName = restaurantProducts.filter(
            (product) => { return product.brand })

        setBrandField(brandName[0].brand)
        axiosInstance.get('/api/v1/category/getsinglebrand', { params: { brand: brandName[0].brand } })
            .then((res) => {
                if (res.data.success) {
                    setCategory(res.data.data.category)
                    setSubCategory(res.data.data.subCategory)
                    setBrandType(res.data.data.type)
                }
                else {
                    alert.show('No Category Found')
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handleCount = async (e) => {
        setMoreExtras(parseInt(moreExtras) + 1)
    };

    const decreaseCross = async (e) => {
        setMoreExtras(parseInt(moreExtras) - 1)
    };

    const getCategory = async () => {
        try {
            const res = await axiosInstance.get('/api/v1/category/getcategories')
            if (res.data.success) {
                setCategoryItems(res.data.data)
            }
            else {
                alert.show('No Category Found')
            }
        }
        catch (e) {
            console.log(e)
        }

    }



    return (
        <>
            <div className='w-full h-[85vh]'>
                <div style={{ scrollbarWidth: 'thin' }} className="container h-full mx-auto overflow-y-scroll">
                    <div className="flex justify-center">
                        <div className="w-full flex ">
                            <div
                                className="w-full h-auto  lg:block lg:w-5/12 bg-cover md:hidden "
                                style={{
                                    backgroundImage: `linear-gradient( to right, rgba(0,0,0,0.2) ,rgba(0, 0, 0, 0.2)) ,url(${cannabisForm})`, backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >

                            </div>

                            <div className="w-full xl:w-[65%] md:w-full bg-white rounded-lg ">
                                <h3 className="pt-4 text-2xl text-center mt-8 font-bold">{!status ? 'Product Details' : "Add Product"}</h3>
                                <Formik
                                    enableReinitialize
                                    initialValues={
                                        {
                                            productPhoto: editItem.length !== 0 ? `${editItem[0].productPhoto}` : '',
                                            name: editItem.length !== 0 ? `${editItem[0].name}` : '',
                                            type: editItem.length !== 0 ? `${editItem[0].type}` : '',
                                            category: editItem.length !== 0 ? `${editItem[0].category}` : '',
                                            description: editItem.length !== 0 ? `${editItem[0].description}` : '',
                                            subCategory: editItem.length !== 0 ? `${editItem[0].subCategory}` : '',
                                            brand: editItem.length !== 0 ? `${editItem[0].brand}` : '',
                                            price: editItem.length !== 0 ? `${editItem[0].price}` : '',
                                            extras: editItem[0]?.extras ? editItem[0]?.extras : []
                                        }
                                    }
                                    validationSchema={SignupSchema}
                                    onSubmit={async (values) => {
                                        values.brand = brandField !== '' ? brandField : '';
                                        var formData = new FormData();
                                        if (!status) {
                                            if (imgCheck) {
                                                console.log(values, 'IF IF')
                                                let image = values.productPhoto
                                                formData.append('image', image)
                                                formData.append('count', moreExtras)
                                                if (values.extras.length != 0) {
                                                    values.extras.forEach((extraPro, index) => {
                                                        values[`productName_${index + 1}`] = eval(`extraPro.extras${index + 1}?.productName`)
                                                        values[`cost_${index + 1}`] = eval(`extraPro.extras${index + 1}?.cost`)
                                                    })
                                                }
                                                dispatch(updateProduct(values, formData, navigate, alert, props.modal, moreExtras))
                                            }
                                            else {
                                                console.log(values, 'IF ELSE')
                                                formData.append('count', moreExtras)
                                                if (values.extras.length != 0) {
                                                    values.extras.forEach((extraPro, index) => {
                                                        values[`productName_${index + 1}`] = eval(`extraPro.extras${index + 1}?.productName`)
                                                        values[`cost_${index + 1}`] = eval(`extraPro.extras${index + 1}?.cost`)
                                                    })
                                                }
                                                dispatch(updateProduct(values, formData, navigate, alert, props.modal, moreExtras))
                                            }
                                        }
                                        else {
                                            console.log(values, 'ELSE')
                                            let image = values.productPhoto
                                            formData.append('image', image)
                                            formData.append('count', moreExtras)
                                            dispatch(addProduct(values, formData, navigate, alert, props.modal, moreExtras))
                                        }
                                    }}
                                >
                                    {({ isSubmitting, values, setFieldValue, handleChange }) => (
                                        <Form className="px-8 pt-6 pb-8 mb-4  bg-white rounded">
                                            <div className="flex mx-auto justify-center">
                                                <div className=" md:mr-2 md:mb-0 md:w-full justify-center mx-auto">
                                                    <label htmlFor="upload" className='w-[120px] h-[120px] block rounded-[50%] cursor-pointer mx-auto mb-2'>
                                                        <img className='w-[125px] h-[125px] block rounded-[50%] cursor-pointer mb-2 ' src={!status && editItem.length !== 0 && !imgCheck ? baseURL + editItem[0].productPhoto : !values.productPhoto ? ImageHolder : filePreview} alt='img' />
                                                        <input className='hidden' id="upload" name="image" type="file" accept="image/*" onChange={(event) => {

                                                            setFieldValue("productPhoto", event.currentTarget.files[0]);
                                                            setFilePreview(URL.createObjectURL(event.target.files[0]))
                                                            setImgCheck(true)
                                                        }} />
                                                    </label>

                                                    <label className="block mb-2 text-sm font-bold text-gray-700 md:mt-2 text-center " name='productPhoto'>
                                                        Product Image
                                                    </label>
                                                    <ErrorMessage className='text-red-600 text-xs text-center' name="productPhoto" component="div" />
                                                </div>
                                            </div>
                                            <div className='flex justify-around '>

                                                <div className='flex flex-col p-2'>
                                                    <div className='flex flex-col justify-around  my-3'>

                                                        <div className=" md:flex md:justify-between w-60 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                            <div className=" md:mr-2 md:mb-0 md:w-full">
                                                                <label className="block mb-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor="name">
                                                                    Name
                                                                </label>
                                                                <Field className='w-full px-3 py-2  text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' type="text" name="name" />
                                                                <ErrorMessage className='text-red-600 text-xs' name="name" component="div" />

                                                            </div>
                                                        </div>
                                                        <div className=" md:flex md:justify-between w-60 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                            <div className=" md:mr-2 md:mb-0 md:w-full">
                                                                <label className="block mb-2 text-sm mt-2 font-bold text-gray-700 md:mt-2" htmlFor="type">
                                                                    Brand
                                                                </label>
                                                                <Field value={values.brand} className='w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                                                    as="select"
                                                                    onChange={(event) => {
                                                                        handleChange(event)
                                                                        try {
                                                                            setBrandField(event.target.value)
                                                                            axiosInstance.get('/api/v1/category/getsinglebrand', { params: { brand: event.target.value } })
                                                                                .then((res) => {
                                                                                    if (res.data.success) {
                                                                                        setCategory(res.data.data.category)
                                                                                        setSubCategory(res.data.data.subCategory)
                                                                                        setBrandType(res.data.data.type)
                                                                                    }
                                                                                    else {
                                                                                        alert.show('No Category Found')
                                                                                    }
                                                                                })
                                                                                .catch((e) => {
                                                                                    console.log(e)
                                                                                })

                                                                        }
                                                                        catch (e) {
                                                                            console.log(e)
                                                                        }
                                                                    }}
                                                                    name="brand"
                                                                >
                                                                    <option hidden selected>Select Brand Here</option>
                                                                    {categoryItems.map((catrgory, index) => (
                                                                        <option key={index} value={catrgory.brand}>{catrgory.brand}</option>
                                                                    ))}

                                                                </Field>
                                                                <ErrorMessage className='text-red-600 text-xs font-thin' name="brand" component="div" />
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className='flex justify-around flex-col '>

                                                        <div className=" md:flex md:justify-between w-60 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                            <div className=" md:mr-2 md:mb-0 md:w-full">
                                                                <label className="block mb-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor="category">
                                                                    Category
                                                                </label>
                                                                <Field className='w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                                                    as="select"
                                                                    name="category"
                                                                    onChange={(event) => handleChange(event)}
                                                                >

                                                                    <option value='' hidden selected>Select Category Here</option>
                                                                    {category.map((catrgory, index) => (
                                                                        <option key={index} value={catrgory}>{catrgory}</option>
                                                                    ))}

                                                                </Field>
                                                                <ErrorMessage className='text-red-600 text-xs' name="category" component="div" />

                                                            </div>

                                                        </div>
                                                        <div className=" md:flex md:justify-between w-60 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                            <div className=" md:mr-2 md:mb-0 md:w-full">
                                                                <label className="block mb-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor="subCategory">
                                                                    Sub-Category
                                                                </label>
                                                                <Field className='w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' as="select" name="subCategory">
                                                                    <option value='' hidden selected>Select Sub-Category Here</option>
                                                                    {subCategory.map((catrgory, index) => (
                                                                        <option key={index} value={catrgory}>{catrgory}</option>
                                                                    ))}

                                                                </Field>
                                                                <ErrorMessage className='text-red-600 text-xs font-thin' name="subCategory" component="div" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-around my-2'>
                                                        <div className=" md:flex md:justify-between w-60 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                            <div className=" md:mr-2 md:mb-0 md:w-full">
                                                                <label className="block mb-2  text-sm font-bold text-gray-700 md:mt-2" htmlFor="brand">
                                                                    Type
                                                                </label>
                                                                <Field className='w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' as="select" name="type">
                                                                    <option value='' hidden selected>Select Type Here</option>
                                                                    {brandType.map((catrgory, index) => (
                                                                        <option key={index} value={catrgory}>{catrgory}</option>
                                                                    ))}

                                                                </Field>
                                                                <ErrorMessage className='text-red-600 text-xs' name="type" component="div" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col p-2'>
                                                    <div className='flex flex-col justify-around my-3'>
                                                        <div className=" md:flex md:justify-between w-60 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                            <div className=" md:mr-2 md:mb-0 md:w-full">
                                                                <label className="block mb-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor="description">
                                                                    Description
                                                                </label>
                                                                <Field className='w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' as="textarea" type="text" rows="5" name="description" />
                                                                <ErrorMessage className='text-red-600 text-xs' name="description" component="div" />
                                                            </div>

                                                        </div>
                                                        <div className=" md:flex md:justify-between w-60 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                            <div className=" md:mr-2 md:mb-0 md:w-full">
                                                                <label className="block mb-2 mt-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor="price">
                                                                    Price
                                                                </label>
                                                                <Field className='w-full px-3 py-2  text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' type="text" name="price" id='price' />
                                                                <ErrorMessage className='text-red-600 text-xs font-thin' name="price" component="div" />
                                                            </div>
                                                        </div>
                                                        <label className="block mb-2 mt-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor="extras">
                                                            Extras
                                                        </label>
                                                        {(() => {
                                                            const arr = [];
                                                            for (let i = 0; i < moreExtras; i++) {
                                                                arr.push(
                                                                    <div className="!flex md:flex md:justify-between w-100 xl:w-44 lg:w-36 md:w-full md:mb-0">
                                                                        <div className=" md:mr-2 md:mb-0 md:w-6/12">
                                                                            <label className="block mb-2 mt-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor={`productName_${i + 1}`}>
                                                                                E.P. Name {i + 1}
                                                                            </label>
                                                                            <Field name={`productName_${i + 1}`} value={eval(`values.extras[${i}]?.extras${i + 1}?.productName`)} className='w-[98%] px-3 py-2  text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' type="text" id={`productName_${i + 1}`} />
                                                                            <ErrorMessage className='text-red-600 text-xs font-thin' name={`productName_${i + 1}`} component="div" />
                                                                        </div>
                                                                        <div className=" md:mr-2 md:mb-0 md:w-6/12">
                                                                            <label className="flex justify-between px-2 mb-2 mt-2 text-sm font-bold text-gray-700 md:mt-2" htmlFor={`cost_${i + 1}`}>
                                                                                <span>Cost {i + 1}</span>
                                                                                {(i + 1) != 1 ?
                                                                                    <span className='cursor-pointer' onClick={decreaseCross}>
                                                                                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                                                                    </span>
                                                                                    : null}
                                                                            </label>
                                                                            <Field name={`cost_${i + 1}`} value={eval(`values.extras[${i}]?.extras${i + 1}?.cost`)} className='w-[98%] px-3 py-2  text-xs leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' type="text" id={`cost_${i + 1}`} />
                                                                            <ErrorMessage className='text-red-600 text-xs font-thin' name={`cost_${i + 1}`} component="div" />
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                            return arr;
                                                        })()}
                                                        <label className="block mb-2 mt-2 text-right text-sm font-bold text-myBg cursor-pointer md:mt-2" htmlFor="extras">
                                                            <span onClick={handleCount}>+ Add More</span>
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="mb-6 flex items-center justify-center gap-2 sm:flex-col text-center">
                                                <button
                                                    className="w-36 px-4 py-2 font-semibold text-gray-600 bg-[#E9C95D] rounded hover:bg-[#E9D95D] focus:outline-none focus:shadow-outline"
                                                    type="submit" disabled={isSubmitting}
                                                >
                                                    {!status ? 'Update' : 'Submit'}
                                                </button>
                                                <button className={`w-36 px-4 py-2 font-semibold text-gray-600 bg-[#E9C95D] rounded hover:bg-[#E9D95D] focus:outline-none focus:shadow-outline ${!status ? 'hidden' : ''}`} type="reset">Reset</button>
                                            </div>


                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}