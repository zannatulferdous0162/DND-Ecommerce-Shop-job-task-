import axios from 'axios';

const API_URL = 'https://dnk-server.vercel.app/api/v1';

export const getProducts = async (page, search = '', category = '', minPrice = '', maxPrice = '', sortBy='') => {
    try {
        const response = await axios.get(`${API_URL}/products`, {
            params: {
                page,
                search,
                category,
                minPrice: minPrice || 0,
                maxPrice: maxPrice || Infinity,
                sortBy,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
