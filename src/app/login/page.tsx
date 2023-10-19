"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import { useLoginUserMutation } from "@/redux/api/authApi";
import axios from "axios";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/schema";
const LoginPage = () => {
  const [userLogin]=useLoginUserMutation()
  const router = useRouter();
  const formSubmit=async(data:any)=>{
    try {
      const res = await userLogin({ ...data }).unwrap()
      if (res?.token) {
        router.push("/profile");
        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.token });
    } catch (err: any) {
      console.log(err?.data?.errorMessages,"err")
      if(err?.data?.errorMessages){
        err?.data?.errorMessages?.map((item:any)=>{
          console.log(item?.message,"item");
          message.error(item?.message)
        })
      }
    }
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
       <DForm submitHandler={formSubmit} resolver={yupResolver(loginSchema)}>
         <div
          className="pe-5"
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
              <DFormInput name="email"  label="Number" placeholder="Enter your number" />
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
                  onClick={() => router.push("/register")}
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
