import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name:'Mayinuddin Munna',
  email:'mayinudin.munna@gmail.com',
};

const usersSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;
export default usersSlice.reducer;
