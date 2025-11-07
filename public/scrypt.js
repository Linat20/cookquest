const loadingText = document.getElementById("loadingText");

const phrases = [
  "Готовим ингредиенты...",
  "Добавляем специи...",
  "Взбиваем зелье...",
  "Нагреваем котел...",
  "Подбрасываем магию..."
];

let index = 0;

function showNextPhrase() {
  loadingText.style.opacity = 0; // fade-out

  setTimeout(() => {
    index = (index + 1) % phrases.length;
    loadingText.textContent = phrases[index];
    loadingText.style.opacity = 1; // fade-in
  }, 1000); // совпадает с duration transition в CSS
}

// Текст сразу виден
loadingText.style.opacity = 1;

// Цикл смены фраз каждые 3 секунды
setInterval(showNextPhrase, 3000);