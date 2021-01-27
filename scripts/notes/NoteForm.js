import {saveNote} from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const newNote = {
      "timestamp": `${document.getElementById("note-timestamp").value}`,
      "author": `${document.getElementById("note-author").value}`,
      "suspect": `${document.getElementById("note-suspect").value}`,
      "text": `${document.getElementById("note-text").value}`
    }
    
    saveNote(newNote)
  }
})

export const NoteForm = () => {
  render()
}

const render = () => {
  contentTarget.innerHTML = `
    <input type="date" id="note-timestamp">
    <input type="text" id="note-author" placeholder="Author">
    <input type="text" id="note-suspect" placeholder="Suspect">
    <input type="text" id="note-text" placeholder="Notes">
    <button id="saveNote">Save Note</button>
  `
}
