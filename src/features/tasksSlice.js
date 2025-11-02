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

const loadPreviousWeeksFromLocalStorage = () => {
    try {
        const savedTasks = localStorage.getItem("previousTasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
        console.error("Could not fetch previous weeks' tasks from local storage: ", error);
        return [];
    }
}

const savePreviousWeeksToLocalStorage = (previousWeek) => {
    try {
        localStorage.setItem("previousTasks", JSON.stringify(previousWeek));
    } catch (error) {
        console.error("Could not save previous week's task to local storage: ", error);
    }
}

const getWeekNumber = (date)  => {
  const d = new Date(date.getTime());
  d.setHours(0, 0, 0, 0);

  // Justera till torsdag i samma vecka för ISO-standarden
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));

  const week1 = new Date(d.getFullYear(), 0, 4); // 4 januari är alltid i vecka 1
  const weekNumber = 1 + Math.round(((d - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);

  return weekNumber;
}



const initialState = {
    tasks : loadTasksFromLocalStorage(),
    tasksPreviousWeeks : loadPreviousWeeksFromLocalStorage()
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

        editTask: (state, action) => {
            const editedTask = action.payload;
            const exisitingTask = state.tasks.find(task => task.id === editedTask.id);

            if(exisitingTask) {
                exisitingTask.name = editedTask.name;
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
                task.day = null
            })

            saveTasksToLocalStorage(state.tasks);
        },

        addDayToTask: (state, action) => {
            const taskToAddDay = action.payload;
            const exisitingTask = state.tasks.find(task => task.id === taskToAddDay.id);
            console.log("Day task to add day: " + taskToAddDay.day);
            console.log("Day existing task: " + exisitingTask.day);

            if(exisitingTask) {
                exisitingTask.day = taskToAddDay.day;
                console.log("Day after setting: " + exisitingTask.day);
            }

            saveTasksToLocalStorage(state.tasks);
        },

        removeDayFromTask: (state, action) => {
            const taskToRemoveDay = action.payload;
            const exisitingTask = state.tasks.find(task => task.id === taskToRemoveDay.id);
            console.log("Day task to remove day: " + taskToRemoveDay.day);
            console.log("Day existing task: " + exisitingTask.day);

            if(exisitingTask) {
                exisitingTask.day = taskToRemoveDay.day;
                console.log("Day after setting: " + exisitingTask.day);
            }

            saveTasksToLocalStorage(state.tasks);
        },

        archiveWeeklyTasks: (state) => {
            const today = new Date();
            const weekNumber = getWeekNumber(today)

            const archivedWeek = {
                weekNumber: weekNumber,
                year: today.getFullYear(),
                tasks: state.tasks.map(task => ({ ...task }))
            }
            state.tasksPreviousWeeks.push(archivedWeek);

            state.tasks.map((task) => {
                task.isDone = false
                task.day = null
            })

            saveTasksToLocalStorage(state.tasks);
            savePreviousWeeksToLocalStorage(state.tasksPreviousWeeks);
        }
    }
})

export const {
    addTask, 
    deleteTask, 
    toggleDone, 
    markAllTasks, 
    unmarkAllTasks, 
    deleteAllTasks, 
    editTask, 
    addDayToTask, 
    removeDayFromTask, 
    archiveWeeklyTasks
} = tasksSlice.actions;

export default tasksSlice.reducer;