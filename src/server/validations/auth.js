import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
  body("fullName", "Укажите имя и фамилию").isLength({ min: 2 }),
  body("avatarUrl", "Неверная ссылка").optional().isURL(),
];
