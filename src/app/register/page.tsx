"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DFormInput from "@/components/forms/DFormInput";
import DForm from "@/components/forms/DForm";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";
import { useCreateUserMutation } from "@/redux/api/authApi";

const RegisterPage = () => {
  const [CreateUserHandler]=useCreateUserMutation()
  const route = useRouter();
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      const res = await CreateUserHandler(formData).unwrap();
      console.log(res,"res");
      if (res?.success) {
        message.success(res?.message);
        route.push('/login')
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
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
      <DForm submitHandler={handleStudentSubmit}>
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
              <DFormTextArea name="presentAddress" placeholder="Enter your password" rows={3} label="Present Address" />
            </div>
             <div className="mb-2">
              <DFormTextArea name="permanentAddress" placeholder="Enter your password" rows={3} label="Permanent Address" />
            </div>
             <div className="mb-2">
              <DFormTextArea name="about" placeholder="About" rows={3} label="About" />
            </div>
             <div className="mb-2">
              <DFormTextArea name="bioData" placeholder="About" rows={3} label="Bio" />
            </div>
              <div className="mb-2">
              <DImageUpload name="file"/>
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
