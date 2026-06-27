import React from 'react';

function CreateTicket() {
    return (
        <div className='container' style={{ padding: '40px 0' }}>
            <h1 className='fs-4 text-muted mb-5' style={{ fontWeight: 400 }}>To create a ticket, select a relevant topic</h1>
            <div className="row">
                <div className='col-4 p-3 mb-4'>
                    <h4 className='fs-5 mb-3' style={{ fontWeight: 500, color: '#424242' }}>
                        <i className="fa fa-plus-circle me-2" aria-hidden="true" style={{ color: '#387ed1' }}></i> Account Opening
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Online Account Opening</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Offline Account Opening</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Company, Partnership and HUF</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>NRI Account Opening</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Charges at Zerodha</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Getting Started</a>
                    </div>
                </div>

                <div className='col-4 p-3 mb-4'>
                    <h4 className='fs-5 mb-3' style={{ fontWeight: 500, color: '#424242' }}>
                        <i className="fa fa-user me-2" aria-hidden="true" style={{ color: '#387ed1' }}></i> Your Zerodha Account
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Login credentials</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Your Profile</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Account modification and segment addition</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>CMR & DP ID</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Nomination</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Transfer and conversion of shares</a>
                    </div>
                </div>

                <div className='col-4 p-3 mb-4'>
                    <h4 className='fs-5 mb-3' style={{ fontWeight: 500, color: '#424242' }}>
                        <i className="fa fa-bar-chart me-2" aria-hidden="true" style={{ color: '#387ed1' }}></i> Trading and Markets
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Trading FAQs</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Kite</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Margins</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Product and order types</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Corporate actions</a>
                        <a href="" style={{ textDecoration: "none", color: '#387ed1', fontSize: '14px' }}>Kite features</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;