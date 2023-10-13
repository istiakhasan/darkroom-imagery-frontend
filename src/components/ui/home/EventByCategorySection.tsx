"use client"
import React from "react";
import { Col, Divider, Row } from "antd";
import EventByCategoryCard from "./EventByCategoryCard";
const EventByCategorySection = () => {
  return (
    // <div>
    //
    // </div>
    <div>
      <h1 className="my-5 text-center underline">
        Available <span>Services</span>
      </h1>

      <Divider />
      <Row gutter={30} justify={"center"}>
        {Array.from(Array(20).keys()).map((item, i) => (
          <Col sm={24} lg={8} key={i}>
            <EventByCategoryCard />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventByCategorySection;
