import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import HomeEventDetails from './Pages/HomeEventDetails/HomeEventDetails/HomeEventDetails';
import AdminLogin from './Pages/LoginReg/AdminLogin/AdminLogin';
import Login from './Pages/LoginReg/Login/Login';
import Register from './Pages/LoginReg/Register/Register';
import UserProfile from './Pages/UserProfile/UserProfile/UserProfile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/user' element={<UserProfile></UserProfile>}></Route>
        <Route path='/eventDetails/:eventId' element={<HomeEventDetails></HomeEventDetails>}></Route>
      </Routes>
      
      <ToastContainer />
    </div>
  );
}

export default App;
