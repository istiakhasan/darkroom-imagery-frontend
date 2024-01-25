"use client";
import { Layout} from "antd";
import MenuBar from "../../components/ui/MenuBar";
import Footer from "@/components/ui/home/Footer";
const { Header, Content } = Layout;

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{
      maxWidth:"1400px",
      margin:"0 auto"
    }} className="layout">
       <MenuBar />
      <Content style={{ padding: "0 50px", minHeight: "100vh" }}>
        <div className="site-layout-content my-4">{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default GlobalLayout;
