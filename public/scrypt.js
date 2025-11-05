const splashScreen = document.getElementById('splashScreen');
const gameScreen = document.getElementById('gameScreen');

const steps = [
  { text: "Шаг 1: Возьми миску", duration: 3000 },
  { text: "Шаг 2: Добавь ингредиенты", duration: 4000 },
  { text: "Шаг 3: Перемешай всё тщательно", duration: 5000 },
  { text: "Шаг 4: Поставь на плиту и готовь", duration: 6000 },
  { text: "Шаг 5: Блюдо готово! 🎉", duration: 0 }
];

let currentStep = 0;
const stepText = document.getElementById("stepText");
const nextStepBtn = document.getElementById("nextStepBtn");

// Скрываем Splash и показываем игру через 2 секунды
setTimeout(() => {
  splashScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  showStep(steps[currentStep]);
}, 2000);

function showStep(step) {
  stepText.textContent = step.text;
  stepText.classList.add("step-active");
  setTimeout(() => stepText.classList.remove("step-active"), 500);

  if (step.duration > 0) {
    nextStepBtn.disabled = true;
    setTimeout(() => {
      nextStepBtn.disabled = false;
    }, step.duration);
  } else {
    nextStepBtn.disabled = true;
  }
}

nextStepBtn.addEventListener("click", () => {
  currentStep++;
  if (currentStep < steps.length) {
    showStep(steps[currentStep]);
  }
});