import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessButtonClick", e => {
  getWitnesses()
    .then(() => {
      const witnessArr = useWitnesses()
      const witnessString = witnessArr.map(witness => {
        return Witness(witness)
      }).join("")
      contentTarget.innerHTML = witnessString
    })
})