const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(url);
  const data = await response.json();
  const { slip } = data;
  adviceText.innerText = slip.advice;
  adviceId.innerText = `Advice #${slip.id}`;
}
getAdvice(); // for the first time
adviceBtn.addEventListener("click", getAdvice);
