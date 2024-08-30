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
  description: string
}

export enum ERoutes {
  MAIN = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  FAVORITES = '/favorites',
  CART = '/cart',
  USERS = '/users',
  PRODUCTS = '/products',
  PRODUCT_DETAIL = '/product/:id'
}

export enum ERoutesSeller {
  MAIN = '/seller'
}