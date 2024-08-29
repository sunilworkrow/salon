import React, { useState } from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { FaHamburger, FaCogs, FaCodeBranch, FaQrcode, FaServicestack, FaReceipt, FaUsers, FaChessQueen, FaUserCircle, FaAngleDown } from "react-icons/fa";
import profile from './assets/placeholder.png';
import './Sidebar.css';

export default function Sidebar({ isOpen, onMenuItemClick }) {
  const [isEntriesOpen, setIsEntriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const menuItems = [
    { icon: <AiFillDashboard />, label: 'Dashboard', key: 'dashboard' },
    { icon: <FaHamburger />, label: 'Entries', key: 'entries', isDropdown: true },
    { icon: <FaCogs />, label: 'Services area', key: 'servicesarea' },
    { icon: <FaCodeBranch />, label: 'Branches', key: 'branches' },
    { icon: <FaQrcode />, label: 'QR Builder', key: 'qrBuilder' },
    { icon: <FaServicestack />, label: 'Services', key: 'services', isDropdown: true }, // Updated this line
    { icon: <FaReceipt />, label: 'Report', key: 'report' },
  ];

  const userSectionItems = [
    { icon: <FaUsers />, label: 'Customers', key: 'customers' },
    { icon: <FaChessQueen />, label: 'Staff', key: 'staff' },
  ];

  const settingsSectionItems = [
    { icon: <FaUserCircle />, label: 'Manage profile', key: 'profile' },
  ];

  const handleMenuItemClick = (key) => {
    if (key === 'entries') {
      setIsEntriesOpen(!isEntriesOpen);
      setIsServicesOpen(false);
    } else if (key === 'services') {
      setIsServicesOpen(!isServicesOpen);
      setIsEntriesOpen(false);
    } else {
      setIsEntriesOpen(false);
      setIsServicesOpen(false);
      setActiveKey(key);
      onMenuItemClick(key);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-content">
        <div className="profile-sec cust-profile-image mt-3 pb-3 mx-2">
          <span><img src={profile} alt="Profile" /></span>
          {isOpen && <span className="text mx-2" style={{ fontWeight: '600' }}> Sunil </span>}
        </div>

        <div>
          {isOpen && <h5 className="mb-0 py-3 mx-2">Navigation Section</h5>}
        </div>

        {menuItems.map(item => (
          <div
            key={item.key}
            className={`menu-item ${activeKey === item.key ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(item.key)}
          >
            <span style={{ fontSize: '21px' }}>{item.icon}</span>
            {isOpen && <span className="text">{item.label} 
            {item.isDropdown && <FaAngleDown style={{ fontSize: '16px', marginLeft: '100px'}} />}
            </span>}

            {item.key === 'entries' && item.isDropdown && isEntriesOpen && (
              <div className="drop-menu mt-2">
                <div className={`menu-item ${activeKey === 'todaysEntries' ? 'active' : ''}`} onClick={() => { setActiveKey('todaysEntries'); onMenuItemClick('todaysEntries'); }}>Today's Entries</div>
                <div className={`menu-item ${activeKey === 'allEntries' ? 'active' : ''}`} onClick={() => { setActiveKey('allEntries'); onMenuItemClick('allEntries'); }}>All Entries</div>
              </div>
            )}

            {item.key === 'services' && item.isDropdown && isServicesOpen && (
              <div className="drop-menu mt-2">
                <div className={`menu-item ${activeKey === 'servicesCategory' ? 'active' : ''}`} onClick={() => { setActiveKey('servicesCategory'); onMenuItemClick('servicesCategory'); }}>Services Category</div>
                <div className={`menu-item ${activeKey === 'allServices' ? 'active' : ''}`} onClick={() => { setActiveKey('allServices'); onMenuItemClick('allServices'); }}>All Services</div>
              </div>
            )}
          </div>
        ))}

        <div className="pt-3">
          {isOpen && <h5 className="mb-0 py-3 mx-2">User Section</h5>}
        </div>

        {userSectionItems.map(item => (
          <div
            key={item.key}
            className={`menu-item ${activeKey === item.key ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(item.key)}
          >
            <span style={{ fontSize: '21px' }}>{item.icon}</span>
            {isOpen && <span className="text">{item.label}</span>}
          </div>
        ))}

        <div className="pt-3">
          {isOpen && <h5 className="mb-0 py-3 mx-2">Settings Section</h5>}
        </div>

        {settingsSectionItems.map(item => (
          <div
            key={item.key}
            className={`menu-item ${activeKey === item.key ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(item.key)}
          >
            <span style={{ fontSize: '21px' }}>{item.icon}</span>
            {isOpen && <span className="text">{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
