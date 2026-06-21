import React from 'react';

function Universe() {
    return (
        <div className="container border-top mt-5">
            <div className="row">
                <h1 className="text-center mt-5">The Zerodha Universe</h1>
                <p className="text-center mt-3">Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row mt-5" style={{ marginLeft: "50px" }}>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" style={{
                        width: "150px",
                        height: "50px", objectFit: "contain"
                    }} />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>



                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" style={{
                        width: "150px",
                        height: "50px", objectFit: "contain"
                    }} />
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>



                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" style={{
                        width: "150px",
                        height: "50px", objectFit: "contain"
                    }} />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>

            </div>


            <div className="row mt-5" style={{ marginLeft: "50px" }}>
                <div className="col-4 p-3">
                    <img src="media/images/zerodhaFundhouse.png" style={{
                        width: "150px",
                        height: "50px", objectFit: "contain"
                    }} />
                    <p className="text-small text-muted">Asset management</p>
                </div>



                <div className="col-4 p-3">
                    <img src="media/images/goldenpiLogo.png" style={{
                        width: "150px",
                        height: "50px", objectFit: "contain"
                    }} />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>



                <div className="col-4 p-3">
                    <img src="media/images/dittoLogo.png" style={{
                        width: "150px",
                        height: "50px", objectFit: "contain"
                    }} />
                    <p className="text-small text-muted">Insurance</p>
                </div>


                <button className='p-2 mt-5 btn btn-primary fs-5' style={{ width: "20%", margin: "0 auto" }}>Sign Up Now</button>

            </div>

        </div>
    );
}

export default Universe;