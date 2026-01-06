import React from 'react'
import {setEditData} from '../app/ProductSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function ProductTable({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (item) => {
    dispatch(setEditData(item));
    navigate('/add-product');
    window.scrollTo(0,0);

  }
  return (
    <div className="w-full  p-4 md:p-8 overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-3 font-semibold text-gray-700">Name</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700">Price</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700">Category</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700">Stock</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700">Description</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products && products.length > 0 ? (products.map((item) => (
            <tr
              key={item.id}
              className="border-t bg-white hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3 text-gray-800 font-medium">
                {item.name}
              </td>
              <td className="px-4 py-3 text-gray-700">
                ₹{item.price}
              </td>
              <td className="px-4 py-3 text-gray-600">
                {item.category}
              </td>
              <td className="px-4 py-3 text-gray-600">
                {item.stock}
              </td>
              <td className="px-4 py-3 text-gray-600">
              {item.description ? item.description : '-'}
              </td>
              <td>
                <button onClick={() => submit(item)} className="mt-4 ml-5 mb-3 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                  Edit 
                </button>
              </td>
            </tr>
          ))) : (<tr><td colSpan="5" className="px-4 py-3 text-gray-600 text-center">No products available.</td></tr>)}
        </tbody>
      </table>
    </div>

  )
}

export default ProductTable
