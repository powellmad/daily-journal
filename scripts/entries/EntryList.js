import { useJournalEntries, getEntries, deleteEntry } from "./EntryDataProvider.js"
import { Entry } from "./Entry.js"

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".containerLeft")

eventHub.addEventListener("entryStateChanged", event => {
    EntryList()
})

export const EntryList = () => {
    getEntries()
    .then(() => {
        const entryCollection = useJournalEntries()
        let HTMLRep = ""
        for (const entryObj of entryCollection) {
            HTMLRep += Entry(entryObj)
        }
    entryLog.innerHTML = `
        <div class="entryLog">
            <h2>My Journal Entries</h2>
            ${HTMLRep}
        </div>`
    }) 
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteButton--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
    
        console.log("I deleted my entry")
        deleteEntry(parseInt(id))
    }
})