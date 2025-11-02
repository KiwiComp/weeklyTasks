import { useState } from "react";



function AddDayToast({task, onDone, onCancel}) {

    if (!task) return null;
    
    const [addDay, setAddDay] = useState("");
    const weekDays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

    return(
    <section className="addDayToast">
        <section className="toastContent">
            
            <p><strong>{task.name}</strong> utfördes:</p>

            <select
                className="dayPicker"
                value={addDay}
                onChange={(event) => setAddDay(event.target.value)}
            >
                <option value="">-- Välj en dag --</option>
                {weekDays.map((day) => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>


            <article className='toastBtns'>
                <button onClick={() => onDone(task, addDay)} className='dayToastConfirmBtn'>Spara</button>
                <button onClick={onCancel} className='dayToastCancelBtn'>Avbryt</button>
            </article>
        </section>

    </section>
    )
}

export default AddDayToast;