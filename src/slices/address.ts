import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { RootState } from "../infrastructure/store/store";
import { CreateAxiosPost, GetAllAxiosGet } from "../infrastructure/utils/api";
import {
  AddressState,
  ValidationErrors,
  PostNewAddressResponse,
  IAddress,
} from "../interfaces";

export const OnSaveAddress = createAsyncThunk<
  IAddress,
  Partial<IAddress>,
  {
    rejectValue: ValidationErrors;
  }
>("users/create", async (addressData, { rejectWithValue }) => {
  try {
    const response = await CreateAxiosPost(
      "/address/createAddress",
      addressData
    );

    return response.data.address;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getAllUserAddress = createAsyncThunk<
  IAddress,
  void,
  {
    rejectValue: ValidationErrors;
  }
>("users/create", async (args, { rejectWithValue }) => {
  try {
    const response = await GetAllAxiosGet("/address/getAllUserAddress");
    console.log(response.data);
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

// export const updateAddress = createAsyncThunk<
//   IAddress,
//   { id: string } & Partial<IAddress>,
//   {
//     rejectValue: ValidationErrors;
//   }
// >("users/update", async (userData, { rejectWithValue }) => {
//   try {
//     const { id, ...fields } = userData;
//     const response = addressAPI.updateAddressById<PostNewAddressResponse>(
//       id,
//       fields
//     );
//     return response.data.address;
//   } catch (err: any) {
//     let error: AxiosError<ValidationErrors> = err; // cast the error for access
//     if (!error.response) {
//       throw err;
//     }
//     return rejectWithValue(error.response.data);
//   }
// });

export const getAllAddress = (state: RootState) => state.address.addresses;

export const getAddressById = (state: RootState, addressId: string) =>
  state.address.addresses.find((addr: any) => addr.id === addressId);

export const CurrentPickupAddress = (state: RootState) =>
  state.address.activepickUpAddress;

export const CurrentdestAddress = (state: RootState) =>
  state.address.activedestinationAddress;

export const get = (state: RootState) => state.address.button;

const AddressSlice = createSlice({
  name: "address",
  initialState: {
    button: false,
    location: [],
    activepickUpAddress: {},
    activedestinationAddress: {},
    addresses: [],
  } as AddressState,

  reducers: {
    setBtnType: (state, action: PayloadAction<boolean>) => {
      state.button = action.payload;
    },
    setCurrentPick: (state, action: PayloadAction<any>) => {
      state.activepickUpAddress = action.payload;
    },
    setcurrentDest: (state, action: PayloadAction<any>) => {
      state.activedestinationAddress = action.payload;
    },
    setLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload;
    },
  },

  extraReducers: (builder) => {},
});
export const { setCurrentPick, setLocation, setcurrentDest, setBtnType } =
  AddressSlice.actions;
export default AddressSlice.reducer;
