import { configureStore } from "@reduxjs/toolkit";
import StoreSlice from "./StoreSlice/StoreSlice";
const Store = configureStore({
    
    reducer:{
        store : StoreSlice
    }
    
})
export default Store;