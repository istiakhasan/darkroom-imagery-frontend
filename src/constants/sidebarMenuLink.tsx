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
export enum USER_ROLE {
  USER = "user",
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
}

export const getMenuLink = (role: string) => {
  const commonItems = [
     {
      key: "Home",
      label: "/home",
      icon: <HomeFilled className="me-2" />,
    },
    {
      key: "Profile",
      label: "/profile",
      icon: <UserOutlined className="me-2" />,
    },
  ];
  const superAdminItems = [
    ...commonItems,
    {
      key: "Make Admin",
      label: `/super-admin/make-admin`,
      icon: <MacCommandFilled className="me-2" />,
    },
  ];
  const userItems=[
    ...commonItems,
    {
      key: "Booking History",
      label: `/user/booking-history`,
      icon: <HistoryOutlined className="me-2" />,
    },
  ]
  const adminItems=[
    ...commonItems,
     {
      key: "Manage User",
      label: `/admin/manage-users`,
      icon: <UserDeleteOutlined className="me-2" />,
    },
    {
      key: "Manage Service",
      label: `/admin/manage-services`,
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
  ]

  if (role === USER_ROLE.SUPER_ADMIN) {
    return superAdminItems;
  }
  if(role===USER_ROLE.ADMIN){
    return adminItems
  }

  if(role=== USER_ROLE.USER){
    return userItems
  }
};
