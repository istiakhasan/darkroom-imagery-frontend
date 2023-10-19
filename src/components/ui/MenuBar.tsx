"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./navbar.css";
import { Avatar, Badge, Button, Dropdown, MenuProps } from "antd";
import { BarsOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useAppSelector } from "@/redux/hooks";
import DDrawer from "./DDrawer";
import { useGetProfileQuery } from "@/redux/api/authApi";
const MenuBar = () => {
  const {data,isLoading}=useGetProfileQuery(undefined)
  const profileInfo=data?.data
  const [open, setOpen] = useState(false);
  const userLoggedIn = isLoggedIn();
  const { cart } = useAppSelector((state) => state?.cart);
  const router = useRouter();
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
      key: 12,
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
      key: "Blog",
      label: "/blog",
    },
    ...(userLoggedIn ? [{ key: "Dashboard", label: "/profile" }] : []),
    ...(!userLoggedIn ? [{ key: "Login", label: "/login" }] : []),
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
      label: (
        <Button
          onClick={() => logOut()}
          className=" w-100"
          type="primary"
          danger
        >
          Logout
        </Button>
      ),
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
        <Badge className="me-4" count={cart?.length}>
          <Avatar
            onClick={() => setOpen(true)}
            shape="square"
            icon={<ShopOutlined />}
          />
        </Badge>
        <DDrawer setOpen={setOpen} open={open} />
        {profileInfo && (
          <Dropdown
            menu={{ items: menuProfileIcon }}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
            overlayStyle={{
              width: "200px",
            }}
          >
            <Avatar shape="square" src={profileInfo?.profileImg} />
          </Dropdown>
        )}
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
