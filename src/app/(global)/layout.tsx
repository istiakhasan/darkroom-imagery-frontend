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
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: "1000",
        }}
      >
        <MenuBar />
        <div>
           <Button
            onClick={() => route.push("/login")}
            type="primary"
            size="large"
          >
            Login
          </Button>

          <Dropdown menu={{ items }}>
            <a>
              <Space wrap size={16}>
                <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg" size="large" icon={<UserOutlined />} />
              </Space>
            </a>

          </Dropdown>
        </div>
      </Header>
      <Content style={{ padding: "0 50px", minHeight: "100vh" }}>
        <div className="site-layout-content my-4">{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default GlobalLayout;
