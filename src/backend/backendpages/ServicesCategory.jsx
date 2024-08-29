import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import './Services.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ServicesCategory() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([])

    const handleAddNewCategories = () => {
        navigate('/dashboardhome', { state: { key: 'addNewCategory' } });
    }

    
    const handleChangeCategory = (e, id) => {
        navigate('/dashboardhome', { state: { key: 'editCategory', id } });
    };


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8081/get-categorys');
                setCategories(response.data);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    

    const handleDelete = async (e, id) => {
        e.preventDefault();

        // const thisClicked = e.currentTarget;
        // thisClicked.innerText = "data";

        const response = await axios.delete(`http://localhost:8081/delete-category/${id}`);
        console.log(response);

        if (response.status == 200) {
            alert('Category deleted successfully');
            const updatedCategories = categories.filter(category => category.id !== id);
            setCategories(updatedCategories);
        }

    };


    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="mani-heading d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="">
                                Services Category</h2>
                        </div>
                        <div className='add-new-button'>
                            <button className='button-add' onClick={handleAddNewCategories}>Add New Categories</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='categories-data-show-table'>
                <div class="cust-des-pera-box">
                    <p class="pera-box-heading">List Of Services Categories</p>
                    <div class="des-pera-box">
                        <div className='categories-table'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map(category => (
                                        <tr key={category.id}>
                                            <td>{category.name}</td>
                                            <td>
                                                <div className='actions'>
                                                    <button className='button-edit mx-2' onClick={(e) => handleChangeCategory(e, category.id)}>Edit <span><CiEdit /></span></button>
                                                    <button className='button-delete mx-2' onClick={(e) => handleDelete(e, category.id)} style={{ borderColor: '#ff3b3b', color: '#ff3b3b' }}>Delete <span><RiDeleteBin6Line /></span></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
