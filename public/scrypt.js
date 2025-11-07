const loadingText = document.getElementById("loadingText");

const phrases = [
  "Готовим ингредиенты...",
  "Добавляем специи...",
  "Взбиваем зелье...",
  "Нагреваем котел...",
  "Подбрасываем магию..."
];

let index = 0;

// Инициализация текста
loadingText.textContent = phrases[index];
loadingText.style.opacity = 1; // текст виден сразу

function showNextPhrase() {
  // fade-out
  loadingText.style.opacity = 0;

  // через 500мс меняем текст и делаем fade-in
  setTimeout(() => {
    index = (index + 1) % phrases.length;
    loadingText.textContent = phrases[index];
    loadingText.style.opacity = 1;
  }, 1000); // 0.5 секунды для плавного исчезновения
}

// Меняем текст каждые 2 секунды
setInterval(showNextPhrase, 2500);

// Переход через 6 секунд
setTimeout(() => {
  document.getElementById("splashScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
}, 10000);