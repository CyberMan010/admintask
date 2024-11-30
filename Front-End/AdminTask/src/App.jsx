import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DashboardLayout } from './components/Layout/DashboardLayout'
import Users from './pages/Users'
import Roles from './pages/Roles'
import Permissions from './pages/Permissions'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
