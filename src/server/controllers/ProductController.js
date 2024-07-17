import ProductModel from "../models/Product.js";

export const getAll = async (req, res) => {
  try {
    const products = await ProductModel.find().populate("seller").exec();

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить товары",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const productId = req.params.id;

    ProductModel.findOneAndUpdate(
      { _id: productId },
      { $inc: { viewsCount: 1 } },
      { returnDocument: "after" }
    )
      .then(doc => res.json(doc))
      .catch(err => res.status(500).json({ message: "Продукт не найден" }));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить товары",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const productId = req.params.id;

    ProductModel.findOneAndDelete({ _id: productId })
      .then(doc => res.json(doc))
      .catch(err => res.status(500).json({ message: "Продукт не найден" }));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить товары",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new ProductModel({
      title: req.body.title,
      text: req.body.text,
      photos: req.body.photos,
      categories: req.body.categories,
      seller: req.userId,
      price: req.body.price,
    });

    const product = await doc.save();

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать товар",
    });
  }
};

export const update = async (req, res) => {
  try {
    const productId = req.params.id;

    await ProductModel.updateOne(
      {
        _id: productId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        photos: req.body.photos,
        categories: req.body.tags,
        user: req.userId,
      }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось обновить товар",
    });
  }
};
