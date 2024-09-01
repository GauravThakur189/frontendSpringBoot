import axios from "axios";

 const API_URL = "http://localhost:8080"

class ProductService{

    saveProduct(product){
        return axios.post(API_URL+"/saveProduct",product)
    }

    getProduct(){
        return axios.get(API_URL+"/" )
    }
    getProductById(id){
       return axios.get(API_URL+"/",id)
    }
    deleteProduct(id) {
        return axios.get(`${API_URL}/delete/${id}`);
      }
      editProduct(id){
        return axios.post(`${API_URL}/edit/${id}`);
      }

}

export default ProductService;