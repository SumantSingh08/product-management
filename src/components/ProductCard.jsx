import React from 'react'
import { setEditData } from '../app/ProductSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function ProductCard({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = ((item) => {
    dispatch(setEditData(item));
    navigate('/add-product');
    window.scrollTo(0,0);
  })
  return (
    <div className='w-full  p-4 md:p-8'>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
        { products && products.length > 0 ? (products.map((item) => (
          <div
            key={item.id}
            className="group bg-white  rounded-lg p-5 shadow-sm  hover:shadow-sm md:hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {item.name}
            </h3>

            <p className="mt-2 text-gray-700">
              <span className="font-medium">Price:</span> ₹{item.price}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Category: {item.category}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Stock: {item.stock}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {item.description ? `description: ${item.description}` : ''}
            </p>
            <button onClick={() => submit(item)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Edit Details
            </button>
          </div>
        ))) : (<p className=''>No products available.</p>)}
      </div>
    </div>


  )
}

export default ProductCard
