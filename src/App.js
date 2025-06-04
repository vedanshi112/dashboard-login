import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import App1 from './component/dashboard';
import LoginForm from './component/loginform';
import ProtectedRoute from './component/ProtectedRoute';
// import ProtectedRoute from './component/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute>
              <App1/>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
