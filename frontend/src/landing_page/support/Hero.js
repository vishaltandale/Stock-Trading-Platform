import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id="supportWrapper">
                <h4 className="fs-4">Support Portal</h4>
                <a href='' className="fs-6">Track Tickets</a>
            </div>

            <div className='row p-5 m-3' style={{ marginTop: '-20px' }}>
                <div className='col-6 p-3'>
                    <h1 className='fs-3 mb-4'>Search for an answer or browse help topics to create a ticket.</h1>
                    <div className="search-input-container">
                        <input placeholder='Eg: how do I activate F&O, why is my order rejected...' className="mb-4" />
                    </div>
                    <div className="hero-links" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '15px' }}>
                        <a href=''>Track account opening</a>
                        <a href=''>Track segment activation</a>
                        <a href=''>Intraday margins</a>
                        <a href=''>Kite user manual</a>
                    </div>
                </div>

                <div className='col-6 p-3' style={{ paddingLeft: '80px' }}>
                    <h1 className='fs-3 mb-4'>Featured</h1>
                    <ol style={{ fontSize: '15px', lineHeight: '2' }}>
                        <li><a href=''>Surveillance measure on small cap companies</a></li>
                        <li><a href=''>Latest Intraday leverages and margins</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;