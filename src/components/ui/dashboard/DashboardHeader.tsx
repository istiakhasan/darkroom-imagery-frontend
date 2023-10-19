"use client"
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
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useGetProfileQuery } from "@/redux/api/authApi";
const DashboardHeader = ({setCollapes}:{setCollapes:any}) => {
  const {data,isLoading}=useGetProfileQuery(undefined)
  const profileInfo=data?.data
  const route=useRouter()
  const { Header } = Layout;
  const logOut = () => {
    removeUserInfo(authKey);
    route.push("/home");
  };
  const menuProfileIcon: MenuProps["items"] = [
    {
      key: "Profile",
      label: <Link href={"/profile"}>Profile</Link>,
    },
    {
      key: "logout",
      label: <Button onClick={logOut} className=" w-100" type="primary" danger>Logout</Button>,
    },
  ];
  return (
    <Header style={{ padding: 0, background: "white" }}>
      <Row className="px-5" justify={"space-between"}>
        <MenuOutlined className="" onClick={()=>setCollapes(false)} style={{color:"black"}} />
        <Col>
         
          <Dropdown overlayStyle={{
            width: "200px",
          }}  menu={{ items:menuProfileIcon }}>
            <a>
              <Space wrap size={16}>
                <Avatar size="large" src={profileInfo?.profileImg} />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default DashboardHeader;
