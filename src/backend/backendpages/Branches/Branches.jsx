import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


export default function Branches() {

const [branches, setBranches] = useState([]);

    const navigate = useNavigate();

    const handleAddNewCategories = () => {
        navigate('/dashboardhome', { state: { key: 'addNewbranches' } });
    }

    useEffect(() => {

        const fatchbranches = async () => {

            try{
                const response = await axios.get('http://localhost:8081/get-branches');
                setBranches(response.data);

            }
            catch(error){
                console.log(error);
            }
        };
        fatchbranches();

        }, []);


        const handleDelete = async(e, id) => {
             
            e.preventDefault();

            const response = await axios.delete(`http://localhost:8081/delete-category/${id}`);

            if(response.status == 200){
                alert('Branch deleted successfully');
               const updatebranches = (branches.filter(branch => branch.id!== id));

                setBranches(updatebranches);

            }

        }

    


  return (
    <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="mani-heading d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="">
                            Branch</h2>
                        </div>
                        <div className='add-new-button'>
                            <button className='button-add' onClick={handleAddNewCategories}>Add New Branch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='categories-data-show-table'>
                <div class="cust-des-pera-box">
                    <p class="pera-box-heading">List Of Your Approved Branch</p>
                    <div class="des-pera-box">
                        <div className='categories-table'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Branch Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { branches.map(branch => (

                                        <tr key={branch.id}>
                                            <td>{branch.name}</td>
                                            <td>
                                                <div className='actions'>
                                                    <button className='button-edit mx-2'>Edit <span><CiEdit /></span></button>
                                                    <button className='button-delete mx-2' onClick={(e) => handleDelete(e, branch.id)} style={{ borderColor: '#ff3b3b', color: '#ff3b3b' }}>Delete <span><RiDeleteBin6Line /></span></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))  }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
