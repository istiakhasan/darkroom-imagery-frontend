"use client";
import { Layout, Menu, MenuProps } from "antd";
import React, { useState } from "react";
import {
  UserOutlined,
} from "@ant-design/icons";
const DashboardSidebar = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: 1,
      label: "Profile",
      icon:<UserOutlined />
    },
    {
      key: 2,
      label: "Services",
      icon:<UserOutlined />
    },
    {
      key: 3,
      label: "Profile",
      icon:<UserOutlined />
    },
  ];
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        defaultSelectedKeys={["1"]}
      />
    </Sider>
  );
};

export default DashboardSidebar;
