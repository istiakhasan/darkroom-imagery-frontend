"use client"
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";
import { useUpdateProfileMutation } from "@/redux/api/authApi";
import { uploadImageToImagebb } from "@/utils/common";
import { Button, Col, Row, message } from "antd";
import React from "react";

const EditProfile = ({ profileInfo,setOpenProfileEditModal }: { profileInfo: any,setOpenProfileEditModal:any }) => {
  const [updateProfile]=useUpdateProfileMutation()
    const submitForm = async(values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"]
    const formData = new FormData();
    formData.append('image',file)
    if (values?.file instanceof File) {
      let finalImageUrl
      try {
         finalImageUrl=await uploadImageToImagebb(formData) 
         console.log(finalImageUrl,"final image")
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }
      obj["profileImg"] = finalImageUrl;
    }

    const payload = {
      data: obj,
    };
    try {
      const res =await  updateProfile(payload).unwrap();
      if (res?.success) {
        message.success("Blog Updated successfully!");
        setOpenProfileEditModal(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const defaultValues={
    name:profileInfo?.name,
    email:profileInfo?.email,
    presentAddress:profileInfo?.presentAddress,
    permanentAddress:profileInfo?.permanentAddress,
    contactNo:profileInfo?.contactNo,
    bioData:profileInfo?.bioData,
    about:profileInfo?.about,
    file:''
  }
  return (
    <DForm submitHandler={submitForm} defaultValues={defaultValues}>
      <Row gutter={10}>
        <Col lg={12} className="mb-3">
          <DFormInput name="name" label="Name" placeholder="Name" />
        </Col>
        <Col lg={12} className="mb-3">
          <DFormInput name="email" label="Email" placeholder="Email" />
        </Col>
        <Col lg={12} className="mb-3">
          <DFormInput
            name="presentAddress"
            label="Present Address"
            placeholder="Present Address"
          />
        </Col>
        <Col lg={12} className="mb-3">
          <DFormInput
            name="permanentAddress"
            label="Permanent Address"
            placeholder="Permanent Address"
          />
        </Col>
        <Col lg={12} className="mb-3">
          <DFormInput
            name="contactNo"
            label="Contact No"
            placeholder="Contact No"
          />
        </Col>
        <Col offset={12}></Col>
        <Col lg={12} className="mb-3">
          <DFormTextArea
            name="bioData"
            label="Bio Data"
            rows={3}
            placeholder="Bio Data"
          />
        </Col>
        <Col lg={12} className="mb-3">
          <DFormTextArea
            name="about"
            label="About"
            rows={3}
            placeholder="About"
          />
        </Col>
        <Col>
        <DImageUpload name="file" />
        </Col>
      </Row>

      <div className="mb-3 text-end">
        <Button htmlType="submit" type="primary">
          Update
        </Button>
      </div>
    </DForm>
  );
};

export default EditProfile;
