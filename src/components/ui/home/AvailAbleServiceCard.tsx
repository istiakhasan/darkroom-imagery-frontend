"use client";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Image } from "antd";

const { Meta } = Card;
const AvailAbleServiceCard = ({item}:{item:any}) => {
  return (
    <Card
      style={{ marginBottom: "20px",height:"100%" }}
      cover={
        <Image
          height={150}
          style={{objectFit:"cover"}}
          preview={true}
          alt="example"
          src={item?.service_img}
        />
      }
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={item?.serviceName}
        description={item?.price}
      />
      <p>{item?.service_desc?.length>50?`${item?.service_desc?.slice(0,50)}...`:item?.service_desc}</p>
      <p>{item?.status}</p>
    </Card>
  );
};

export default AvailAbleServiceCard;
