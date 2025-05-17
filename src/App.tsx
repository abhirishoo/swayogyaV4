import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/login" 
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginPage />
          )
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          isAuthenticated ? (
            <DashboardPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
    </Routes>
  );
}

export default App;