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
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    const payload = {
      id: rowDto.id,
      data: formData,
    };
    try {
      const res = await updateBlogWithFormData(payload).unwrap();
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
    file: "",
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
