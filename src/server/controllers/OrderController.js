import OrderModel from '../models/Order.js';

export const getOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await OrderModel.find({ user: userId })
      .populate({
        path: 'user',
        model: 'User',
        select: '-passwordHash',
      })
      .populate({
        path: 'products.product',
        model: 'Product',
      })
      .populate({
        path: 'products.seller',
        model: 'Seller',
        select: '-passwordHash',
      })
      .exec();
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось получить заказы',
    });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;

    const doc = new OrderModel({
      user: req.body.user,
      products: products.map((item) => ({
        seller: item.seller,
        product: item.product,
        quantity: item.quantity,
      })),
      totalAmount,
    });

    const order = await doc.save();

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать заказ',
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.id;

    await OrderModel.updateOne(
      {
        _id: orderId,
      },
      {
        status: req.body.status,
      },
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось обновить заказ',
    });
  }
};
