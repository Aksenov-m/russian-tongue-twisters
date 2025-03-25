# 🗣️ Russian Tongue Twisters API & JSON Collection

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📦 О проекте

Полное решение для работы с 150+ русскими скороговорками:

- **JSON-коллекция** с метаданными
- **REST API** на Node.js/Express
- **Документация** по использованию

## 🚀 Быстрый старт

### 1. Использование JSON

```javascript
// В Node.js
const twisters = require("./twisters.json");

// В браузере
fetch("twisters.json")
  .then((r) => r.json())
  .then((data) => console.log(data.twisters[0]));
```
