"use client";
import { Avatar, Button, Dropdown, Layout, MenuProps, Space } from "antd";
import MenuBar from "../../components/ui/MenuBar";
import Footer from "@/components/ui/home/Footer";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <Layout className="layout">
       <MenuBar />
      <Content style={{ padding: "0 50px", minHeight: "100vh" }}>
        <div className="site-layout-content my-4">{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default GlobalLayout;
