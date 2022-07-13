const adviceMessageEl = window.document.getElementById("adviceMessage")
const adviceIdEl = window.document.getElementById("adviceId")
const nextAdviceEl = window.document.getElementById("nextAdvice")

const advice = {
  id: "001",
  text: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
}

adviceIdEl.innerText = advice.id
adviceMessageEl.innerHTML = `"${advice.text}"`

const sortAdvice = () => {
  const advice = {
    id: `002`,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  }

  adviceIdEl.innerText = advice.id
  adviceMessageEl.innerHTML = `"${advice.text}"`
}

nextAdviceEl.addEventListener("click", sortAdvice)