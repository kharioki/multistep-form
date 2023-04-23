import { useRef } from 'react'
import {
  createBrowserRouter,
  RouterProvider, 
  Outlet
} from 'react-router-dom'
import { About, Contact, Confirm, Education } from './Steps'
import { AppProvider } from './state'
import { Stepper } from './Steps/Stepper'
import { Home } from './Home'

function App() {
  const buttonRef = useRef()

  const onStepChange = () => {
    buttonRef.current?.click()
  }

  const router = createBrowserRouter([
    {
      element: (
        <>
          <Stepper onStepChange={onStepChange} />
          <Outlet />
        </>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/contact', element: <Contact ref={buttonRef} /> },
        { path: '/about', element: <About ref={buttonRef}/> },
        { path: '/education', element: <Education ref={buttonRef} /> },
        { path: '/confirm', element: <Confirm ref={buttonRef} /> }
      ],
    },
  ])

  return (
    <div className="App">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  )
}

export default App
