import React from 'react'

export const Home = () => {
    return (
        <>
            <h2>Patient Information</h2>
            <div className='row'>
                <div className='column'>
                    <label class="label-normal"> Firstname</label>
                    <input type="text" />
                </div>
                <div className='column'>
                    <label class="label-normal"> Lastname</label>
                    <input type="text" />
                </div>

                <div className='column'>
                    <label class="label-normal"> Address</label>
                    <input type="text" />
                </div>
                <div className='column'>
                    <label class="label-normal"> City</label>
                    <input type="text" />
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <label class="label-normal"> State</label>
                    <input type="text" />
                </div>
                <div className='column'>
                    <label class="label-normal"> Pincode</label>
                    <input type="number" />
                </div>

                <div className='column'>
                    <label class="label-normal"> DOB</label>
                    <input type="date" />
                </div>
                <div className='column'>
                    <label class="label-normal"> Age</label>
                    <input type="number" />
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <label class="label-normal"> Phone number</label>
                    <input type="text" />
                </div>
                <div className='column'>
                    <label class="label-normal"> Email</label>
                    <input type="text" />
                </div>
            </div>
            <h2>Health Information</h2>
            <div className='row'>
                <div className='column'>
            <label class="label-normal"> Weight in Kg</label>
            <input type="number" />
            </div>
                <div className='column'>
            <label class="label-normal"> Height in cm</label>
            <input type="number" />
            </div>
                <div className='column'>
            <label class="label-normal"> BP</label>
            <input type="number" />
            </div>
                <div className='column'>
            <label class="label-normal"> Pulse</label>
            <input type="number" />
            </div>
                </div>
                <div className='row'>
                <label class="label-normal"> Symptoms</label>
              
              
            <label class="label-symptoms"> Caugh</label>
            <input type="checkbox" />
            
              
              <label class="label-symptoms"> Fever</label>
              <input type="checkbox" />
              
              <label class="label-symptoms"> Body pain</label>
              <input type="checkbox" />
              <label class="label-symptoms"> Breathing Problem</label>              
              <input type="checkbox" />
              <label class="label-symptoms"> Body pain</label>
              <input type="checkbox" />
              <label class="label-symptoms"> Shoulder pain</label>
              <input type="checkbox" />
              <label class="label-symptoms"> Back pain</label>
              <input type="checkbox" />
              <label class="label-symptoms"> Rashes</label>
              <input type="checkbox" />
              <label class="label-symptoms"> Injuries</label>
              <input type="checkbox" />
              <label class="label-symptoms"> Vomiting</label>
              <input type="checkbox" />
              </div>
              &nbsp;
              <div className='row'>
                
            <label class="label-normal"> Health Details</label>
            <textarea />
           
            <div className='column'>
            <button class="myButton" role="button">Register</button>
            </div>
            </div>
            <div >
                
           
            </div>
        </>
    )
}
