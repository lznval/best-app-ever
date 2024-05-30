import ProductModel from "../models/Product";

export const create = async (req, res) => {
  try {
    const doc = new ProductModel({
      title: req.body.title,
      text: req.body.text,
      photos: req.body.photos,
      tags: req.body.tags,
      user: req.userId,
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
