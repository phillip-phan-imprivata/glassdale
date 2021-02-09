import {saveNote} from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const newNote = {
      "timestamp": `${document.getElementById("note-timestamp").value}`,
      "author": `${document.getElementById("note-author").value}`,
      "criminalId": `${document.getElementById("note-suspect").value}`,
      "text": `${document.getElementById("note-text").value}`
    }
    
    saveNote(newNote)
  }
})

export const NoteForm = () => {
  getCriminals().then(() => {
    const criminalList = useCriminals()
    render(criminalList)
  })
}

const render = (criminalList) => {
  contentTarget.innerHTML = `
    <input type="date" id="note-timestamp">
    <input type="text" id="note-author" placeholder="Author">
    <select id="note-suspect" class="criminalSelect">
      <option value="0" class="criminalSelect">Suspect</option>
      ${criminalList.map(criminal => {
        return `<option value="${criminal.id}" class="criminalSelect">${criminal.name}</option>`
      }).join("")}
    </select>
    <input type="text" id="note-text" placeholder="Notes">
    <button id="saveNote">Save Note</button>
  `
}
