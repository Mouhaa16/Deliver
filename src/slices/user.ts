import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IUser,
  IVerifyOtp,
  UserResponse,
  UsersState,
  ValidationErrors,
} from "../interfaces";
import { AxiosError } from "axios";
import {
  CreateAxiosPost,
  PostManyAxiosPost,
  SendSingleAxiosPost,
  UpdateByIdAxiosPost,
} from "../infrastructure/utils/api";
import { RootState } from "../infrastructure/store/store";
import { useAppDispatch } from "../infrastructure/store/hook";

export const CreateUser = createAsyncThunk<
  IUser,
  Partial<IUser>,
  {
    rejectValue: ValidationErrors;
  }
>("users/create", async (userData, { rejectWithValue }) => {
  const { phone } = userData;
  console.log(phone);
  try {
    const response = await CreateAxiosPost("/user/createUser", { phone });
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const LoginUser = createAsyncThunk<
  IUser,
  Partial<IUser>,
  {
    rejectValue: ValidationErrors;
  }
>("users/login", async (userData, { rejectWithValue }) => {
  const { phone } = userData;
  try {
    const response = await SendSingleAxiosPost("/user/login", {
      username: phone,
      password: "string",
    });
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const SendOtp = createAsyncThunk<
  IUser,
  Partial<IUser>,
  {
    rejectValue: ValidationErrors;
  }
>("users/sendOtp", async (userData, { rejectWithValue }) => {
  const { phone } = userData;
  try {
    const response = await SendSingleAxiosPost("/user/otp/to-phone", { phone });
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const VerifyOtp = createAsyncThunk<
  IVerifyOtp,
  Partial<IVerifyOtp>,
  {
    rejectValue: ValidationErrors;
  }
>("users/update", async (userData, { rejectWithValue }) => {
  const { phone, otp } = userData;
  try {
    const response = await PostManyAxiosPost("/user/pin-code/phone/verify", {
      phone,
      otp,
    });
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const updateUser = createAsyncThunk<
  IUser,
  { id: string } & Partial<IUser>,
  {
    rejectValue: ValidationErrors;
  }
>("users/update", async (userData, { rejectWithValue }) => {
  try {
    const { id, ...fields } = userData;
    const response = await UpdateByIdAxiosPost("/updateUser", id, fields);
    return response.status;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getCurrentCountryCode = (state: RootState) =>
  state.users.country_code;

const usersSlice = createSlice({
  name: "users",
  initialState: {
    country_code: {
      code: "+234",
      country: "Nigeria",
    },
    phone: "",
    entities: {},
    error: null,
  } as UsersState,
  reducers: {
    setCurrentCountryCode: (state, action: PayloadAction<any>) => {
      state.country_code = action.payload;
    },
    setPhone: (state, action: PayloadAction<any>) => {
      state.phone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.fulfilled, (state, { payload }) => {
      state.entities[payload.phone] = payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(SendOtp.fulfilled, (state, { payload }) => {
      state.entities[payload.phone] = payload;
    });
    builder.addCase(SendOtp.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
  },
});
export const { setPhone, setCurrentCountryCode } = usersSlice.actions;
export default usersSlice.reducer;
