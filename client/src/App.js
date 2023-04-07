import './App.css';
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login';
import Chats from './pages/Chats';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Services from './components/Services';
import AddService from './components/AddService';
import Footer from './components/Footer';
import ShowCategory from './pages/ShowCategory';
import ShowCategories from './components/ShowCategories'
function App() {
  return (
    <div className="App" style={{backgroundColor:'#e8eaf6'}}>
      {localStorage.getItem('chat-app-user')?<NavBar />:<></>}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/category/:category' element={<ShowCategory />} />
        <Route path='dashboard' element={<Dashboard />}>
          {/* <Route path='services/:category' element={<Services />} /> */}
          <Route path='add' element={<AddService />} />
        </Route>
        <Route path='/services/:category' element={<Services/>} />
      </Routes>
      {localStorage.getItem('chat-app-user')?<Footer/>:<></>}
      
    </div>
  );
}

export default App;
