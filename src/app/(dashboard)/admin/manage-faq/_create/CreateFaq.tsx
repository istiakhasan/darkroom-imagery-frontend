import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import { Button } from "antd";
import React from "react";

const CreateFaq = () => {
  const submitForm = (data: any) => {
    console.log(data);
  };
  return (
    <DForm submitHandler={submitForm}>
      <div className="mb-3">
        <DFormInput
          name="question"
          label="Question"
          placeholder="Type question"
        />
      </div>
      <div className="mb-3">
        <DFormTextArea
          name="answer"
          label="Question"
          rows={6}
          placeholder="Type question"
        />
      </div>
       <div className="mb-3 text-end">
        <Button htmlType="submit" type="primary">Create</Button>
      </div>
    </DForm>
  );
};

export default CreateFaq;
