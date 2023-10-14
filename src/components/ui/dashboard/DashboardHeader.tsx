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
const DashboardHeader = ({setCollapes}:{setCollapes:any}) => {
  const route=useRouter()
  const { Header } = Layout;
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Button onClick={()=>route.push('/profile')}>Profile</Button>,
    },
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
    <Header style={{ padding: 0, background: "#002140" }}>
      <Row className="px-5" justify={"space-between"}>
        <MenuOutlined onClick={()=>setCollapes(false)} style={{color:"white"}} />
        <Col>
         
          <Dropdown  menu={{ items }}>
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
