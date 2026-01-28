import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProductTable from '../components/ProductTable';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import ViewToggle from '../components/ViewToggle';
function Home() {
    const products = useSelector(state => state.products.products);
    const serachValue = useSelector(state => state.products.searchData);
    const [view, setView] = useState('table');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const tempProducts = [
  {
    id: 1,
    name: "HP Pavilion 15 Laptop",
    price: 62000,
    category: "Electronics",
    stock: 8
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 30000,
    category: "Mobile",
    stock: 15
  },
  {
    id: 3,
    name: "Sony WH-1000XM4 Headphones",
    price: 24000,
    category: "Accessories",
    stock: 6
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    price: 41000,
    category: "Wearables",
    stock: 4
  },
  {
    id: 5,
    name: "JBL Charge 5 Speaker",
    price: 14000,
    category: "Audio",
    stock: 10
  },
  {
    id: 6,
    name: "Logitech MX Master 3 Mouse",
    price: 7500,
    category: "Computer Accessories",
    stock: 18
  },
  {
    id: 7,
    name: "Keychron K2 Mechanical Keyboard",
    price: 9500,
    category: "Computer Accessories",
    stock: 7
  },
  {
    id: 8,
    name: "Apple iPad 9th Gen",
    price: 33000,
    category: "Electronics",
    stock: 9
  },
  {
    id: 9,
    name: "Mi 20000mAh Power Bank",
    price: 2200,
    category: "Accessories",
    stock: 25
  },
  {
    id: 10,
    name: "Anker USB-C Hub 7-in-1",
    price: 4800,
    category: "Computer Accessories",
    stock: 12
  }
];



    useEffect(() => {
        setCurrentPage(1);
    }, [serachValue]);

    const filtered = products.filter(p => p.name.toLowerCase().includes(serachValue.toLowerCase()));
    const isReadOnly = filtered.length < 1;

    const dataToShow = isReadOnly ? tempProducts : filtered;
    const totalPages = Math.ceil(dataToShow.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = dataToShow.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <div className="w-full min-h-screen  bg-linear-to-b from-white to-pink-200">
            <ViewToggle view={view} setView={setView} />
            {view === 'table' ? <ProductTable products={paginatedProducts} isReadOnly={isReadOnly} /> : <ProductCard products={paginatedProducts} isReadOnly={isReadOnly} />}
            {totalPages > 0 ? (
                <div className="flex justify-center mt-6">
                    <Pagination
                        page={currentPage}
                        setPage={setCurrentPage}
                        total={totalPages}
                    />
                </div>
            ) : <div className="flex justify-center mt-6">
                <Pagination
                    page={currentPage}
                    setPage={setCurrentPage}
                    total={tempProducts}
                />
            </div>
            }
        </div>
    );
}

export default Home
