import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../infrastructure/store/store";

const initialState = [
  {
    id: nanoid(),
    name: "Malan Audu",
    city: "kano",
    LGA: "kumbotso",
    area_detail: "Gasau filling station No768",
  },
  {
    id: nanoid(),
    name: "Malan Audu",
    phone: "09091879212",
    city: "kano",
    LGA: "kumbotso",
    area_detail: "Gasau filling station No768",
  },
  {
    id: nanoid(),
    name: "Malan Audu",
    phone: "09091879212",
    city: "kano",
    LGA: "kumbotso",
    area_detail: "Gasau filling station No768",
  },
  {
    id: nanoid(),
    name: "Malan Audu",
    phone: "09091879212",
    city: "kano",
    LGA: "kumbotso",
    area_detail: "Gasau filling station No768",
  },
];

export const getAllAddress = (state: RootState) => state.address;
export const getAddressById = (state: RootState, addressId: string) =>
  state.package.find((addr: any) => addr.id === addressId);

const AddressSlice = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {},
});

export default AddressSlice.reducer;
