"use client"
import React from "react";
import  dayjs  from 'dayjs';

const UpcommingServicesCard = ({item}:{item:any}) => {
  return (
    <div style={{marginBottom:"30px"}}>
      <div style={{border:"none",height:"300px"}} className="card text-bg-dark border-none">
        <img style={{height:"100%"}}  src={item?.service_img} className="card-img" alt="..." />
        <div style={{
          background:"rgba(0,0,0,.2)"
        }} className="card-img-overlay">
          <h5 className="card-title">{item?.serviceName}</h5>
          <p className="card-text">
            {item?.serviceName}
          </p>
          <p className="card-text">
          <small>Last updated {dayjs(new Date(item?.updatedAt)).format('MMMM D, YYYY')}</small>
         
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcommingServicesCard;
