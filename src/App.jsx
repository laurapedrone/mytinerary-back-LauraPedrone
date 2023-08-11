import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomeM from './pages/Home/HomeM'
import LayoutMain from './pages/Layout/LayoutMain'
import Cities from './pages/Cities/Cities'

const router = createBrowserRouter([
  {
    path:'/',
    element: <LayoutMain/>,
    children: [
      {
      path:'/',
      element: <HomeM/>
      },
      {
        path: '/cities',
        element: <Cities/>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
