import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
  name: 'auth',
  initialState: 'KscjqcyxkzcV30OJwPaIsXXSaeO2',
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => '',
  },
});


export const {addUser,removeUser}=AuthSlice.actions;
export default AuthSlice.reducer;