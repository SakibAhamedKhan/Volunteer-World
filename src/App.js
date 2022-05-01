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
import Events from './Pages/Events/Events/Events';
import Blog from './Pages/Blog/Blog';
import Donation from './Pages/Donation/Donation';
import AdminHome from './Pages/Admin/AdminHome/AdminHome/AdminHome';
import AdminAllEvents from './Pages/Admin/AdminAllEvents/AdminAllEvents';
import AdminAddEvent from './Pages/Admin/AdminAddEvent/AdminAddEvent';
import RequireAuthUser from './Pages/LoginReg/RequireAuthUser/RequireAuthUser';
import RequireAuthAdmin from './Pages/LoginReg/RequireAuthAdmin/RequireAuthAdmin';

function App() {
  return (
    <div>
      <Routes>

        {/* User */}
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/user' element={
          <RequireAuthUser>
            <UserProfile></UserProfile>
          </RequireAuthUser>
        }></Route>
        <Route path='/eventDetails/:eventId' element={<HomeEventDetails></HomeEventDetails>}></Route>
        <Route path='/events' element={
          <RequireAuthUser>
            <Events></Events>
          </RequireAuthUser>
        }></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/donation' element={
          <RequireAuthUser>
            <Donation></Donation>
          </RequireAuthUser>
        }></Route>

        {/* Admin */}
        <Route path='/adminHome' element={
          <RequireAuthAdmin>
            <AdminHome></AdminHome>
          </RequireAuthAdmin>
        }></Route>
        <Route path='/adminAllEvent' element={
          <RequireAuthAdmin>
            <AdminAllEvents></AdminAllEvents>
          </RequireAuthAdmin>
        }></Route>
        <Route path='/adminAddEvent' element={
          <RequireAuthAdmin>
            <AdminAddEvent></AdminAddEvent>
          </RequireAuthAdmin>
        }></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
