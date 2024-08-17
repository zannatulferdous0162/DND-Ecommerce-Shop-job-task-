import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Service/service';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { products, totalPages } = await getProducts(page, search, category, minPrice, maxPrice, sortBy);
                setProducts(products);
                setTotalPages(totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [page, search, category, minPrice, maxPrice, sortBy]);

    // Pagination buttons rendering logic
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`btn ${i === page ? 'btn-primary' : 'btn-outline'} mx-1`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-3">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search by name"
                    className="input input-bordered w-full md:w-1/4 mb-4 md:mb-0"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Category Filter */}
                <select
                    className="select select-bordered w-full md:w-1/4 mb-4 md:mb-0"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Books">Books</option>
                </select>

                {/* Price Range */}
                <div className="flex items-center space-x-2 w-full md:w-1/4 mb-4 md:mb-0 ">
                    <label className="block font-medium text-gray-700">Price Range:</label>
                    <input
                        type="number"
                        placeholder="Min"
                        className="input input-bordered w-full"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <span className="text-gray-500">-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        className="input input-bordered w-full"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>

                {/* Sorting */}
                <select
                    className="select select-bordered w-full md:w-1/4"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="dateDesc">Date Added: Newest First</option>
                </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product._id} className="card shadow-lg">
                        <figure><img src={product.image} alt={product.name} className="w-full h-48 object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="text-lg font-bold">${product.price}</p>
                            <p className="text-sm">Category: {product.category}</p>
                            <p className="text-sm">Ratings: {product.ratings}</p>
                            <p className="text-sm">Added on: {new Date(product.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
                <button
                    className="btn btn-outline"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                {renderPageNumbers()}
                <button
                    className="btn btn-outline"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;