import { useJournalEntries, getEntries, deleteNote } from "./EntryDataProvider.js"
import { EntryHTMLConverter } from "./Entry.js"

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".containerLeft")

eventHub.addEventListener ("entryStateChanged", event => {
    const allEntries = useJournalEntries()
    render(allEntries)
})

const renderEntries = (entry) => {
    entryLog.innerHTML = `
        <div class="entryLog">
            <h2>My Journal Entries</h2>
            ${entry}
        </div>`
    return EntryHTMLConverter(entry)
}

export const EntryList = () => {
    getEntries()
    .then(() => {
        const allNotes = useJournalEntries()
        renderEntries(allNotes)
    }) 
}