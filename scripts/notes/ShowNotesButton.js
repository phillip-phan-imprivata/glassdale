const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("notesButtonClicked", e => {
    document.getElementById("showNotes").innerHTML === "Show Notes" ? document.getElementById("showNotes").innerHTML = "Hide Notes" : document.getElementById("showNotes").innerHTML = "Show Notes"
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}