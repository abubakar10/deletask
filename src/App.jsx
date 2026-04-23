import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import BrowseTasksPage from './pages/BrowseTasksPage'
import ForTaskersPage from './pages/ForTaskersPage'
import FaqPage from './pages/FaqPage'
import NotFoundPage from './pages/NotFoundPage'

const baseUrl = import.meta.env.BASE_URL ?? '/'
const routerBasename = baseUrl === '/' ? undefined : baseUrl.replace(/\/$/, '')

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PageLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'browse', element: <BrowseTasksPage /> },
        { path: 'how-it-works', element: <HowItWorksPage /> },
        { path: 'for-taskers', element: <ForTaskersPage /> },
        { path: 'faq', element: <FaqPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SignupPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  routerBasename ? { basename: routerBasename } : {},
)

function App() {
  return <RouterProvider router={router} />
}

export default App
