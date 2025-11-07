const loadingText = document.getElementById("loadingText");

const phrases = [
  "Готовим ингредиенты...",
  "Добавляем специи...",
  "Взбиваем яйца...",
  "Нагреваем сковороду...",
  "Подбрасываем магию..."
];

let index = 0;

// Сразу показать первую фразу
loadingText.textContent = phrases[index];
loadingText.style.opacity = 1; // вот это важно!

function showNextPhrase() {
  // Сначала скрываем текущий текст
  loadingText.style.opacity = 0;

  // Через 1 секунду меняем текст и показываем новый
  setTimeout(() => {
    index = (index + 1) % phrases.length;
    loadingText.textContent = phrases[index];
    loadingText.style.opacity = 1;
  }, 1000);
}

// Цикл смены фраз каждые 3 секунды (1 секунда fade-out + 2 секунды отображение)
setInterval(showNextPhrase, 3000);