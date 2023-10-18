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
  MacCommandFilled,
  LeftCircleFilled,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { getMenuLink } from "@/constants/sidebarMenuLink";
import { getUserInfo } from "@/services/auth.service";
const DashboardCustomSideBar = ({ setCollapes }: { setCollapes: any }) => {
  const path = usePathname();
  const info:any=getUserInfo()
  // const items = [
  //   {
  //     key: "Home",
  //     label: "/home",
  //     icon: <HomeFilled className="me-2" />,
  //   },
  //   {
  //     key: "Dashboard",
  //     label: "/dashboard",
  //     icon: <DashboardFilled className="me-2" />,
  //   },

  //   {
  //     key: "Profile",
  //     label: "/profile",
  //     icon: <UserOutlined className="me-2" />,
  //   },
  //   {
  //     key: "Booking History",
  //     label: `/user/booking-history`,
  //     icon: <HistoryOutlined className="me-2" />,
  //   },
  //   {
  //     key: "Manage User",
  //     label: `/admin/manage-users`,
  //     icon: <UserDeleteOutlined className="me-2" />,
  //   },
  //   {
  //     key: "Manage Service",
  //     label: `/admin/manage-service`,
  //     icon: <CustomerServiceFilled className="me-2" />,
  //   },
  //   {
  //     key: "Manage Booking",
  //     label: `/admin/manage-booking`,
  //     icon: <UserOutlined className="me-2" />,
  //   },
  //   {
  //     key: "Manage Faq",
  //     label: `/admin/manage-faq`,
  //     icon: <QuestionCircleOutlined className="me-2" />,
  //   },
  //   {
  //     key: "Manage Blog",
  //     label: `/admin/manage-blog`,
  //     icon: <CommentOutlined className="me-2" />,
  //   },
  //   {
  //     key: "Make Admin",
  //     label: `/super-admin/make-admin`,
  //     icon: <MacCommandFilled className="me-2" />,
  //   },
  // ];

 
  return (
    <div>
      <div style={{ position: "relative" }} className="logo">
        Dark-I
        <LeftCircleFilled
          onClick={() => setCollapes(true)}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#017eff",
            position: "absolute",
            right: "10px",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="sidebar_link">
        {getMenuLink(info?.role)?.map((item, i) => (
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
