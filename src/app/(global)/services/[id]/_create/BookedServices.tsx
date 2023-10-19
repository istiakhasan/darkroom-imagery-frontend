"use client"
import DIDatePicker from "@/components/DDatePicker";
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DFormRate from "@/components/forms/DRate";
import DDateAndTimePicker from "@/components/ui/DDateAndTimePicker";
import { usePostReviewMutation } from "@/redux/api/reviewApi";
import { useBookedServiceMutation } from "@/redux/api/serviceApi";
import { serviceBookedSchema } from "@/schema/schema";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React from "react";

const BookedServices = ({setOpen,serviceId}:{setOpen:any,serviceId:string}) => {
  const [createBooking]=useBookedServiceMutation()
  const userisLoggedIn=isLoggedIn()
  const userInfo:any=getUserInfo()
  const handleStudentSubmit = async (values: any) => {
    const payload={...values}
    payload["serviceId"]=serviceId
    payload["userEmail"]=userInfo?.email
    payload["date"]=new Date()
    payload["status"]="pending"
    message.loading("Creating...");
    try {
      const res = await createBooking(payload).unwrap();
      console.log(res,"res");
      if (res?.success) {
        message.success("Booked successfully!");
        setOpen(false)
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  if(!userisLoggedIn){
    return <><h6>Please Log in to Booked Service</h6></>
  }
  return (
    <DForm submitHandler={handleStudentSubmit} resolver={yupResolver(serviceBookedSchema)}>
  
      <div className="mb-3">
        <DDateAndTimePicker
          name="startTime"
          label="Start Date"
        />
      </div>
      <div className="mb-3">
        <DDateAndTimePicker
          name="endTime"
          label="End Date"
        />
      </div>
      <div className="mb-3">
        <DFormTextArea
          name="remarks"
          label="Remarks"
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

export default BookedServices;
