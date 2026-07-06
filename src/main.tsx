import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/footer/Footer'

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Services = lazy(() => import('./pages/Services/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing'))
const Contact = lazy(() => import('./pages/Contact/Contact'))

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-dark-bg">
    <Navbar />
    <main className="flex-grow pt-[80px]">
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { 
        path: '*', 
        element: <div className="py-20 text-center text-white"><h1>404 Not Found</h1></div> 
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
