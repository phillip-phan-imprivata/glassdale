import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

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
    .then(getCriminals)
    .then(() => {
        const allCriminals = useCriminals()
        const allNotes = useNotes()
        render(allNotes, allCriminals)
    })
}

const render = (noteArray, criminalArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
          const relatedCriminal = criminalArray.find(criminal => criminal.id === parseInt(noteObject.criminalId))

          return NoteHTMLConverter(noteObject, relatedCriminal)
        }).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})
