import { useDispatch } from "react-redux";
import { unmarkAllTasks } from '../../../features/tasksSlice';


function StartPageBtnsComponent() {
    const dispatch = useDispatch()

    return(
        <section className='startPageButtons'>
            <button className="startPageBtnUnmarkAll" onClick={() => dispatch(unmarkAllTasks())}>
                Avmarkera alla
            </button>
            {/* Funkar inte med nya att lägga till en dag. */}
            {/* <button className="startPageBtnMarkAll" onClick={() => dispatch(markAllTasks())}>
                Markera alla
            </button> */}
        </section>
    )
}

export default StartPageBtnsComponent;