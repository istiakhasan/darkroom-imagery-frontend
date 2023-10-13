"use client"
import {  Layout } from 'antd';
import MenuBar from '../../components/ui/MenuBar';
import Footer from '@/components/ui/home/Footer';
const { Header, Content } = Layout;

const GlobalLayout = ({children}:{children:React.ReactNode}) => {


  return (
    <Layout className="layout">
      <Header  style={{ display: 'flex', alignItems: 'center',position:"sticky",top:0 ,zIndex:"1000"}}>
        <div className="demo-logo" />
        <MenuBar />
      </Header>
      <Content style={{ padding: '0 50px',minHeight:"100vh" }}>
        <div className="site-layout-content" >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default GlobalLayout;