import { saveEntry } from "../entries/EntryDataProvider.js"
import { useMoods, getMoods } from "../moods/moodProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".containerRight")

const renderForm = (moodArray) => {
        debugger
        contentTarget.innerHTML = `<article>
        <p>Madison Powell</p>    
        <input type="date" id="entry-date">
            <h2 class="newTitle">New Journal Entry</h2>
            <form id="newEntryForm">
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
                    <select name="" id="entry-mood">
                        <option value="0">Select Mood...</option>
                        ${moodArray.map(mood => `<option value="${mood.id}">${mood.label}</option>`)}.join("")
                    </select>
                </fieldset>
                <fieldset class="buttonLocation">
                <button type='button' id='saveButton'>Record Entry</button>
                </fieldset>
            </form>
    </article> `
}

export const EntryForm = () => {
    getMoods()
    .then(() => {
        const moodArray = useMoods()
        return renderForm(moodArray)
    })
}

eventHub.addEventListener("click", clickEvent => {
    const form = document.querySelector("#newEntryForm")
    if (clickEvent.target.id === "saveButton") {
        console.log("I saved my entry")
        const date = document.getElementById("entry-date").value
        const subject = document.getElementById("entry-subject").value
        const entry = document.getElementById("entry-entry").value
        const moodId = document.getElementById("entry-mood").value
        
        const newEntry = {
            date: date,
            subject: subject,
            entry: entry,
            moodId: parseInt(moodId)
        }
        saveEntry(newEntry)
        form.reset()
    }
})