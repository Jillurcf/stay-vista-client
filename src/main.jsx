import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { HelmetProvider } from 'react-helmet-async'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
<AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
  </HelmetProvider>
  
)
