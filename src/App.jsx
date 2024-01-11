import { Route, Routes} from 'react-router-dom'
import Navbar from './components/navs/Navbar.jsx'
import { NavbarProvider } from './context/navbarContext.jsx'
import { CardProvider } from './context/cardContext.jsx'
import { Suspense, lazy } from 'react'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyEditorPage = lazy(() => import('./pages/Editor.jsx'))
const Lazy404Page = lazy(() => import('./pages/Page404.jsx'))


function App() {
  return (
    <div className='d-flex flex-column h-100'>
      <NavbarProvider>
        <Navbar />
        <CardProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<LazyHomePage />} />
              <Route path="/editor" element={<LazyEditorPage />} />
              <Route path="*" element={<Lazy404Page />} />
            </Routes>
        </Suspense>
        </CardProvider>
      </NavbarProvider>
    </div>
  )
}

export default App
