import React from "react";

const UpcommingServicesCard = () => {
  return (
    <div style={{marginBottom:"30px"}}>
      <div style={{border:"none"}} className="card text-bg-dark border-none">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img" alt="..." />
        <div style={{
          background:"rgba(0,0,0,.2)"
        }} className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcommingServicesCard;
