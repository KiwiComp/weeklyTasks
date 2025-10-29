import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import StartPage from './pages/StartPage/StartPage.jsx'
import CalendarPage from './pages/CalendarPage/CalendarPage.jsx'
import AddTasksPage from './pages/AddTasksPage/AddTasksPage.jsx'
import { configureStore } from '@reduxjs/toolkit'
import tasksSliceReducers from './features/tasksSlice.js'
import { Provider } from 'react-redux'


const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: StartPage},
      {path: "/calendar", Component: CalendarPage},
      {path: "/addTask", Component: AddTasksPage}
    ]
  }
])

const store = configureStore({
  reducer: {
    task: tasksSliceReducers
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
