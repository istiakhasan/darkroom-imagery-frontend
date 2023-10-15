import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import { useAddFaqMutation, useUpdateFaqByIdMutation } from "@/redux/api/faqApi";
import { Button, message } from "antd";
import React from "react";

const EditFaq = ({setIsOpen,rowDto}:{setIsOpen:any,rowDto:any }) => {
  const [updateFaq] = useUpdateFaqByIdMutation();
  const submitForm = async (data: any) => {
   const payload={
    id:rowDto.id,
    data

   }
    message.loading("Updating.....");
    try {
      const res = await updateFaq(payload).unwrap();
      console.log(res,"res");
      if (res?.success) {
        message.success("Updated  successfully");
        setIsOpen(false)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const defaultValue={
    question:rowDto.question,
    answer:rowDto.answer,
  }
  console.log(rowDto,defaultValue,"default values");

  return (
    <DForm submitHandler={submitForm} defaultValues={defaultValue}>
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

export default EditFaq;
