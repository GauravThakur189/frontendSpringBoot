import React, { useState } from 'react'
import ProductService from '../service/ProductServices';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {

    const [product,setProduct] = useState({
        productName:"",
        description:"",
        price:"",
        status:""

    })
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const value = e.target.value;
        setProduct({...product,[e.target.name]:value})
    }
   function  productRegister(e){
        e.preventDefault();
        const productService = new ProductService();
        productService.saveProduct(product).then((res)=>{
           
            console.log(res);
            setProduct({
                    productName:" ",
                    description:" ",
                    price:" ",
                    status:" "
            
                })
                navigate('/')
        })
        .catch(error => console.error("product not saved" +error))
    }
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
            <div className='card'>
            <div className='card-header fs-3 text-center'>
                Edit Product
            </div>
            <div className='card-body'>
                <form onSubmit={(e)=>productRegister(e)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1"> Enter Product Name</label>
                        <input 
                        type='text'
                        className="form-control"
                        name='productName'
                            onChange={(e)=>handleChange(e)}
                            value={product.productName}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1"> Enter Description</label>
                        <input 
                        type='text'
                        className="form-control"
                        name='description'
                            onChange={(e)=>handleChange(e)}
                            value={product.description}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1"> Enter Price</label>
                        <input 
                        type='text'
                        className="form-control"
                        name='price'
                            onChange={(e)=>handleChange(e)}
                            value={product.price}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1"> Enter Status</label>
                        <input 
                        type='text'
                        className="form-control"
                        name='status'
                            onChange={(e)=>handleChange(e)}
                            value={product.status}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary col-md-12">Add Product</button>
                </form>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EditProduct