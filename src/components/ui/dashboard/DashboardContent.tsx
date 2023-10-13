import { Layout } from "antd";
import React from "react";
import DashboardHeader from "./DashboardHeader";

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return (
    <Layout>
      <DashboardHeader />

      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: "white",
            marginTop:"30px"
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default DashboardContent;
