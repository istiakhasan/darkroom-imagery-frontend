import { Menu } from "antd";
import Link from "next/link";
const MenuBar = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      
      defaultSelectedKeys={["2"]}
      items={[
        {
          key: 1,
          label: <Link href={"/home"}>Home</Link>,
        },
        {
          key: 2,
          label: "FAQ",
        },
        {
          key: 3,
          label: <Link href={"/feedback"}>Feedback</Link>,
        },
        {
          key: 4,
          label: <Link href={"/blog"}>Blog</Link>,
        },
      ]}
    />
  );
};

export default MenuBar;
