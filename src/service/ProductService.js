import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8090/api/product/getProducts";
const ADD_PRODUCT_API_BASE_URL = "http://localhost:8090/api/v1/saveProduct";
class ProductService{
    getProducts(){
        console.log("hii");
        return axios.get(PRODUCT_API_BASE_URL);
    }

    saveProducts(product){
        console.log(product);
        return axios.post(ADD_PRODUCT_API_BASE_URL,product,{ headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log("correct");
                return res.data;
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }
}

export default new ProductService()