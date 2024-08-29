import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Selected from './components/Selected';
import AllOrders from './components/AllOrders';
import DashboardLogin from './backend/backendcomponents/DashboardLogin';
import DeshboardHome from './backend/backendcomponents/DeshboardHome';
import AddNewCaregories from './backend/backendpages/addpages/AddNewCaregories';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/selected" element={<Selected></Selected>} />
          <Route path="/oreders" element={<AllOrders></AllOrders>} />
          <Route path="/dashboardlogin" element={<DashboardLogin></DashboardLogin>} />
          <Route path="/dashboardhome" element={<DeshboardHome></DeshboardHome>} />
          <Route path='/addnewcaregories' element={<AddNewCaregories></AddNewCaregories>}></Route>
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
