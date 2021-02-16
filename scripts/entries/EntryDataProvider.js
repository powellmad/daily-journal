let Entries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const newEntryEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(newEntryEvent)
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(parsedEntries => {
            Entries = parsedEntries
        }
    )
}

export const useJournalEntries = () => {
    const useEntries = Entries.slice()
    const sortedByDate = useEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const saveNote = note => {
    let stringifiedObj = JSON.stringify(note)

    return fetch("http://localhost:8088/entries", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const deleteNote = entryId => {
    return fetch(`http://localhost:8088/notes/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
}