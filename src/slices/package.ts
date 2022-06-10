import {
  createSlice,
  createAsyncThunk,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { RootState } from "../infrastructure/store/store";
import { GetAllAxiosGet, SingleAxiosGetBy } from "../infrastructure/utils/api";
import { IPackage, PackageState, ValidationErrors } from "../interfaces";

export const getAllPackages = createAsyncThunk<
  IPackage,
  void,
  {
    rejectValue: ValidationErrors;
  }
>("package/fetch", async (args, { rejectWithValue }) => {
  try {
    const response = await GetAllAxiosGet("/package/getAllUserPacks");
    console.log("from redux:" + response.data);
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getPackageById = createAsyncThunk<
  IPackage,
  { id: string },
  {
    rejectValue: ValidationErrors;
  }
>("package/fetch", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await SingleAxiosGetBy("/package/getUserPackById", id);
    return response.data.package;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getPayMethod = (state: RootState) => state.package.payment;
export const getItemInfo = (state: RootState) => state.package.itemInfo;
export const getWeightValue = (state: RootState) => state.package.weightvalue;
export const getPieceValue = (state: RootState) => state.package.piecevalue;
export const getDesc = (state: RootState) => state.package.desc;

const PackageSlice = createSlice({
  name: "users",
  initialState: {
    itemInfo: {},
    payment: "arrival",
    desc: "",
    weightvalue: 0,
    piecevalue: 0,
    packages: [],
  } as PackageState,
  reducers: {
    setPayMethod: (state, action: PayloadAction<any>) => {
      state.payment = action.payload;
    },
    setDesc: (state, action: PayloadAction<any>) => {
      state.desc = action.payload;
    },
    addWeight: (state) => {
      state.weightvalue += 1;
    },
    addPieces: (state) => {
      state.piecevalue += 1;
    },
    subtractWeigth: (state) => {
      state.weightvalue -= 1;
    },
    subtractPiece: (state) => {
      state.piecevalue -= 1;
    },
  },
});

export const {
  setDesc,
  setPayMethod,
  addPieces,
  addWeight,
  subtractPiece,
  subtractWeigth,
} = PackageSlice.actions;

export default PackageSlice.reducer;
