const contentTarget = document.querySelector(".containerRight")

const Form = () => {
        return `<article>
        <p>Madison Powell</p>    
        <input type="date">
            <h2 class="newTitle">New Journal Entry</h2>
            <form>
                <fieldset>
                    <label class="newEntryLabel" for="title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="
                    Main Idea/Concepts Covered">
                </fieldset>
                <fieldset>
                    <label class="newEntryLabel" for="entry">New Entry:</label>
                    <textarea cols="20" rows="20" name="entry" placeholder="
                    Begin New Entry..."></textarea>
                </fieldset>

                <fieldset>
                    <label for="mood">Current Mood:</label>
                    <select name="mood" id="mood">
                        <option value="Confident">Confident</option>
                        <option value="Optimistic">Optimistic</option>
                        <option value="Fine">Fine</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Struggling">Struggling</option>
                    </select>
                </fieldset>
                <fieldset>
                    <button type="button">Record Entry</button>
                </fieldset>
            </form>
    </article> `
}

const render = (journalForm) => {
    contentTarget.innerHTML = `${journalForm}`
}

const form = Form()
export const FormList = () => render(form)