import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { useUser } from './UserContext';
import { Invitation } from './Components/Invitation';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/:id" element={<Invitation />} />
          <Route path="/" element={<Navigate to="/invitado" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}


const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" replace />;
};

export default App;