import { createSlice } from "@reduxjs/toolkit";

const ThemesSlice = createSlice({
  initialState : '',
  name : 'ThemesSlice',
  reducers : {
    changeTheme: (state,action)=>{
      document.body.classList.toggle('dark')
      return document.body.classList.value;
    }
  }
})
export const {changeTheme} = ThemesSlice.actions; 
export default ThemesSlice.reducer; 