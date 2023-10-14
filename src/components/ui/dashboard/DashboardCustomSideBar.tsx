import Link from "next/link";
import React from "react";
import {
  UserOutlined,
  HomeFilled,
  HistoryOutlined,
  DashboardFilled,
  UserDeleteOutlined,
  CustomerServiceFilled,
  QuestionCircleOutlined,
  CommentOutlined,
  MacCommandFilled
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
const DashboardCustomSideBar = () => {
  const path = usePathname();
  const items = [
    {
      key: "Home",
      label: "/home",
      icon: <HomeFilled className="me-2" />,
    },
    {
      key: "Dashboard",
      label: "/dashboard",
      icon: <DashboardFilled className="me-2" />,
    },

    {
      key: "Profile",
      label: "/profile",
      icon: <UserOutlined className="me-2" />,
    },
    {
      key: "Booking History",
      label: `/user/booking-history`,
      icon: <HistoryOutlined className="me-2" />,
    },
    {
      key: "Manage User",
      label: `/admin/manage-user`,
      icon: <UserDeleteOutlined className="me-2" />,
    },
    {
      key: "Manage Service",
      label: `/admin/manage-service`,
      icon: <CustomerServiceFilled className="me-2" />,
    },
    {
      key: "Manage Booking",
      label: `/admin/manage-booking`,
      icon: <UserOutlined className="me-2" />,
    },
    {
      key: "Manage Faq",
      label: `/admin/manage-faq`,
      icon: <QuestionCircleOutlined className="me-2" />,
    },
    {
      key: "Manage Blog",
      label: `/admin/manage-blog`,
      icon: <CommentOutlined className="me-2" />,
    },
    {
      key: "Make Admin",
      label: `/admin/make-admin`,
      icon: <MacCommandFilled className="me-2" />,
    },
  ];
  return (
    <div>
      <div className="logo">Dark-I</div>
      <div className="sidebar_link">
        {items.map((item, i) => (
          <Link
            key={i}
            className={path === item?.label ? "active" : ""}
            href={item.label}
          >
            {item.icon}
            {item?.key}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardCustomSideBar;
