import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './pages/Home/Home'
import { ScaleLoader } from 'react-spinners'


// Lazy-load pages
const Auth = lazy(() => import('./pages/Auth/Auth'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
const CreatePatient = lazy(() => import('./pages/CreatePatient/CreatePatient'))
const ListPatient = lazy(() => import('./pages/ListPatient/ListPatient'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

function LoadingFallback() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ScaleLoader 
        color="#4A90E2" 
        height={50}
        width={5}
        radius={2}
        margin={2}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-patient" element={<CreatePatient />} />
          <Route path="/list-patient" element={<ListPatient />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App