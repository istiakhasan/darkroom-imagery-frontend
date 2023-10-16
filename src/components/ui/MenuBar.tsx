"use client";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import { Button, Dropdown, MenuProps } from "antd";
import { BarsOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
const MenuBar = () => {
  const router=useRouter()
  const location = usePathname();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/home");
  };
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: <Link href={"/home"}>Home</Link>,
    },
    {
      key: 1,
      label: <Link href={"/services"}>Services</Link>,
    },
    {
      key: 2,
      label: <Link href={"/faq"}>FAQ</Link>,
    },
    {
      key: 3,
      label: <Link href={"/feedback"}>Feedback</Link>,
    },
    {
      key: 4,
      label: <Link href={"/blog"}>Blog</Link>,
    },
    true ? { key: 5, label: <Link href={"/dashboard"}>Dashboard</Link> } : null,
  ];
  const itemsForLg: { key: string; label: string }[] = [
    {
      key: "Home",
      label: "/home",
    },
    {
      key: "Services",
      label: "/services",
    },
    {
      key: "FAQ",
      label: "/faq",
    },
    {
      key: "Feedback",
      label: "/feedback",
    },
    {
      key: "Blog",
      label: "/blog",
    },
    true && { key: "Dashboard", label: "/dashboard" },
    true && { key: "Login", label: "/login" },
  ];
  const menuProfileIcon: MenuProps["items"] = [
    {
      key: "Profile",
      label: <Link href={"/profile"}>Profile</Link>,
    },
    {
      key: "Dashboard",
      label: <Link href={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "logout",
      label: <Button onClick={()=>logOut()} className=" w-100" type="primary" danger>Logout</Button>,
    },
  ];
  return (
    <div className="navbar">
      <div className="logo">
        Dark<span>Room</span>
      </div>
      <div className="menu_item d-none d-md-block">
        {itemsForLg?.map((item) => (
          <>
            <Link
              className={location == item.label ? "active" : ""}
              href={item.label}
            >
              {item.key}
            </Link>
          </>
        ))}
        <Dropdown
          menu={{ items: menuProfileIcon }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          overlayStyle={{
            width: "200px",
          }}
        >
          <UserOutlined style={{ fontSize: "30px", color: "white" }} />
        </Dropdown>
      </div>
      <Dropdown
        className="d-md-none"
        menu={{ items }}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        overlayStyle={{
          width: "200px",
        }}
      >
        <BarsOutlined style={{ fontSize: "30px", color: "white" }} />
      </Dropdown>
    </div>
  );
};

export default MenuBar;
