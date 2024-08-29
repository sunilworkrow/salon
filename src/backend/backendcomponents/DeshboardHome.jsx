import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Deshboard from '../backendpages/Dashboard';
import { IoMdMenu } from "react-icons/io";
import { FaRegUserCircle } from 'react-icons/fa';
import { IoNotificationsCircleOutline } from "react-icons/io5";
import logo from './assets/logo.jpg';
import './DeshboardHome.css';
import TodayEntries from '../backendpages/TodayEntries';
import Entries from '../backendpages/Entries';
import ServicesArea from '../backendpages/ServicesArea';
import { useNavigate, useLocation } from 'react-router-dom';
import ServicesCategory from '../backendpages/ServicesCategory';
import AddNewCaregories from '../backendpages/addpages/AddNewCaregories';
import EditCaregories from '../backendpages/addpages/EditCaregories';
import Branches from '../backendpages/Branches/Branches';
import AddNewBranch from '../backendpages/Branches/AddNewBranch';

export default function DeshboardHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');
  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
 
    if (location.state && location.state.key) {
      setSelectedMenuItem(location.state.key);
    }

  }, [location.state]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
  };

  const handlelogout = () => {
    navigate('/dashboardlogin');
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'dashboard':
        return <div><Deshboard /></div>;
      case 'entries':
        return <div>Entries Content</div>;
      case 'todaysEntries':
        return <div><TodayEntries /></div>;
      case 'allEntries':
        return <div><Entries /></div>;
      case 'servicesarea':
        return <div><ServicesArea /></div>;
      case 'branches':
        return <div><Branches></Branches></div>;
      case 'addNewbranches':
        return <div><AddNewBranch></AddNewBranch></div>;
      case 'qrBuilder':
        return <div>QR Builder Content</div>;
      case 'servicesCategory':
        return <div><ServicesCategory /></div>;
        case 'addNewCategory':
          return <div><AddNewCaregories></AddNewCaregories></div>;
        case 'editCategory':
          return <div><EditCaregories></EditCaregories></div>;
      case 'allServices':
        return <div>All Services</div>;
     
      case 'report':
        return <div>Report Content</div>;
      case 'customers':
        return <div>Customers Content</div>;
      case 'staff':
        return <div>Staff Content</div>;
      case 'profile':
        return <div>Manage Profile Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="top-bar">
        <div className='workrow-logo'>
          <div>
            <img style={{ 'width': '156px' }} src={logo} alt="" />
          </div>
          <button className="menu-button" onClick={toggleSidebar}><IoMdMenu /></button>
        </div>
        <div className="top-bar-right d-flex align-items-center">
          <div className="icon" style={{ 'fontSize': '28px' }}><IoNotificationsCircleOutline /></div>
          <div className="icon" onClick={() => setOpenProfile((prev) => !prev)}><FaRegUserCircle /></div>
        </div>

        {
          openProfile &&
          <div className='profile-drop-down'>
            <ul>
              <li><span className="profile-drop-item">Profile</span></li>
              <li><span className="profile-drop-item">Settings</span></li>
              <li><span className="profile-drop-item" onClick={handlelogout}>logout</span></li>
            </ul>
          </div>
        }

      </div>
      <Sidebar isOpen={isSidebarOpen} onMenuItemClick={handleMenuItemClick} />
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
}
