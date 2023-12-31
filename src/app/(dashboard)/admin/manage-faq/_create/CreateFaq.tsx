import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import { useAddFaqMutation } from "@/redux/api/faqApi";
import { Button, message } from "antd";
import React from "react";

const CreateFaq = ({setIsOpen}:{setIsOpen:any}) => {
  const [createFaq] = useAddFaqMutation();
  const submitForm = async (data: any) => {
    message.loading("Creating.....");
    try {
      const res = await createFaq(data).unwrap();
      if (res?.success) {
        message.success("Created successfully");
        setIsOpen(false)
      }
    } catch (error) {
      console.log(error);
    }
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
        <Button htmlType="submit" type="primary">
          Create
        </Button>
      </div>
    </DForm>
  );
};

export default CreateFaq;
