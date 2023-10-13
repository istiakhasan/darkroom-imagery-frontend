import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
const DashboardHeader = () => {
  const { Header } = Layout;
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger>
          Logout
        </Button>
      ),
    }
  ];
  return (
    <Header    style={{ padding: 0, background: "#002140" }}>
      <Row className="px-5" justify={"end"}>
        <Col>
          <Dropdown menu={{ items }}>
            <a>
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default DashboardHeader;
