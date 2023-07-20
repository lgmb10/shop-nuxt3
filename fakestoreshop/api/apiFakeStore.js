export default ({ axios, baseUrl }) => ({
    async getAllProducts(){
        return await axios.get(`${baseUrl}/products`);
    },

    async getMenProducts(limit){
        return await this.getAllProductsByCategory("men's%20clothing", limit)
    },

    async getAllProductsByCategory(category, limit){
        return await axios.get(`${baseUrl}/products/category/${category}?limit=${limit}`)
    }
});