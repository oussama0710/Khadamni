import './App.css';
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login';
// import Chats from './pages/Chats';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
      <Routes>
      <Route path='/register' element={ <Register /> }/>
      <Route path='/login' element={ <Login /> }/>
      <Route path='/' element={ <Home /> }/>
      {/* <Route path='/' element={ <Chats/> }/> */}
      </Routes>
    </div>
  );
}

export default App;
