import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
  body("fullName", "Укажите имя и фамилию").isLength({ min: 2 }),
  body("avatarUrl", "Неверная ссылка").optional().isURL(),
];

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];

export const productCreateValidation = [
  body("title", "Введите название товара").isLength({ min: 3 }).isString(),
  body("text", "Введите описание товара")
    .isLength({
      min: 5,
    })
    .isString(),
  body("tags", "Неверный формат тегов (укажите массив)").isArray(),
  body("photos", "Неверная ссылка на изображение").isArray(),
];
