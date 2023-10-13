"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login.svg";
import Image from "next/image";

const LoginPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={8} lg={10}>
        <div className="pe-5" style={{
          // border:"1px solid black",
          // padding:"30px",
          // borderRadius:"4px"
        }}>
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            Sign In
          </h1>
          <div className="pe-5">

            <div className="mb-2">
              <Input size="large" placeholder="Enter Your Number" />
            </div>
             <div className="mb-2">
              <Input size="large" placeholder="Enter Your Password" />
            </div>
            <div>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
    </Row>
  );
};

export default LoginPage;
