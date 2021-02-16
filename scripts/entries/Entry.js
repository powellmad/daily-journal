export const Entry = (entryObj) => {
    return `
        <section class="entry">
            <div class="date line">${entryObj.date}</div>
            <h4 class="subject line">${entryObj.subject}</h4>
            <div class="entry line">${entryObj.entry}</div>
            <div class="mood line">Mood: ${entryObj.mood}</div>
            <button type='button' id='deleteButton--${entryObj.id}'>Delete</button>
        </section>
    `
}