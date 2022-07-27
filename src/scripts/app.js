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
  })
}

fetchAdvice()




const sortAdvice = () => {
  fetchAdvice()
}

nextAdviceEl.addEventListener("click", sortAdvice)