import React, { useState } from 'react';
import womenImage from '../backendcomponents/assets/94wfjbqEMWmiNSOHF8le.jpg';
import menImage from '../backendcomponents/assets/men.jpg';


export default function ServicesArea() {
    const [branch, setBranch] = useState('All');

    const cardData = [
        {
            image: womenImage,
            title: 'Women',
            subtitle: '2 Restaurants registered'
        },
        {
            image: menImage,
            title: 'Men',
            subtitle: '2 Restaurants registered'
        }
    ]


    const handleFilter = () => {
        console.log('Filtering with:', branch);
    };

    return (
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <div className="mani-heading">
                        <h2 className="">
                            Services Area</h2>
                    </div>
                </div>
            </div>

            <div className="cust-des-pera-box">
                <p className="pera-box-heading">Filter services area</p>
                <div className="des-pera-box">

                    <form>
                        <div className="row" style={{ 'justifyContent': 'center' }}>
                            <div className="col-md-4 mb-3 cust-select-box">
                                <label className='mb-1'>Services area type</label>
                                <select
                                    className="form-select"
                                    value={branch}
                                    onChange={(e) => setBranch(e.target.value)}
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
            <div className='row services_area_box' style={{ 'justifyContent': 'center' }}>

                {
                    cardData.map((card, index) => (
                        <div key={index} className='col-md-4'>
                            <div className='services_area_box_item'>
                            <div className='services_area_img'>
                                <img src={card.image} alt="" />
                            </div>
                            <div className='services_area_pra'>
                                <h3>{card.title}</h3>
                                <p>{card.subtitle}</p>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
