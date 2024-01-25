"use client"
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";
import { useCreateUserMutation, useUpdateUserMutation } from "@/redux/api/authApi";
import { uploadImageToImagebb } from "@/utils/common";
import { Button, message } from "antd";
import React from "react";

const EditUser = ({setOpen,rowDto}:{setOpen:any,rowDto:any}) => {
  const [updateUserHandle]=useUpdateUserMutation()
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    // const file = obj["file"];
    // delete obj["file"];
    // const data = JSON.stringify(obj);
    // const formData = new FormData();
    // formData.append("file", file as Blob);
    // formData.append("data", data);
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
    message.loading("Updating...");
    let payload={
        data:obj,
        id:rowDto?.id
    }
    try {
      const res = await updateUserHandle(payload).unwrap();
      if (res?.success) {
        message.success("User Updated  successfully!");
        setOpen(false)
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues={
    name:rowDto?.name,
    email:rowDto?.email,
    presentAddress:rowDto?.presentAddress,
    permanentAddress:rowDto?.permanentAddress,
    contactNo:rowDto?.contactNo,
    bioData:rowDto?.bioData,
    about:rowDto?.about,
    address:rowDto?.address,
    password:rowDto?.password,
    file:''
  }
  return (
    <DForm submitHandler={handleStudentSubmit} defaultValues={defaultValues}>
      <div className="mb-3">
        <DFormInput
          name="name"
          label="Full Name"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="email"
          label="Email"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="contactNo"
          label="Phone Number"
          placeholder="Phone"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="presentAddress"
          label="Present Address"
          placeholder="Present Address"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="permanentAddress"
          label="Permanent Address"
          placeholder="Permanent Address"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="address"
          label="Secondary Address"
          placeholder="Address Two"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="password"
          label="Password"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <DFormTextArea
          name="about"
          label="About"
          placeholder="About"
        />
      </div>
      <div className="mb-3">
        <DFormTextArea
          name="bioData"
          label="Bio"
          placeholder="Bio Data"
        />
      </div>

      <div className="mb-3">
        <DImageUpload
          name="file"
        />
      </div>
       <div className="mb-3 text-end">
        <Button htmlType="submit" type="primary">Update</Button>
      </div>
    </DForm>
  );
};

export default EditUser;
