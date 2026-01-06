import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../app/ProductSlice';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', price: '', category: '', stock: '', description: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const editProduct = useSelector((state) => state.products.editData);
  useEffect(() => {
    if (editProduct) {
      setForm(editProduct);
    }
  }, [editProduct]);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) {
      setError('Required fields missing');
      return;
    }
     if (editProduct) {
      dispatch(updateProduct(form));
    } else {
      dispatch(addProduct({ ...form, id: Date.now() }));
    }
    setForm({ name: '', price: '', category: '', stock: '', description: '' });
    setError('');
    navigate('/');
    window.scrollTo(0,0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-b from-white to-pink-200">
      <div className="w-full max-w-md bg-white  rounded-2xl p-6 sm:p-8 shadow-lg">

        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          {editProduct ? 'Edit Product' : 'Add New Product'}
        </h2>

        {error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg text-center">
            {error}
          </p>
        )}

        <form onSubmit={submit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full  border-gray-200 rounded-lg px-4 py-2.5 text-sm  bg-gray-200 outline-none transition"
              placeholder="Enter product name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block  text-sm font-medium text-gray-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="w-full bg-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter price"
              required
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full bg-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter category"
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full bg-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter stock"
              required
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              description (optional) 
            </label>
            <input
              className="w-full bg-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-medium hover:bg-orange-600 active:scale-[0.98] transition cursor-pointer"
          >
            {editProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>


  );
}