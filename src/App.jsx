import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Login/Contact/Contact';
import Name from './components/Login/Name/Name';
import Password from './components/Login/Password/Password';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
     <h1>App</h1>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}>
          <Route path='contact' element={<Contact/>}/>
          <Route path='name' element={<Name/>}/>
          <Route path='password' element={<Password/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
