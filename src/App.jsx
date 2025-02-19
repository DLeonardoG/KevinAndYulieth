import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { useUser } from './UserContext';
import { Login } from './Components/Login';
import { Welcome } from './Components/Welcome'; // Crea este componente para la pantalla de bienvenida

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Navigate to="/login" replace />} />
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