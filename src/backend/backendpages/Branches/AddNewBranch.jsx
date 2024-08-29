import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function AddNewBranch() {

    const [branchName, setBranchName] = useState("");

    const navigate = useNavigate();



    const handleBackCategories = () => {
        navigate('/dashboardhome', { state: { key: 'branches' } });
    }

    const handlesubmitbranch = () => {

        if(branchName == ""){
            alert("Please enter branch name.")
        }
    }



    const handleSubmit = async(e) => {
        e.preventDefault();

          try{

            const response = await axios.post('http://localhost:8081/add-branch', {
                name: branchName
            });

            if(response.data){
                setBranchName("")
            }

            else{
                alert("Failed to add branch.");     
            }

          }

          catch(err){
            console.log(err);
          }

          navigate('/dashboardhome', { state: { key: 'branches' } });

    }


    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="mani-heading d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="">
                                Create New Branch</h2>
                        </div>
                        <div className='add-new-button'>
                            <button className='button-add' onClick={handleBackCategories}>Back To Branches</button>
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
                                <label for="branchName" className='pb-2'>Branch Name</label>
                                <input type="text" class="form-control" id="branchName" value={branchName} 
                                onChange={(e) => setBranchName(e.target.value)} placeholder="Enter Branch Name" required />
                            </div>

                            <button type="submit" onClick={handlesubmitbranch} class="btn btn-primary mt-4" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
