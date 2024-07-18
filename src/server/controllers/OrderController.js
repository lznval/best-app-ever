import OrderModel from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel
      .find()
      .populate({
        path: 'user',
        model: 'User',
        select: '-passwordHash'
      }).populate({
        path: 'products.product',
        model: 'Product',
      }).populate({
        path: 'products.seller',
        model: 'Seller',
        select: '-passwordHash'
      }).exec();
    res.json(orders)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить заказы",
    });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;

    // Создание нового документа заказа
    const doc = new OrderModel({
      user: req.body.user,
      products: products.map(item => ({
        seller: item.seller,
        product: item.product,
        quantity: item.quantity
      })),
      totalAmount,
    });

    // Сохранение заказа в базе данных
    const order = await doc.save();

    // Возвращаем заполненные данные в ответе
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать заказ",
    });
  }
};