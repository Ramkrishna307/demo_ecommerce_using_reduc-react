import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { setproducts } from '../Redux/Action/productAction';


const ProductListing = () => {

    const url="https://fakestoreapi.com/products"

   const product=useSelector(
    (state)=> state.allproducts.products
   )
   const dispatch=useDispatch();
   console.log(product);

   const fetchdata= async()=>{
    const response= await axios.get(url).catch((err)=>{ console.log(err)} )
    dispatch(setproducts(response.data))
    console.log(response.data);
   
    }
    console.log()
   
  useEffect(
    ()=>{
      fetchdata();
    },[]
  )


  return (

<div className='ui grid container'>
  <ProductComponent/>
</div>

  )
}

export default ProductListing