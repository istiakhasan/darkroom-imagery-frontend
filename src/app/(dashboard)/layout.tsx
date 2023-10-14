"use client";

import {  Layout } from "antd";
import DashboardSidebar from "@/components/ui/dashboard/DashboardSidebar";
import DashboardContent from "@/components/ui/dashboard/DashboardContent";
import DashboardCustomSideBar from "@/components/ui/dashboard/DashboardCustomSideBar";
import './style.css'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      {/* <DashboardSidebar /> */}
      <div className="custom_sidebar">
        <DashboardCustomSideBar />
      </div>
      <DashboardContent>{children}</DashboardContent>
    </Layout>
  );
};

export default DashboardLayout;
