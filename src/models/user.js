const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      // у пользователя есть имя — опишем требования к имени в схеме:
      type: String, // имя — это строка
      // required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
      // minlength: 2, // минимальная длина имени — 2 символа
      // maxlength: 30, // а максимальная — 30 символов
    },
    last_name: {
      type: String, // имя — это строка
    },
    username: {
      type: String, // имя — это строка
    },
    telegram_id: {
      type: Number, // имя — это число
      required: [true, "Telegram id is required"], // оно должно быть у каждого пользователя, так что имя — обязательное поле
      unique: true,
    },
  },
  {
    timestamps: true, // Правильное расположение опции timestamps
  }
);

// создаём модель и экспортируем её
module.exports = mongoose.model("user", userSchema);
