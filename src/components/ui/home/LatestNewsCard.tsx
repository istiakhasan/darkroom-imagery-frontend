import { Col, Divider, Image, Row } from "antd";
import React from "react";

const LatestNewsCard = () => {
  return (
    <div>
      <h5>Auguest</h5>
      <h4>Lore, ipsumdfas dolor.</h4>
      {/* <Divider /> */}
      <Row>
        <Col lg={24}>
          <Row gutter={20} justify={"space-between"}>
            <Col lg={12}>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quibusdam ipsa corrupti 
              </p>
            </Col>

            <Col lg={12}>
              <Image
                alt=""
                height={200}
                width={200}
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LatestNewsCard;
