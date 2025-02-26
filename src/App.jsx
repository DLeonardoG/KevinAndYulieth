import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { useUser } from './UserContext';
import { Login } from './Components/Login';
import { Invitation } from './Components/Invitation';
import { Welcome } from './Components/Welcome';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/guest/:id" element={<Invitation />} />
          <Route path="/" element={<Navigate to="/guest/0" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

// Componente para rutas protegidas
const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" replace />;
};

export default App;