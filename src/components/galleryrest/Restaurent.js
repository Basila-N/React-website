import React from 'react'
import './Restaurent.css';
import i1 from '../../assets/images/r1.png';
import i2 from '../../assets/images/r2.png';
import i3 from '../../assets/images/r3.png';

function Restaurent() {
  return (
    <div>
        <div className="container-fluid vw_glry" id="gallary1">
        <h1 className="text-center">VIEW RESTAURENT</h1>
        <div className="row">
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src={i1} alt=""/>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src={i2} alt=""/>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src={i3} alt=""/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Restaurent