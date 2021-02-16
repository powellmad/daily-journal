export const EntryHTMLConverter = (entryObj) => {
    return `
        <section>
            <div class="date line">${entryObj.date}</div>
            <h4 class="subject line">${entryObj.subject}</h4>
            <div class="entry line">${entryObj.entry}</div>
            <div class="mood line">Mood: ${entryObj.mood}</div>
        </section>
    `
}