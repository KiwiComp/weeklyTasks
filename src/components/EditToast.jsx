import { useState } from "react";



function EditToast({task, onDone, onCancel}) {

    if (!task) return null;

    const [editTaskName, setEditTaskName] = useState(task.name);

    return(
    <section className="editToast">
        <section className="toastContent">
            <input 
                className="editField"
                type="text" 
                value={editTaskName}
                onChange={(event) => {
                    const value = event.target.value;
                    const capitalised = value.charAt(0).toUpperCase() + value.slice(1);
                    setEditTaskName(capitalised)
                }}
                />

                <article className='toastBtns'>
                    <button onClick={() => onDone(editTaskName)} className='editToastConfirmBtn'>Spara</button>
                    <button onClick={onCancel} className='editToastCancelBtn'>Avbryt</button>
                </article>
        </section>

    </section>
    )
}

export default EditToast;