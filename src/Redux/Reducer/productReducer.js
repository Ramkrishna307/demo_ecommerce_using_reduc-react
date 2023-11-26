import { ActionTypes } from "../contants/actionTypes";


const initialstate={
    products:[
        {
            
        }

    ]
}
//here destructing the action into {type,payload which is the parameter}
export const productReducer=(state=initialstate,{type,payload})=>{
     switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
         
     
        default:
            return state;
     }
}

export const selectedproductsReducer=(state={},{type,payload})=>{
     switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
         
     
        default:
            return state;
     }

}