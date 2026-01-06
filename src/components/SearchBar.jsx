import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addsearchData } from '../app/ProductSlice';
export default function SearchBar() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(addsearchData(value));
        }, 500);
        return () => clearTimeout(timer);
    }, [value]);


    return (
        <nav className="w-full bg-orange-500 text-white p-4 md:p-6 shadow-md mb-6">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    
    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
      Product Management
    </h2>

    {/* Search */}
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setValue(e.target.value)}
      className="w-full md:max-w-md border rounded-full py-2.5 px-4 text-sm
                 focus:outline-none focus:ring-2 focus:ring-white
                 bg-white text-gray-700 placeholder:text-gray-500"
    />

    {/* Buttons */}
    <div className="flex justify-center md:justify-end gap-3 flex-wrap">
      <button
        onClick={() => navigate('/')}
        className="bg-white text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Home
      </button>

      <button
        onClick={() => navigate('/add-product')}
        className="bg-white text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Add Product
      </button>
    </div>

  </div>
</nav>


    );
}