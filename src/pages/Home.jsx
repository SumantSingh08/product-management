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

    useEffect(() => {
        setCurrentPage(1);
    }, [serachValue]);

    const filtered = products.filter(p => p.name.toLowerCase().includes(serachValue.toLowerCase()));

    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filtered.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <div className="w-full min-h-screen  bg-linear-to-b from-white to-pink-200">
            <ViewToggle view={view} setView={setView} />
            {view === 'table' ? <ProductTable products={paginatedProducts} /> : <ProductCard products={paginatedProducts} />}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                    <Pagination
                        page={currentPage}
                        setPage={setCurrentPage}
                        total={totalPages}
                    />
                </div>
            )}
        </div>
    );
}

export default Home
