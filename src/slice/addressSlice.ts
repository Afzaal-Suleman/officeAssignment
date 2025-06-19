import { createSlice } from "@reduxjs/toolkit";

interface Types {
    city: string,
    street: string,
    show: boolean
}
const initialState: Types = {
    city: '',
    street: '',
    show: false
}

export const addressSlice = createSlice({
    name: "names",
    initialState,
    reducers:{
        setAddress:(state, action)=>{
            state.city = action.payload.city;
            state.street = action.payload.street;
            state.show = true
        }
    }
})
export const { setAddress } = addressSlice.actions
export default addressSlice.reducer;