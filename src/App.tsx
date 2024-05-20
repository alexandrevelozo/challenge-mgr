import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ExerciseOne from './pages/ExerciseOne'
import ExerciseTwo from './pages/ExerciseTwo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/exercise-one', element: <ExerciseOne /> },
      { path: '/exercise-two', element: <ExerciseTwo /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
