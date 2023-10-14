import { Layout } from "antd";
import React from "react";
import DashboardHeader from "./DashboardHeader";

const DashboardContent = ({ children,setCollapes }: { children: React.ReactNode,setCollapes:any }) => {
  const { Content } = Layout;
  return (
    <Layout>
      <DashboardHeader setCollapes={setCollapes} />

      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            minHeight: 360,
            // background: "white",
            marginTop:"10px"
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default DashboardContent;
