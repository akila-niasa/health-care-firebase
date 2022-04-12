import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AllServices from './components/AllServices/AllServices';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './components/OurTeam/OurTeam';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AllServicesDetails from './components/AllServicesDetails/AllServicesDetails';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/allServices' element={<AllServices/>}/>
       
       <Route path='/login' element={<Login/>}/>
      
       <Route path='/register' element={<Register/>}/>
       <Route path='/our-team' element={<RequireAuth>
        <OurTeam/>
       </RequireAuth>}/>
       <Route path='/service-details/:id' element={<RequireAuth>
        <ServiceDetails/>
       </RequireAuth>}/>
      
     </Routes>
    </div>
  );
}

export default App;
