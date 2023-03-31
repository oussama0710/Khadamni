import './App.css';
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/" element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
