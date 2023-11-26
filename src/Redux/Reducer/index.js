import { combineReducers } from "redux";
import { productReducer, selectedproductsReducer } from "./productReducer";


const reducer=combineReducers({
   allproducts:productReducer,
   product:selectedproductsReducer,
})
export default reducer;