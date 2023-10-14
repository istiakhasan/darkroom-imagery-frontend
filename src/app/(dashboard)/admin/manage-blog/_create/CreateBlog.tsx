import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";
import { Button } from "antd";
import React from "react";

const CreateBlog = () => {
  const submitForm = (data: any) => {
    console.log(data);
  };
  return (
    <DForm submitHandler={submitForm}>
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
          name="image"
        />
      </div>
       <div className="mb-3 text-end">
        <Button htmlType="submit" type="primary">Create</Button>
      </div>
    </DForm>
  );
};

export default CreateBlog;
