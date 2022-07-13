const adviceMessageEl = window.document.getElementById("adviceMessage")
const adviceIdEl = window.document.getElementById("adviceId")

const advice = {
  id: "001",
  text: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
}

adviceIdEl.innerText = advice.id
adviceMessageEl.innerHTML = `"${advice.text}"`
