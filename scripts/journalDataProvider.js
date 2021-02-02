const journal = [
    {
        id: 1,
        date: "01/29/2021",
        title: "Dynamically Populating",
        entry: "We went over dynamically populating data on the DOM using javascript",
        mood: "Optimistic"
    },
    {
        id: 2,
        date: "02/01/2021",
        title: "Event Listeners",
        entry: "Learned how to access a local API on a button click. Event listeners are tricky business.",
        mood: "Optimistic"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}