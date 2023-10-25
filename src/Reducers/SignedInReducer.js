import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const signedInSlice = createSlice({
  name: "signedIn",
  initialState,
  reducers: {
    setSignedIn: (state, action) => {
      return action.payload;
    }
  }
});

export const { setSignedIn } = signedInSlice.actions;

export default signedInSlice.reducer;
