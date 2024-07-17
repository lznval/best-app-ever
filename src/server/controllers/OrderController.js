import OrderModel from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
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
      user: req.userId,
      products: products.map(item => ({
        product: item.product,
        quantity: item.quantity
      })),
      totalAmount,
    });

    // Сохранение заказа в базе данных
    const order = await doc.save();

    // Заполнение связанных данных о пользователе и продуктах
    const populatedOrder = await OrderModel.findById(order._id)
      .populate('user', '-password') // Исключаем пароль из данных пользователя
      .populate('seller')
      .exec();

    // Возвращаем заполненные данные в ответе
    res.json(populatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать заказ",
    });
  }
};