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
import { UserOutlined,MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
const DashboardHeader = ({setCollapes}:{setCollapes:any}) => {
  const route=useRouter()
  const { Header } = Layout;
  const menuProfileIcon: MenuProps["items"] = [
    {
      key: "Profile",
      label: <Link href={"/profile"}>Profile</Link>,
    },
    {
      key: "Dashboard",
      label: <Link href={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "logout",
      label: <Button className=" w-100" type="primary" danger>Logout</Button>,
    },
  ];
  return (
    <Header style={{ padding: 0, background: "white" }}>
      <Row className="px-5" justify={"space-between"}>
        <MenuOutlined className="d-lg-none" onClick={()=>setCollapes(false)} style={{color:"black"}} />
        <Col>
         
          <Dropdown overlayStyle={{
            width: "200px",
          }}  menu={{ items:menuProfileIcon }}>
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
