import { createSlice } from "@reduxjs/toolkit";

interface Types {
    name: string,
    email: string
    isSet: boolean
}
const initialState: Types = {
    name: '',
    email: '',
    isSet: true
}

export const nameSlice = createSlice({
    name: "names",
    initialState,
    reducers:{
        setNamesEmail:(state, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            // state.isSet = false
        },
        setTrue: (state) => {
            state.isSet = false;
        }
    }
})
export const { setNamesEmail, setTrue } = nameSlice.actions
export default nameSlice.reducer;