export type TUser = {
  _id: string;
  createdAt: string;
  email: string;
  fullName: string;
  updatedAt: string;
};

export type TSeller = {
  _id: string;
  createdAt: string;
  email: string;
  fullName: string;
  updatedAt: string;
  role: string;
};

export interface IProductsData {
  _id: string;
  title: string;
  text: string;
  categories: string[];
  photos: string[];
  viewsCount: number;
  seller: TSeller;
  price: number;
  quantity: number;
  createdAt: string;
  updateAt: string;
}

export interface ICartProducts {
  _id: string;
  product: IProductsData;
  seller: TSeller;
  quantity: number;
}

export enum ERoutes {
  MAIN = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  FAVORITES = '/favorites',
  CART = '/cart',
  USERS = '/users',
  PRODUCTS = '/products',
  PRODUCT_DETAIL = '/product/:id',
}

export enum ERoutesSeller {
  MAIN = '/seller',
  CREATE = '/create',
}
