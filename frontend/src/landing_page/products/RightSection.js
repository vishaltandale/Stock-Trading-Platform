import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1>{productName}</h1>
                    <p style={{lineHeight: "1.6"}}>{productDescription}</p>
                    <a href={learnMore}>{learnMore}</a>
                </div>



                <div className="col-6 pl-5">
                    <img src={imageURL} alt={productName} />
                </div>
            </div>
        </div>

         
    );
}

export default RightSection;