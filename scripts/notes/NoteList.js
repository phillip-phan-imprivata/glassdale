import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    if (contentTarget.innerHTML === "") {
        NoteList()
    } else if (contentTarget.innerHTML !== "") {
        contentTarget.innerHTML = ""
    }
    const notesButtonClicked = new CustomEvent("notesButtonClicked")
    eventHub.dispatchEvent(notesButtonClicked)
})

eventHub.addEventListener("noteStateChanged", e => {
    if (contentTarget !== "") {
        NoteList()
    }
})

export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
      noteObject => NoteHTMLConverter(noteObject)).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}
