import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { archiveWeeklyTasks } from "../features/tasksSlice";



function useWeeklyReset() {
    const dispatch = useDispatch();

    useEffect(() => {
        const checkIfNewWeek = () => {
            const lastReset = localStorage.getItem("lastResetDate");
            const today = new Date();
            const day = today.getDay(); //Söndag = 0.

            if (day === 1 && lastReset !== today.toDateString()) {
                dispatch(archiveWeeklyTasks());
                localStorage.setItem("lastResetDate", today.toDateString());
            }
        }

        checkIfNewWeek();

        // Kan lägga in intervall i framtiden. Just nu räcker det med att det renderas om vid uppdatering.

    }, [dispatch])
}

export default useWeeklyReset;