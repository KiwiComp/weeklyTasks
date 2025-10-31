import { createSlice } from "@reduxjs/toolkit"


const loadTasksFromLocalStorage = () => {
    try {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
        console.error("Could not fetch tasks from local storage: ", error);
        return [];
    }
}

const saveTasksToLocalStorage = (tasks) => {
    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        console.error("Could not save tasks to local storage: ", error);
    }
}


const initialState = {
    tasks : loadTasksFromLocalStorage()
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = action.payload;

            // Är detta ens nödvändigt om jag bara vill kunna lägga till vad som helst?
            const exisitingTask = state.tasks.find(task => task.id === newTask.id);
            if(!exisitingTask) {
                state.tasks.push(newTask);
            } else {
                // Vad ska jag göra här? Skicka notis om att det redan finns en med detta id?
            }

            saveTasksToLocalStorage(state.tasks);
        },

        deleteTask: (state, action) => {
            const taskToRemove = action.payload;
            const existingTask = state.tasks.find(task => task.id === taskToRemove.id);

            if(existingTask) {
                state.tasks = state.tasks.filter(task => task.id !== existingTask.id);
            }

            saveTasksToLocalStorage(state.tasks);
        },

        deleteAllTasks: (state) => {
            state.tasks = [];
            saveTasksToLocalStorage(state.tasks);
        },

        toggleDone: (state, action) => {
            const taskToEdit = action.payload;
            const foundTask = state.tasks.find(task => task.id === taskToEdit.id);

            if(foundTask) {
                foundTask.isDone = !foundTask.isDone
            }
            
            saveTasksToLocalStorage(state.tasks);
        },

        markAllTasks: (state) => {
            state.tasks.map((task) => {
                task.isDone = true
            })

            saveTasksToLocalStorage(state.tasks);
        },

        unmarkAllTasks: (state) => {
            state.tasks.map((task) => {
                task.isDone = false
            })

            saveTasksToLocalStorage(state.tasks);
        }
    }
})

export const {addTask, deleteTask, toggleDone, markAllTasks, unmarkAllTasks, deleteAllTasks} = tasksSlice.actions;
export default tasksSlice.reducer;