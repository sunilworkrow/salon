import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function AddNewCaregories() {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");


const handleBackCategories = () => {
    navigate('/dashboardhome', { state: { key: 'servicesCategory' } });

}

const handlesubmitcategory = () => {

    if(categoryName == ""){
        alert("Please enter category name.")
    }

}


const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
        const response = await axios.post('http://localhost:8081/add-category', {
            name: categoryName,
        });

        if(response.data){
            setCategoryName("")
        }
        else {
            alert("Failed to add category.");
        }

    }
    catch(error){
        console.error(error);
        
    }

    navigate('/dashboardhome', { state: { key: 'servicesCategory' } });

}



  return (
    <div>
         <div className="row">
                <div className="col-md-12">
                    <div className="mani-heading d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="">
                            Create New Category</h2>
                        </div>
                        <div className='add-new-button'>
                            <button className='button-add' onClick={handleBackCategories}>Back To Category</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='categories-data-show-table'>
                <div class="cust-des-pera-box">
                    <p class="pera-box-heading">Add form</p>
                    <div class="des-pera-box">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="categoryName" className='pb-2'>Category Name</label>
                                <input type="text" class="form-control" id="categoryName" value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}  placeholder="Enter Category Name" required/>
                            </div>
                           
                            <button type="submit" class="btn btn-primary mt-4" onClick={handlesubmitcategory}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}
