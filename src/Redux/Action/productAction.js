import { ActionTypes } from "../contants/actionTypes";

export const setproducts=(product)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:product
    };
}
export const selectedproducts=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload:product
    };
}
