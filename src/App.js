import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import AdminLogin from './Pages/LoginReg/AdminLogin/AdminLogin';
import Login from './Pages/LoginReg/Login/Login';
import Register from './Pages/LoginReg/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
