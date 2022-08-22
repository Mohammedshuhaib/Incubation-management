import './App.css';
import SidebarPage from './Pages/User/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './Pages/User/SignUp';
import { ToastContainer } from 'react-toastify'
import LoginPage from './Pages/User/Login';
import HomePage from './Pages/User/Dashboard';
import AdminLoginPage from './Pages/Admin/AdminLogin';
// import AdminHomePage from './Pages/Admin/AdminHome';
import DashboardPage from './Pages/User/Dashboard';

import AdminHomePage from './Pages/Admin/AdminHome';

import ApplyForIncubationPage from './Pages/User/ApplyForIncubation';
import Application from './contexts/applicationContext';
import RecordListPage from './Pages/Admin/RecordList';
import BookingSlotsPage from './Pages/Admin/BookingSlots';

function App() {
  return (
    <div>
      <Application>
        <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<SidebarPage />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/apply/incubation' element={<ApplyForIncubationPage />} />
          </Routes>
          <Routes>
            <Route path='/admin' element={<AdminHomePage />} />
            <Route path='/admin/login' element={<AdminLoginPage />} />
            <Route path='/admin/view/recordList' element={<RecordListPage />} />
            <Route path='/admin/view/bookingSlots' element={<BookingSlotsPage />} />
          </Routes>
        </BrowserRouter>

        <ToastContainer />
      </Application>

    </div>
  );
}


// kjykjhkjhlkkj

export default App;
