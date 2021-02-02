import { useJournalEntries } from "./JournalDataProvider.js"
import { Entry } from "./JournalEntry.js"

let entryHTML = ""
const buildEntryHTML = (entryArray) => {
    for (const entry of entryArray) {
        entryHTML += Entry(entry)
    }
    return entryHTML
}

const entryLog = document.querySelector(".containerLeft")
const allEntries = useJournalEntries()

export const EntryList = () => {
        buildEntryHTML(allEntries)

        entryLog.innerHTML += `
        <div class="entryLog">
            <h2>My Journal Entries</h2>
            ${entryHTML}
        </div>
        `
    
}


