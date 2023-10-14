"use client";

import { Layout } from "antd";
import DashboardSidebar from "@/components/ui/dashboard/DashboardSidebar";
import DashboardContent from "@/components/ui/dashboard/DashboardContent";
import DashboardCustomSideBar from "@/components/ui/dashboard/DashboardCustomSideBar";
import "./style.css";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapes, setCollapes] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setCollapes(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setCollapes(true);
      } else {
        setCollapes(false);
      }
    });
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      {/* <DashboardSidebar /> */}
      <div  className={`custom_sidebar ${collapes ? "close" : "open"}`}>
        <div style={{ width: "220px" }}>
          <DashboardCustomSideBar setCollapes={setCollapes} />
        </div>
      </div>
      <DashboardContent setCollapes={setCollapes}>{children}</DashboardContent>
    </Layout>
  );
};

export default DashboardLayout;
