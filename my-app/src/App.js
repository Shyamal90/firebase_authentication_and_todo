import './App.css';
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import {UserAuthContextProvider} from './context/UserAuthContext'
import Home from './components/Home/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
