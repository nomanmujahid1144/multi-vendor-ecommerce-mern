import React from 'react'
import ReactDom from 'react-dom'
import cross from '../../../../assets/svg/cross.svg';


export const Modal = ({ open, onClose, children, extraClasses }) => {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-50' />
            <div className={`fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-50 shaddow-lg rounded ${extraClasses}  overflow-hidden md:overflow-hidden`}>
                <div className='relative'>
                    <button className='absolute bg-white rounded-full px-2 py-2 top-2 right-3 z-10' onClick={onClose}>
                        <img className='w-3' src={cross} alt='cross' />
                    </button>
                </div>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}