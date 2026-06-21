import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8'>
                    <a href="" style={{ textDecoration: "none" }}>
                        <h3>Brokerage Calculator</h3>
                    </a>
                    <ul style={{textAlign:"left", lineHeight:"2.3"}} className='text-muted mt-4'>

                        <li>Call and Trade and RMS AutoSquare off additional charges of Rs. 50 plus GST per order.</li>
                        <li>GST Contract notes will be sent via email.</li>
                        <li>Physical copies of contract notes, if required, shall be charged Rs. 20 per contract note. Courier charges apply.</li>
                        <li>For NRI account, 0.5% or Rs 100 per executed order for equity, whichever is lower.</li>
                        <li>For NRI accounts, PIS 0.5% or Rs 200 per executed order for equity, whichever is lower.</li>
                        <li>If the account is in debit balance, any order placed will be charged Rs 40 per executed order instead of Rs 20 per executed</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a href="" style={{ textDecoration: "none" }}>
                        <h3>List of charges </h3>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Brokerage;