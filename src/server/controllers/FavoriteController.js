import FavoriteModel from '../models/Favorite.js';

// Добавить продукт в избранное
export const addFavorite = async (req, res) => {
  try {
    const doc = new FavoriteModel({
      user: req.userId,
      product: req.body.product,
    });

    const favorite = await doc.save();
    res.json(favorite);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось добавить в избранное',
    });
  }
};

// Удалить продукт из избранного
export const removeFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    await FavoriteModel.findOneAndDelete({ user: req.userId, product: id });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось удалить из избранного',
    });
  }
};

// Получить все избранные продукты пользователя
export const getFavorites = async (req, res) => {
  try {
    const favorites = await FavoriteModel.find({ user: req.userId })
      .populate('product')
      .exec();
    res.json(favorites);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось получить избранные продукты',
    });
  }
};
