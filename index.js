const express = require("express");
const cors = require("cors");
const twisters = require("./data/all_twisters.json"); // Импорт данных

const app = express();
app.use(cors()); // Разрешаем запросы с любых доменов

// Базовый роут
app.get("/", (req, res) => {
  res.json({ message: "Добро пожаловать в API скороговорок!" });
});

// 1. Получить все скороговорки
app.get("/api/twisters", (req, res) => {
  res.json(twisters);
});

// 2. Получить случайную скороговорку
app.get("/api/twisters/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * twisters.twisters.length);
  res.json(twisters.twisters[randomIndex]);
});

// 3. Фильтр по сложности
app.get("/api/twisters/difficulty/:level", (req, res) => {
  const level = req.params.level; // easy, medium, hard
  const filtered = twisters.twisters.filter((t) => t.difficulty === level);
  res.json(filtered);
});

// 4. Поиск по ID
app.get("/api/twisters/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const twister = twisters.twisters.find((t) => t.id === id);
  res.json(twister || { error: "Не найдено" });
});

// 5. Поиск по тегам (GET http://localhost:3000/api/twisters/tag/животные)
app.get("/api/twisters/tag/:tag", (req, res) => {
  const tag = req.params.tag.toLowerCase();
  const filtered = twisters.twisters.filter((t) => t.tags.some((item) => item.toLowerCase() === tag));
  res.json(filtered);
});

//   Пагинация (GET http://localhost:3000/api/twisters/page/2)
app.get("/api/twisters/page/:num", (req, res) => {
  const perPage = 10;
  const page = parseInt(req.params.num) || 1;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginated = twisters.twisters.slice(start, end);
  res.json({
    page,
    total: twisters.twisters.length,
    data: paginated,
  });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
