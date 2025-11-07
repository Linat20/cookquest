const loadingText = document.getElementById("loadingText");

const phrases = [
  "Готовим ингредиенты...",
  "Добавляем специи...",
  "Взбиваем зелье...",
  "Нагреваем котел...",
  "Подбрасываем магию..."
];

let index = 0;

// Сразу показываем первую фразу
loadingText.textContent = phrases[index];

// Меняем текст каждые 2 секунды
setInterval(() => {
  index = (index + 1) % phrases.length;
  loadingText.textContent = phrases[index];
}, 2000);