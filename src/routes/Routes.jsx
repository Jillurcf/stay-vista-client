import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoutes from './PrivateRoutes'
import { getRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DaashBoardLayout'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListing from '../pages/Dashboard/Host/MyListing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'room/:id',
        element: <PrivateRoutes><RoomDetails></RoomDetails></PrivateRoutes>,
        loader: ({params})=> getRoom(params.id)
        
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {path: '/dashboard', 
  element: <DashboardLayout></DashboardLayout>, 
  children: [
    {
      path: 'add-room',
      element: <AddRoom></AddRoom>
    },
    {
      path: 'my-listings',
      element: <MyListing></MyListing>
    }
  ]}
])
