import { Col, Divider, Image, Row } from "antd";
import React from "react";
import  dayjs  from 'dayjs';

const LatestNewsCard = ({item}:{item:any}) => {
  return (
    <div>
      <h5>{dayjs(item?.createdAt).format('MMMM')}</h5>
      <h4>{item?.title}</h4>
      {/* <Divider /> */}
      <Row>
        <Col lg={24}>
          <Row gutter={20} justify={"space-between"}>
            <Col lg={12}>
              <p className="text-secondary">
                {item?.description}
              </p>
            </Col>

            <Col lg={12}>
              <Image
                alt=""
                height={200}
                width={200}
                src={item?.image}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LatestNewsCard;
