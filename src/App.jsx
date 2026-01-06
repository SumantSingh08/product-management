import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ProductForm from './components/ProductForm';
import Home from './pages/Home';
function App() {
    return (
        <BrowserRouter>
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-product" element={<ProductForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
