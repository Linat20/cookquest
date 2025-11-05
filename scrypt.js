const startBtn = document.getElementById('startBtn');
const gameArea = document.getElementById('gameArea');
const stepText = document.getElementById('stepText');
const nextStepBtn = document.getElementById('nextStepBtn');

const steps = [
  "Шаг 1: Возьми миску.",
  "Шаг 2: Добавь ингредиенты.",
  "Шаг 3: Перемешай всё тщательно.",
  "Шаг 4: Поставь на плиту и готовь 5 минут.",
  "Шаг 5: Блюдо готово! Приятного аппетита 🍽️"
];

let currentStep = 0;

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  gameArea.classList.remove('hidden');
  stepText.textContent = steps[currentStep];
});

nextStepBtn.addEventListener('click', () => {
  currentStep++;
  if (currentStep < steps.length) {
    stepText.textContent = steps[currentStep];
  } else {
    stepText.textContent = "🎉 Ты завершил готовку!";
    nextStepBtn.disabled = true;
  }
});