"use client";
import { Button, Card, Col, Divider, Image, Rate, Row, Space } from "antd";
import React, { useState } from "react";

const ServiceDetailsPage = () => {
  // const [value, setValue] = useState(3);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  return (
    <div>
      <Row gutter={30} justify={"center"}>
        <Col sm={24} lg={8}>
          <Card
            style={{ width: "100%" }}
            hoverable
            // style={{ width: "340px",padding:"0px" }}
          >
            <Image
              className="img-fluid"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </Card>
        </Col>

        <Col lg={8}>
          <h3 className="mb-4">Man Flex Experience Rn 11 Nin Running </h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officia nulla saepe harum delectus quibusdam ipsam consequatur quod
            ab! Corrupti corporis quasi exercitationem, dolorem nostrum possimus
            commodi cumque optio eligendi, eveniet, doloremque reprehenderit ab.
            Repudiandae aut quisquam alias cumque eveniet.
          </p>
          <Card className="mb-4">
            <span>
              <Rate value={5} /> <span className="ms-3">12 Reviews</span>
            </span>
          </Card>
          <h4 className=" mb-4 px-4">$120</h4>
          <Button
            className="me-3"
            type="primary"
            style={{ background: "black" }}
          >
            Add To Cart
          </Button>
          <Button type="primary" style={{ background: "black" }}>
            Booked Service
          </Button>
        </Col>
        <Col className="mt-4" lg={16}>
          <Card>
            <Divider orientation="left">Reviews And Ratings</Divider>
            <Row>
              {Array.from(Array(16).keys()).map((item, i) => (
                <>
                  <Col lg={8}>
                    <Rate value={5} />
                  </Col>
                  <Col lg={16}>
                    <p>
                      <strong>John Abraham</strong>
                      <small className="d-block">20 december 2021</small>
                    </p>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut exercitationem corporis dolorem beatae nemo magni eum
                      harum maiores dolore assumenda explicabo inventore
                      sapiente molestiae enim, dolor dicta voluptates a vel
                      voluptate laborum praesentium consequuntur. Provident
                      explicabo nulla incidunt enim vero?
                    </p>
                  </Col>
                  <Col lg={24}>
                    <Divider />
                  </Col>
                </>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceDetailsPage;
