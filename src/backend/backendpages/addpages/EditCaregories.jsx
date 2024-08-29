import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function EditCaregories() {
    const navigate = useNavigate();
    const location = useLocation();
    const [categoryName, setCategoryName] = useState('');
    const [categoryId, setCategoryId] = useState(null);

    useEffect(() => {
        if (location.state && location.state.id) {
            setCategoryId(location.state.id);
            fetchCategory(location.state.id);
        }
    }, [location.state]);

    const fetchCategory = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8081/get-categorys/${id}`);
            if (response.data.length > 0) {
                setCategoryName(response.data[0].name);
            }
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

    const handleBackCategories = () => {
        navigate('/dashboardhome', { state: { key: 'servicesCategory' } });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8081/update-category/${categoryId}`, {
                name: categoryName,
            });
            if (response.status === 200) {
                alert('Category updated successfully');
                navigate('/dashboardhome', { state: { key: 'servicesCategory' } });
            }
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };
    

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="mani-heading d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="">
                                Edit Category
                            </h2>
                        </div>
                        <div className='add-new-button'>
                            <button className='button-add' onClick={handleBackCategories}>Back To Category</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='categories-data-show-table'>
                <div className="cust-des-pera-box">
                    <p className="pera-box-heading">Edit form</p>
                    <div className="des-pera-box">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="categoryName" className='pb-2'>Edit Category Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="categoryName"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
