window.Telegram.WebApp.ready(); // сообщает Telegram, что Web App загружен

// Теперь можно запускать JS
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
  loadingText.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % phrases.length;
    loadingText.textContent = phrases[index];
    loadingText.style.opacity = 1;
  }, 500);
}

setInterval(showNextPhrase, 2000);