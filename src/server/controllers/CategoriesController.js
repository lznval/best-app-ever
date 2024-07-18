import CategoriesModel from '../models/Category.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoriesModel.find();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось получить категории',
    });
  }
};

export const createCategories = async (req, res) => {
  try {
    const doc = new CategoriesModel({
      title: req.body.title,
    });

    const category = await doc.save();

    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать категорию',
    });
  }
};
