const contentTarget = document.querySelector(".witnessListButton")
const eventHub = document.querySelector(".container")

export const ShowWitnessButton = () => {
  contentTarget.innerHTML = "<button id='showWitnesses'>Witness Statements</button"
}

eventHub.addEventListener("click", e => {
  if (e.target.id === "showWitnesses") {
    if (e.target.innerHTML === "Witness Statements") {
      const customEvent = new CustomEvent("witnessButtonClick")
      eventHub.dispatchEvent(customEvent)
      
      e.target.innerHTML = "Criminal List"
    } else if (e.target.innerHTML === "Criminal List") {
      const customEvent = new CustomEvent("criminalButtonClick")
      eventHub.dispatchEvent(customEvent)

      e.target.innerHTML = "Witness Statements"
    }
  }
})