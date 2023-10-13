import { Menu } from "antd";
import Link from "next/link";
const MenuBar = () => {

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      expandIcon={false}
      items={[
        {
          key: 1,
          label: <Link href={"/home"}>Home</Link>,
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
      ]}
    />
  );
};

export default MenuBar;
