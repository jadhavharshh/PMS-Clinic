import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePatient from './pages/CreatePatient/CreatePatient'
import ListPatient from './pages/ListPatient/ListPatient'
import NotFound from './pages/NotFound/NotFound'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-patient" element={<CreatePatient />} />
        <Route path="/list-patient" element={<ListPatient />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App