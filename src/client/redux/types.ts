export interface IUserLoginData{
  _id: string;
  email: string;
  token: string;
  fullName: string;
  createdAt: string;
  updateAt: string
}

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IAuthState {
  data: IUserLoginData | null;
  status: 'loading' | 'loaded' | 'error';
}