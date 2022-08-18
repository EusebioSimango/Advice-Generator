const nextAdviceEl = window.document.getElementById("nextAdvice")


const renderAdvice = (advice) => {
  const adviceMessageEl = window.document.getElementById("adviceMessage")
  const adviceIdEl = window.document.getElementById("adviceId")

  adviceIdEl.innerText = advice.id
  adviceMessageEl.innerHTML = `"${advice.advice}"`
}

const fetchAdvice = () => {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(json => json.slip)
  .then(advice => {
    renderAdvice(advice)
  }).catch(error => console.error(error))
}

fetchAdvice()


const sortAdvice = async () => {
  nextAdviceEl.firstElementChild.classList.add("spin")
  setTimeout(() => {
    nextAdviceEl.firstElementChild.classList.remove("spin")
  }, 700)
  fetchAdvice()

}

nextAdviceEl.addEventListener("click", sortAdvice)