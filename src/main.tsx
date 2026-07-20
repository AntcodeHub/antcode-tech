import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/footer/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Services = lazy(() => import('./pages/Services/Services'))
const Solutions = lazy(() => import('./pages/Solutions/Solutions'))
const Industries = lazy(() => import('./pages/Industries/Industries'))
const Community = lazy(() => import('./pages/Community/Community'))
const Academy = lazy(() => import('./pages/Academy/Academy'))
const Technology = lazy(() => import('./pages/Technology/Technology'))
const OpenSource = lazy(() => import('./pages/OpenSource/OpenSource'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'))
const CaseStudies = lazy(() => import('./pages/CaseStudies/CaseStudies'))
const Events = lazy(() => import('./pages/Events/Events'))
const Blog = lazy(() => import('./pages/Blog/Blog'))
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'))
const Resources = lazy(() => import('./pages/Resources/Resources'))
const Careers = lazy(() => import('./pages/Careers/Careers'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

const PageLoader = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Loading</span>
    </div>
  </div>
)

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-dark-bg selection:bg-primary selection:text-white">
    <Navbar />
    <main className="flex-grow">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />

    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
      <div className="container-custom h-full flex justify-between">
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
      </div>
    </div>
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
      { path: 'solutions', element: <Solutions /> },
      { path: 'industries', element: <Industries /> },
      { path: 'community', element: <Community /> },
      { path: 'academy', element: <Academy /> },
      { path: 'technology', element: <Technology /> },
      { path: 'open-source', element: <OpenSource /> },
      { path: 'projects', element: <Projects /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'events', element: <Events /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogPost /> },
      { path: 'resources', element: <Resources /> },
      { path: 'careers', element: <Careers /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
