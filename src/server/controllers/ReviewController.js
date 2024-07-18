import ReviewModel from '../models/Review.js';

export const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find()
      .populate({
        path: 'user',
        model: 'User',
        select: '-passwordHash',
      })
      .populate({
        path: 'product',
        model: 'Product',
      });

    res.json(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось получить отзывы',
    });
  }
};

export const createReview = async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

    const doc = new ReviewModel({
      user,
      product,
      rating,
      comment,
    });

    const review = await doc.save();

    res.json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось отправить отзыв',
    });
  }
};

export const getReviewsForProduct = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ product: req.params.id })
      .populate('user', 'name')
      .exec();

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Не удалось получить отзывы',
    });
  }
};
