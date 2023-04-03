import './App.css';
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login';
import Chats from './pages/Chats';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
