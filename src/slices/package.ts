import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../infrastructure/store/store";

const initialState = [
  {
    id: nanoid(),
    company: "testing Company",
    image: "image/q.jpeg",
    product: "testing product",
    send: true,
    from: "testing location",
  },
  {
    id: nanoid(),
    image: "image/q.jpeg",
    company: "testing Company",
    product: "testing product",
    from: "testing location",
    send: true,
  },
  {
    id: nanoid(),
    image: "image/q.jpeg",
    company: "testing Company",
    product: "testing product",
    from: "testing location",
    send: true,
  },
  {
    id: nanoid(),
    image: "image/q.jpeg",
    company: "testing Company",
    product: "testing product",
    from: "testing location",
    send: true,
  },
];

export const fetchPackage = createAsyncThunk("package/fetch", () => {});

export const getAllPackages = (state: RootState) => state.package;
export const getPackageById = (state: RootState, packageId: string) =>
  state.package.find((pkg: any) => pkg.id === packageId);

const PackageSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export default PackageSlice.reducer;
