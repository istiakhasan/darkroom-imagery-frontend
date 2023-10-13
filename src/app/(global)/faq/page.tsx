import DCollapse from "@/components/ui/DCollapse";
import { Col, Divider, Row } from "antd";
import React from "react";

const page = () => {
  return (
    <div>
      <Divider orientation="left">Frequently Asked Question</Divider>
      <Row gutter={30}>
        {Array.from(Array(16).keys()).map((item, i) => (
          <Col sm={24} lg={12} key={i}>
            <DCollapse text="answer" label="Question one" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default page;
