export default ({ axios, baseUrl }) => ({
    async getAllProducts(){
        return await axios.get(`${baseUrl}/products`);
    },

    async getOneProduct(id){
        return await axios.get(`${baseUrl}/products/${id}`);
    },

    async getMenProducts(limit){
        return await this.getAllProductsByCategory("men's%20clothing", limit)
    },

    async getWomenProducts(limit){
        return await this.getAllProductsByCategory("women's%20clothing", limit)
    },

    async getAllProductsByCategory(category, limit){
        return await axios.get(`${baseUrl}/products/category/${category}?limit=${limit}`)
    }
});