export interface IUser {
  userId?: string;
  username: string;
  otp?: string;
}

export interface IVerifyOtp {
  phone: string;
  otp: string;
}

export interface UserResponse {
  user: IUser;
  success: boolean;
}

interface ICountryCode {
  code: string;
  country: string;
}
export interface UsersState {
  country_code: ICountryCode;
  phone: string;
  error: string | null | undefined;
  entities: Record<string, IUser>;
}
