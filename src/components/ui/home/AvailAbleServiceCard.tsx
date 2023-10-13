"use client";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Image } from "antd";

const { Meta } = Card;
const AvailAbleServiceCard = () => {
  return (
    <Card
      style={{ marginBottom: "20px" }}
      cover={
        <Image
          preview={true}
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default AvailAbleServiceCard;
