"use client"
import React from "react";
import { Col, Divider, Row } from "antd";
import EventByCategoryCard from "./EventByCategoryCard";
const EventByCategorySection = () => {
  return (
    <div>
      <h1 className="my-5 text-center underline">
        Event By <span>Category</span>
      </h1>

      <Divider />
      <Row gutter={30} >
        {Array.from(Array(8).keys()).map((item, i) => (
          <Col sm={24} lg={6} key={i}>
            <EventByCategoryCard />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventByCategorySection;
