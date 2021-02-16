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

export const saveEntry = (entry) => {
    let stringifiedObj = JSON.stringify(entry)

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

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}