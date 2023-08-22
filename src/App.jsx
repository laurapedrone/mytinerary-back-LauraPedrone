import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomeM from './pages/Home/HomeM'
import LayoutMain from './pages/Layout/LayoutMain'
import Cities from './pages/Cities/Cities'
import CityDetail from './components/CityDetail/CityDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <HomeM />
      },
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '/citydetail',
        element: <CityDetail />
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
