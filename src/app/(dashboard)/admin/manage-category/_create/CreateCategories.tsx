"use client"
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DImageUpload from "@/components/ui/DImageUpload";
import { useCreateCategoriesMutation } from "@/redux/api/categoryApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, message } from "antd";
import React from "react";

const CreateCategories = ({setOpen}:{setOpen:any}) => {
  const [createCategory]=useCreateCategoriesMutation()
  const userInfo:any=getUserInfo()
  console.log(userInfo,"user");
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    obj["userId"]=userInfo?.userId
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      const res = await createCategory(formData).unwrap();
      console.log(res,"res");
      if (res?.success) {
        message.success("Blog created successfully!");
        setOpen(false)
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <DForm submitHandler={handleStudentSubmit}>
      <div className="mb-3">
        <DFormInput
          name="name"
          label="Category Name"
          placeholder="Type category name"
        />
      </div>
      <div className="mb-3">
        <DImageUpload
          name="file"
        />
      </div>
       <div className="mb-3 text-end">
        <Button htmlType="submit" type="primary">Create</Button>
      </div>
    </DForm>
  );
};

export default CreateCategories;
