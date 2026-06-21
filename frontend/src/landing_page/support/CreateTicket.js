import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className="row pt-5 mb-2 mt-2 ">
                <h1 className='fs-2 text-center'>To create a ticket, select relevant topic. </h1>
                <div className='col-4 p-5 mb-5'>
                    <h4 className=''>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
                    </h4>
                    <a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a>
                    <br/>
                    <a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a>
                    <br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company Partnership and HUF Account Opening</a>
                    <br/>
                    <a href="" >NRI Account Opening</a>
                    <br/>
                    <a href=""style={{textDecoration:"none", lineHeight:"2.5"}} >Charges at Zerodha</a>
                    <br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Zeroda IDFC FIRST Bank 3-in-1 Account</a>
                    <br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a>
                </div>
            </div>

        </div>
    );
}

export default CreateTicket;