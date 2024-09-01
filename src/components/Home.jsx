import React, { useEffect, useState } from 'react'
import ProductService from '../service/ProductServices';

import { useNavigate } from 'react-router-dom';

const Home = () => {
   const [productDetails,setProductDetails] = useState();
   const navigate = useNavigate();

  //  function deleteProduct(id){
  //   const productService = new ProductService();
  //   productService.deleteProduct(id).then(response => {
  //      console.log("product deleted")
  //  }).catch((err)=>{
  //   console.log(err + "product not deleteds");
  //  })
  // }

  const deleteProduct = (id) => {
    const productService = new ProductService();
    productService.deleteProduct(id)
      .then((res) => {
        console.log("Product deleted");
        init();
      })
      .catch((err) => {
        console.log("Product not deleted: " + err);
      });
  };

  
   useEffect(()=>{
     init();
   },[])

   const init = ()=>{
    const  productService = new ProductService();
    productService.getProduct()
    .then((res)=>{
       console.log(res);
       setProductDetails(res.data)
    })
    .catch((err)=>{
      console.log("error in fetching the data");
    })
   }

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
      <h1 className='text-center'>Welcome to my website</h1>
    </div>
    <div className='card'>
    <div className='card-body'>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">SI No.</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope='col'>Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    productDetails && productDetails.length > 0 ? (
    productDetails.map((value,id)=>(
      <tr>
      <td>{id+1}</td>
      <td>{value.productName}</td>
      <td>{value.description}</td>
      <td>{value.price}</td>
      <td>{value.status}</td>
      <td>
        <button onClick={()=> navigate("/EditProduct")} className='btn btn-primary'>Edit</button>
        <button onClick={()=> deleteProduct(value.id)} className='btn btn-danger'>Delete</button>
      </td>
    </tr>
    ))
    ):(
      <tr>
      <td colSpan="6">No products available</td>
    </tr>
    )
  }
    
    
  </tbody>
</table>
    </div>

    </div>

    </div>

    </div>
  )
}

export default Home