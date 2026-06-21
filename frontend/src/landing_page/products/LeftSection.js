import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>


                <div className="col-6 p-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1>{productName}</h1>
                    <p style={{lineHeight: "1.6"}}>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{ marginLeft:"50px"}}>Learn More</a>
                    </div>
                  
                    <div className="mt-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" /></a>
                        <a href={appStore}><img src="media/images/appStoreBadge.svg" /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LeftSection;