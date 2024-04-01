import { createSlice, current } from "@reduxjs/toolkit";

const localkey = 'data';
const getStorageData = ()=>{
    const storedData = localStorage.getItem(localkey);
    return storedData ? JSON.parse(storedData) : [{
        name : '',
        email: '',
        massage : ''
    }]
}
const storeData= (data)=>{
    localStorage.setItem(localkey, JSON.stringify(data))
}

const initialState = {
    data : getStorageData()
}
const StoreSlice = createSlice({
    name : 'store',
    initialState,
    reducers : {
        addData : (state, action)=> {
            // console.log(action.payload);
             state.data.push(action.payload);
            // console.log(current( state))
            storeData(state.data)
        }
    }
})
export default StoreSlice.reducer;
 export const {addData} = StoreSlice.actions;