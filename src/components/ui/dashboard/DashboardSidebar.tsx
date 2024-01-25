"use client";
import { Layout, Menu, MenuProps } from "antd";
import React, { useState } from "react";
import {
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const DashboardSidebar = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  type MenuItem = Required<MenuProps>["items"][number];
  const items: MenuItem[] = [
    {
      key: "home",
      label: <Link href={"/home"}>Home</Link>,
      icon:<UserOutlined />
    },
     {
      key: 1,
      label: <Link href={"/profile"}>Profile</Link>,
      icon:<UserOutlined />
    },
    {
      key: 2,
      label: <Link href={`/user/booking-history`}>Booking History</Link>,
      icon:<UserOutlined />
    },
    {
      key: 3,
      label: <Link href={`/admin/manage-user`}>Manage User</Link>,
      icon:<UserOutlined />
    },
     {
      key: 4,
      label: <Link href={`/admin/manage-service`}>Manage Services</Link>,
      icon:<UserOutlined />
    },
    {
      key: 4,
      label: <Link href={`/admin/manage-booking`}>Manage Booking</Link>,
      icon:<UserOutlined />
    },
    {
      key: 5,
      label: <Link href={`/admin/manage-faq`}>Manage FAQ</Link>,
      icon:<UserOutlined />
    },
    {
      key: 6,
      label: <Link href={`/admin/manage-blog`}>Manage Blog</Link>,
      icon:<UserOutlined />
    },
    {
      key: 7,
      label: <Link href={`/admin/make-admin`}>Make Admin</Link>,
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
