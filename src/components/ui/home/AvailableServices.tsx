"use client"
import { Col, Divider, Row } from "antd";
import AvailAbleServiceCard from "./AvailAbleServiceCard";

const AvailableServices = () => {
  return (
    <div>
      <h1 className="my-5 text-center underline">Available <span>Services</span></h1>

       <Divider />
      <Row gutter={30}  justify={"center"}>
        {Array.from(Array(6).keys()).map((item, i) => (
          <Col  sm={24} lg={8}  key={i}>
            <AvailAbleServiceCard  />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AvailableServices;
