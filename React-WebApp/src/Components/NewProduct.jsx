import React, { useState, useRef } from 'react'


function NewProduct() {
    const [product, setProduct] = useState({
        pro_name : "",
        pro_des: "",
        pro_price: "",
        pro_qts:"",
    })
    const dialog = useRef()
    const openDialog = () => dialog.current.showModal();
    const closeDialog = () => dialog.current.close();
    const handleSumit  = (e) => {};
    const handleChange = (e)=> {};

  return (
    <>
        <button 
            onClick={openDialog}
            classname = 'w-full bg-pink-500 text-white p-2 rounded mt-2'
    >
            Add New Product
        </button>
        <dialog 
        ref={dialog}
         className='rounded-md w-[480px]'
        onClick={(e) => e.target === e.currentTarget && closeDialog()}
    >
        <form className='p-6' onSubmit={'handleSumit'}>
            <h3 className='font-semibold text-xl mb-4'> Add New Product </h3>
            <div className='mb-4'>
                    <label>Product Description</label>
                    <input 
                    type='text'>
                    name ='Product Description'
                    value={product.pro_des}
                    onChange={handleChange}
                    placeholder='Product Description'
                    classname='w-full p-2 border rounded mt-2'
                    required
                </input>
            </div>
            <div className='mb-4'>
                    <label>Product Price</label>
                    <input 
                    type='text'>
                    name ='Product Price'
                    value={product.pro_price}
                    onChange={handleChange}
                    placeholder='Product Price'
                    classname='w-full p-2 border rounded mt-2'
                    required
                </input>
            </div>
            <div className='mb-4'>
                    <label>Product Quantity </label>
                    <input 
                    type='text'>
                    name ='Product  Quantity'
                    value={product.product_qty}
                    onChange={handleChange}
                    placeholder='Product Quantity'
                    classname='w-full p-2 border rounded mt-2'
                    required
                </input>
            </div>
             <div className='mt-6 text-right space-x-2'>
                <button className='rounded border border-teal-500 hover:bg-teal-600'
                type="submit">
                    Add Product
                </button >

                <button className='rounded border border-gray-200 px-3 py-2 hover:bg-gray-50'
                onclick={closeDialog}>
                    Close
                </button >
             </div>
        </form>
    </dialog>
    </>
  );
}

export default NewProduct;