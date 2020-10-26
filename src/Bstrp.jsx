import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Bstrp = () => {
    return (
        <>
            <div className={'container'}>
                <h1 className={'text-center'}>Welcome</h1> <br/>
                <div className={'text-center'}>
                    <div className="card " style={{width: "18rem"}}>
                        <img src="https://picsum.photos/seed/picsum/200/150" className="card-img-top" alt="dummyimg"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <a href="https://www.google.co.in/" className="btn btn-outline-success">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Bstrp;