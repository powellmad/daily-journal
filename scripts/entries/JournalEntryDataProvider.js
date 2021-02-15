const Entries = [
    {
        id: 1,
        date: "01/29/2021",
        subject: "Dynamically Populating",
        entry: "We went over dynamically populating data on the DOM using javascript",
        mood: "Optimistic"
    },
    {
        id: 2,
        date: "02/01/2021",
        subject: "Event Listeners",
        entry: "Learned how to access a local API on a button click. Event listeners are tricky business.",
        mood: "Fine"
    },
    {
        id: 3,
        date: "02/15/2021",
        subject: "One to Many Relationships",
        entry: "Entity Relationship Diagrams, or ERDs, outline the relationships in the data structure. A one to many relationship is what we are starting with.",
        mood: "Confident"
    }
]

export const useJournalEntries = () => {
    const useEntries = Entries.slice()
    const sortedByDate = useEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(reponse = response.json())
        .then(parsedEntries => {
            Entries = parsedEntries
        }
    )
}