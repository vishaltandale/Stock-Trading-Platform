import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    return ( 
        <div className='container p-5 mb-5'>
            <Hero />
            <CreateTicket />
        </div>
     );
}

export default SupportPage;