export const colorClasses: { [key: string]: string } = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  green: 'bg-green-600 hover:bg-green-700',
  red: 'bg-red-600 hover:bg-red-700',
  gray: 'bg-gray-600 hover:bg-gray-700',
};

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
