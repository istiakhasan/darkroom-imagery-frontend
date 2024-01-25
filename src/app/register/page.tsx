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
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schema/schema";
import { uploadImageToImagebb } from "@/utils/common";

const RegisterPage = () => {
  const [CreateUserHandler]=useCreateUserMutation()
  const route = useRouter();
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    const formData = new FormData();
    formData.append("image", file as Blob);
    if (obj?.file) {
      let finalImageUrl
      try {
         finalImageUrl=await uploadImageToImagebb(formData) 
         console.log(finalImageUrl,"final image")
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }
      obj["profileImg"] = finalImageUrl;
      delete obj["file"]
    }

    message.loading("Creating...");
    try {
      const res = await CreateUserHandler(obj).unwrap();
      if (res) {
        message.success(res?.message);
        route.push('/login')
      }
    } catch (err: any) {
      if(err?.data?.errorMessages){
        err?.data?.errorMessages?.map((item:any)=>{
          message.error(item?.message)
        })
      }
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
      <DForm submitHandler={handleStudentSubmit} resolver={yupResolver(registerSchema)}>
          <div
          className="pe-5"
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
