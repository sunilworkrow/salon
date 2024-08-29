import React, { useState } from 'react';
import './TodayEntries.css';

export default function TodayEntries() {
    const [branch, setBranch] = useState('All');
    const [customer, setCustomer] = useState('All');
    const [driver, setDriver] = useState('All');
    const [status, setStatus] = useState('All');

    const handleFilter = () => {
        console.log('Filtering with:', branch, customer, driver, status);
    };

    return (
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <div className="mani-heading">
                        <h2 className="">
                        Todays Entries</h2>
                    </div>
                </div>
            </div>

            <div className="cust-des-pera-box">
               <p className="pera-box-heading">Today's Entries</p>
            <div className="des-pera-box">
                
                <form>
                    <div className="row">
                        <div className="col-md-4 mb-3 cust-select-box">
                        <label>Branch</label>
                            <select
                                className="form-select"
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                            >
                                <option value="All">All</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3 cust-select-box">
                        <label>Customer</label>
                            <select
                                className="form-select"
                                value={customer}
                                onChange={(e) => setCustomer(e.target.value)}
                            >
                                <option value="All">All</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3 cust-select-box">
                        <label>Driver</label>
                            <select
                                className="form-select"
                                value={driver}
                                onChange={(e) => setDriver(e.target.value)}
                            >
                                <option value="All">All</option>
                               
                            </select>
                        </div>
                        <div className="col-md-4 mb-3 cust-select-box">
                        <label>Status</label>
                            <select
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="All">All</option>
                               
                            </select>
                        </div>
                        <div className="col-md-2 mb-3 d-flex align-items-end">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleFilter} >
                                Filter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}
