"use client"
import DForm from "@/components/forms/DForm";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DFormRate from "@/components/forms/DRate";
import { usePostReviewMutation } from "@/redux/api/reviewApi";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Button, message } from "antd";
import React from "react";

const CreateReview = ({setOpen,serviceId}:{setOpen:any,serviceId:string}) => {
  const [createReview]=usePostReviewMutation()
  const userisLoggedIn=isLoggedIn()
  const userInfo:any=getUserInfo()
  const handleStudentSubmit = async (values: any) => {
    const payload={...values}
    payload["serviceId"]=serviceId
    payload["userEmail"]=userInfo?.email
    message.loading("Creating...");
    try {
      const res = await createReview(payload).unwrap();
      console.log(res,"res");
      if (res?.success) {
        message.success("Review post successfully!");
        setOpen(false)
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  if(!userisLoggedIn){
    return <><h6>Please Log in to submit review</h6></>
  }
  return (
    <DForm submitHandler={handleStudentSubmit}>
  
      <div className="mb-3">
        <DFormRate
          name="rating"
          label="Rating"
          placeholder="Type category name"
        />
      </div>
      <div className="mb-3">
        <DFormTextArea
          name="review"
          label="Post Review"
          rows={4}
          placeholder="Type category name"
        />
      </div>

       <div className="mb-3 text-end">
        <Button htmlType="submit" type="primary">Post</Button>
      </div>
    </DForm>
  );
};

export default CreateReview;
