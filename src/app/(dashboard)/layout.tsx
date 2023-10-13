"use client";

import {  Layout } from "antd";
import DashboardSidebar from "@/components/ui/dashboard/DashboardSidebar";
import DashboardContent from "@/components/ui/dashboard/DashboardContent";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <DashboardSidebar />
      <DashboardContent>{children}</DashboardContent>
    </Layout>
  );
};

export default DashboardLayout;
