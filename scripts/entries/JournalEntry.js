export const Entry = (entry) => {
    return `
        <section>
            <div class="date line">${entry.date}</div>
            <h4 class="subject line">${entry.subject}</h4>
            <div class="entry line">${entry.entry}</div>
            <div class="mood line">Mood: ${entry.mood}</div>
        </section>
    `
}