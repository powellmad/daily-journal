export const Entry = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div>${entry.date}</div>
            <h5>${entry.title}</h5>
            <div>${entry.entry}</div>
            <div>${entry.mood}</div>
        </section>
    `
}