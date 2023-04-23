import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import { About, Contact, Confirm, Education } from './Steps'
import { AppProvider } from './state'

const router = createBrowserRouter([
  { path: '/', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/education', element: <Education /> },
  { path: '/confirm', element: <Confirm /> }
])

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
