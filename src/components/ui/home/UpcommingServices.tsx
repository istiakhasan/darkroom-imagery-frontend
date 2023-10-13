"use client"
import { Col, Divider, Row } from "antd";
import UpcommingServicesCard from "./UpcommingServicesCard";

const UpcommingServices = () => {
  return (
    <div>
      <h1 className="my-5 text-center underline">Upcomming <span>Services</span></h1>

       <Divider />
      <Row gutter={30}  justify={"center"}>
        {Array.from(Array(6).keys()).map((item, i) => (
          <Col  sm={24} lg={8}  key={i}>
            <UpcommingServicesCard  />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcommingServices;
