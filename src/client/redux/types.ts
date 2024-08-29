export interface IUserLoginData {
  _id: string;
  email: string;
  token: string;
  fullName: string;
  createdAt: string;
  updateAt: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IRegisterParams {
  email: string;
  password: string;
  fullName: string;
}

export interface IAuthState {
  data: IUserLoginData | null;
  status: 'loading' | 'loaded' | 'error';
}

export interface IProductsData {
  _id: string;
  title: string;
  text: string;
  categories: string[];
  photos: string[];
  viewsCount: number;
  seller: {
    _id: string;
    email: string;
    token: string;
    fullName: string;
    createdAt: string;
    updateAt: string;
  };
  price: number;
  quantity: number;
  createdAt: string;
  updateAt: string;
}

export interface IProductState {
  data: IProductsData[] | [] | {};
  status: 'loading' | 'loaded' | 'error';
}
