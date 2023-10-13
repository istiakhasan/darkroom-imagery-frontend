"use client"
import { Button, Col, Input, Row } from "antd";;
import React from "react";

const Feedback = () => {
  const { TextArea } = Input;
  return (
    <Row
      style={{
        minHeight: "100vh",
      }}
      justify={"center"}
      align={"middle"}
    >
      <Col style={{
        background:"white",
        padding:"100px 30px"
      }} sm={20} lg={10}>
        <h3 className="text-center">Drop Your Feedbacks</h3>
        <div className="mb-3">
          <label htmlFor="">Full Name</label>
          <Input size="large" placeholder="Type your Full name" />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <Input size="large" placeholder="Type your emal" />
        </div>
        <div className="mb-3">
          <label htmlFor="">Subject</label>
          <Input size="large" placeholder="Subject" />
        </div>
         <div className="mb-3">
          <label htmlFor="">Message</label>
          <TextArea rows={6} placeholder="Message" maxLength={6} />
        </div>
        <div>
          <Button className="w-100" type="primary" htmlType="submit">Submit</Button>
        </div>
      </Col>
    </Row>
  );
};

export default Feedback;
