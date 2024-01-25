import { Col, Divider, Image, Row } from "antd";
import React from "react";
import dayjs from "dayjs";
import { Card } from "antd";

const { Meta } = Card;
const LatestNewsCard = ({ item }: { item: any }) => {
  return (
    <Card 
    style={{height:"100%"}}
      hoverable
      cover={<Image preview={false} alt="" height={200} src={item?.image} />}
    >
      <small>{dayjs(item?.createdAt).format('DD MMMM YYYY')}</small>
      <Meta title={item?.title} description={item?.description?.length>200?`${item?.description?.slice(0,200)}...`:item?.description} />
    </Card>
  );
};

export default LatestNewsCard;
