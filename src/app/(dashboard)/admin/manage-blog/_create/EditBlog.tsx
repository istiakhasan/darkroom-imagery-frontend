"use client";
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";
import {
  useAddBlogMutation,
  useUpdateBlogByIdMutation,
} from "@/redux/api/blogApi";
import { Button, message } from "antd";
import React from "react";

const EditBlog = ({ setOpen, rowDto }: { setOpen: any; rowDto: any }) => {
  const [updateBlogWithFormData] = useUpdateBlogByIdMutation();
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    let formData = new FormData();
    console.log(obj,"obj")
    if (obj["file"]) {
      const file = obj["file"];
      delete obj["file"];
      formData.append("file", file as Blob);
    }
    const data = JSON.stringify(obj);
    formData.append("data", data);
    message.loading("Creating...");
    const payload = {
      id: rowDto.id,
      data: formData,
    };
    try {
      const res = await updateBlogWithFormData(payload).unwrap();
      console.log(res, "res");
      if (res?.success) {
        message.success("Blog Updated successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValue = {
    title: rowDto?.title,
    description: rowDto?.description,
  };
  return (
    <DForm submitHandler={handleStudentSubmit} defaultValues={defaultValue}>
      <div className="mb-3">
        <DFormInput name="title" label="Title" placeholder="Type blog title" />
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
        <DImageUpload name="file" />
      </div>
      <div className="mb-3 text-end">
        <Button htmlType="submit" type="primary">
          Create
        </Button>
      </div>
    </DForm>
  );
};

export default EditBlog;
