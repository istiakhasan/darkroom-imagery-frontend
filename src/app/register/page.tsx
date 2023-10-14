"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DFormInput from "@/components/forms/DFormInput";
import DForm from "@/components/forms/DForm";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";

const RegisterPage = () => {
  const route = useRouter();
  const submitForm=(data:any)=>{
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
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={10}>
      <DForm submitHandler={submitForm}>
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
            Registration
          </h1>
          <div className="pe-5">
            <div className="mb-2">
              <DFormInput name="name" placeholder="Enter your name" size="large" label="Your Full Name" />
            </div>
            <div className="mb-2">
              <DFormInput name="email" placeholder="Enter your email" size="large" label="Email" />
            </div>
            <div className="mb-2">
              <DFormInput name="contactNo" placeholder="Enter your phone" size="large" label="Phone No" />
            </div>
             <div className="mb-2">
              <DFormTextArea name="address" placeholder="Enter your address"  label="Address" />
            </div>
             <div className="mb-2">
              <DFormInput name="password" placeholder="Enter your password" size="large" label="Password" />
            </div>
              <div className="mb-2">
              <DImageUpload name="profileImg"/>
            </div>
           
           
            <div className="mb-2">
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </div>
            <div>
              <p>
                <small>{`Have a account ?`}</small>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => route.push("/login")}
                  className="text-primary"
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </DForm>
      </Col>
    </Row>
  );
};

export default RegisterPage;
