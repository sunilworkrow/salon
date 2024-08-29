import React from 'react';
import { FaHamburger, FaCogs, FaCodeBranch, FaUsers, } from "react-icons/fa";
import './Dashboard.css'


export default function Dashboard() {

  const cardData = [
    { icon: <FaHamburger />, title: 'Total (By now)', maintitle: 'Order Placed', value: 0 },
    { icon: <FaCogs />, title: 'Approved ', maintitle: 'Branch', value: 1 },
    { icon: <FaCodeBranch />, title: 'Pending ', maintitle: 'Branch', value: 1 },
    { icon: <FaUsers />, title: 'Registered ', maintitle: 'Active Customers', value: 11 },
  ];

  return (
    <div className="">
      <div className="row">
        <div className="col-md-12">
          <div className="mani-heading">
            <h2 className="">Owner Dashboard</h2>
          </div>
        </div>

        {cardData.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="deshboard-box">
              <div className="info-box-icon bg-lightblue">
                {card.icon}
              </div>
              <div className='info-box-content'>
                <small className="">{card.title}</small>
                <h5 className="">{card.maintitle}</h5>
                <p className="">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
