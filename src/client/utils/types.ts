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