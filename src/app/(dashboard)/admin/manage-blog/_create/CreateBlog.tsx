"use client"
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { blogSchema } from "@/schema/schema";
import { uploadImageToImagebb } from "@/utils/common";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React from "react";

const CreateBlog = ({setOpen}:{setOpen:any}) => {
  const [addBlogWithFormData]=useAddBlogMutation()
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    // const file = obj["file"];
    // delete obj["file"];
    // const data = JSON.stringify(obj);
    // const formData = new FormData();
    // formData.append("file", file as Blob);
    // formData.append("data", data);
    if (obj?.file) {
      const file = obj["file"];
      const formData = new FormData();
      formData.append('image',file)
      let finalImageUrl
      try {
         finalImageUrl=await uploadImageToImagebb(formData) 
         console.log(finalImageUrl,"final image")
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }
      obj["image"] = finalImageUrl;
      delete obj["file"]
    }
    message.loading("Creating...");
    try {
      const res = await addBlogWithFormData(obj).unwrap();
      if (res?.success) {
        message.success("Blog created successfully!");
        setOpen(false)
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <DForm submitHandler={handleStudentSubmit} resolver={yupResolver(blogSchema)}>
      <div className="mb-3">
        <DFormInput
          name="title"
          label="Title"
          placeholder="Type blog title"
        />
      </div>
      <div className="mb-3">
        <DFormTextArea
          name="description"
          label="Description"
          rows={6}
          placeholder="Type description"
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

export default CreateBlog;
