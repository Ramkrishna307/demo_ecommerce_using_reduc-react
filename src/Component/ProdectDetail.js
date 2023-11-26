import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {selectedproducts} from "../Redux/Action/productAction";


const ProdectDetail = () => {
    const product=useSelector((state)=> state.product);
    // console.log("Printing the state");
    // console.log(product);
    const { image, title, price, category, description } = product;

    const {productId}=useParams();
    console.log(productId)
    const dispatch=useDispatch();

    const fetchdetails= async(id)=>{
    //     const response= await axios.get(`https://fakestoreapi.com/products/${id}`).catch(
    //         (error)=>{
    //             console.log("Error",error)
    //         }
    //     );
    //     console.log("printing the response");
    //    console.log(response.data);
    try {
        //`https://fakestoreapi.com/products/${id}`
        //
        console.log(id)
        const url=`https://fakestoreapi.com/products/${id}`
        console.log(url);
        const response= await axios.get(url);
        console.log(response)
        console.log("fetching done");
        dispatch(selectedproducts(response.data))
    } catch (error) {
        console.log(error);
    }

       
    }
    

    useEffect(() => {
    fetchdetails(productId);
    
     
    }, [productId])
    


  return (
   <>
   </>
  )
}

export default ProdectDetail