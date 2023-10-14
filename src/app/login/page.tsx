"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";

const LoginPage = () => {
  const route = useRouter();
  const formSubmit=(data:any)=>{
    console.log(data);
  }
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={8} lg={10}>
       <DForm submitHandler={formSubmit}>
         <div
          className="pe-5"
          style={
            {
              // border:"1px solid black",
              // padding:"30px",
              // borderRadius:"4px"
            }
          }
        >
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            Sign In
          </h1>
          <div className="pe-5">
            <div className="mb-2">
              <DFormInput name="number" label="Number" placeholder="Enter your number" />
            </div>
            <div className="mb-2">
              <DFormInput type="password" name="password" label="Password" placeholder="Enter your password" />
            </div>
            <div className="mb-2">
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </div>
            <div>
              <p>
                <small>{`Don't Have a account ?`}</small>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => route.push("/register")}
                  className="text-primary"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
       </DForm>
      </Col>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
    </Row>
  );
};

export default LoginPage;
