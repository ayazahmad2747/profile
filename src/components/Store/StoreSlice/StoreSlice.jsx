import { createSlice, current } from "@reduxjs/toolkit";



const initialState = {
    data : [{
        name : '',
        email : '',
        massage : ''
    }]
}
const StoreSlice = createSlice({
    name : 'store',
    initialState,
    reducers : {
        addData : (state, action)=> {
            // console.log(action.payload);
             state.data.push(action.payload);
            console.log(current( state))
        }
    }
})
export default StoreSlice.reducer;
 export const {addData} = StoreSlice.actions;