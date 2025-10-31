import { useDispatch } from "react-redux";
import { markAllTasks, unmarkAllTasks } from '../../../features/tasksSlice';


function StartPageBtnsComponent() {
    const dispatch = useDispatch()

    return(
        <section className='startPageButtons'>
            <button className="startPageBtnUnmarkAll" onClick={() => dispatch(unmarkAllTasks())}>
                Avmarkera alla
            </button>
            <button className="startPageBtnMarkAll" onClick={() => dispatch(markAllTasks())}>
                Markera alla
            </button>
        </section>
    )
}

export default StartPageBtnsComponent;