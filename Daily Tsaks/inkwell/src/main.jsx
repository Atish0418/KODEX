import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { BlogProvider } from './context/BlogContext.jsx'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <BlogProvider>
        <AppRoutes />
        <ToastContainer/>
    </BlogProvider>
)
