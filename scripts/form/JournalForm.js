const eventHub = document.querySelector(".container")

const renderForm = () => {
        return `<article>
        <p>Madison Powell</p>    
        <input type="date" id="entry-date">
            <h2 class="newTitle">New Journal Entry</h2>
            <form>
                <fieldset>
                    <label class="newEntryLabel" for="entry-subject">Title:</label>
                    <input type="text" id="entry-subject" name="subject" placeholder="
                    Main Idea/Concepts Covered">
                </fieldset>
                <fieldset>
                    <label class="newEntryLabel" for="entry-entry">New Entry:</label>
                    <textarea cols="20" rows="20" name="entry" id="entry-entry" placeholder="
                    Begin New Entry..."></textarea>
                </fieldset>

                <fieldset>
                    <label for="entry-mood">Current Mood:</label>
                    <select name="mood" id="entrymood">
                        <option value="Confident">Confident</option>
                        <option value="Optimistic">Optimistic</option>
                        <option value="Fine">Fine</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Struggling">Struggling</option>
                    </select>
                </fieldset>
                <fieldset class="buttonLocation">
                <button type='button' id='saveButton'>Record Entry</button>
                </fieldset>
            </form>
    </article> `
}

export const EntryForm = () => {
    renderForm()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        console.log("I saved my entry")
        const date = document.getElementById("entry-date").value
        const subject = document.getElementById("entry-subject").value
        const entry = document.getElementById("entry-entry").value
        const mood = document.getElementById("entry-mood").value
        
        const newEntry = {
            date: date,
            subject: subject,
            entry: entry,
            mood: mood
        }
        saveNote(newEntry)
    }
})