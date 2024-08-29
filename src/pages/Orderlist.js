import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import './Orderlist.css';

export default function Orderlist() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterOption, setFilterOption] = useState('Today');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost/salon/back-end/reactauth/get_myorder_history');
        setOrders(response.data);
        setFilteredOrders(response.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
        setError('');
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [filterOption, startDate, endDate]);

  const handleFilter = () => {
    const today = dayjs();
    let filtered = orders;

    switch (filterOption) {
      case 'Today':
        filtered = orders.filter(order => dayjs(order.date).isSame(today, 'day'));
        break;
      case 'Week':
        filtered = orders.filter(order => dayjs(order.date).isSame(today, 'week'));
        break;
      case 'Month':
        filtered = orders.filter(order => dayjs(order.date).isSame(today, 'month'));
        break;
      case 'Custom':
        filtered = orders.filter(order => {
          const orderDate = dayjs(order.date);
          const isAfterStartDate = startDate ? orderDate.isAfter(dayjs(startDate).subtract(1, 'day')) : true;
          const isBeforeEndDate = endDate ? orderDate.isBefore(dayjs(endDate).add(1, 'day')) : true;
          return isAfterStartDate && isBeforeEndDate;
        });
        break;
      default:
        break;
    }

    setFilteredOrders(filtered);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  return (
    <div className='categorie-section py-5'>
      <div className='container'>
        <h2 className='text-center mb-4 '>Order List</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='date-picker'>
          <div>
            <label className='mx-2'>Filter by:</label>
            <select value={filterOption} onChange={handleFilterOptionChange}>
              <option value='Today'>Today</option>
              <option value='Week'>Week</option>
              <option value='Month'>Month</option>
              <option value='Custom'>Custom</option>
            </select>
          </div>
          {filterOption === 'Custom' && (
            <>
              <div>
                <label className='mx-2'>Start Date:</label>
                <input
                  type='date'
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <label className='mx-2'>End Date:</label>
                <input
                  type='date'
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                />
              </div>
            </>
          )}
           <button className='submit-button' onClick={handleFilter}>Filter</button>
        </div>
       
        <table className='order-table'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
