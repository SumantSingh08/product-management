import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addsearchData } from '../app/ProductSlice';
import { Menu, X } from "lucide-react";
export default function SearchBar() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(addsearchData(value));
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);


  return (
    <nav className="w-full bg-orange-500 text-white p-4 md:p-6 shadow-md mb-6 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:px-8">

        {/* Title */}
        <div className="flex items-center justify-between md:px-8">

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            Product Management
          </h2>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
            <div className="  rounded-xl p-4 ">
              <button
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
                className="block w-full text-center px-4 py-2  font-semibold"
              >
                Home
              </button>

              <button
                onClick={() => {
                  navigate("/add-product");
                  setOpen(false);
                }}
                className="block w-full text-center px-4 py-2  font-semibold"
              >
                Add Product
              </button>
            </div>
          )}

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setValue(e.target.value)}
          className="w-full md:max-w-md border rounded-full py-2.5 px-10 text-sm outline-none
                 focus:outline-none focus:ring-2 focus:ring-white
                 bg-white  placeholder:text-gray-500 "
        />

        {/* Buttons */}
        <div className="hidden md:flex justify-center md:justify-end gap-4 md:px-8">
          <button
            onClick={() => navigate('/')}
            className="text-white md:text-lg px-4 py-2 rounded-full font-bold  transition cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => navigate('/add-product')}
            className="text-white md:text-lg px-4 py-2 rounded-full font-bold transition cursor-pointer"
          >
            Add Product
          </button>
        </div>

        

      </div>
    </nav>


  );
}