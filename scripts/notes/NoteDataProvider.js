let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const useNotes = () => {
    return notes.slice()
}

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const saveNote = note => {
    let stringifiedObj = JSON.stringify(note)
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getNotes) // fetch the notes collection containing the newly added note
    .then(dispatchStateChangeEvent) // tell any component listening that the notes state has been updated
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}
