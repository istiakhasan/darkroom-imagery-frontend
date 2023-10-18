"use client"
import DIDatePicker from "@/components/DDatePicker";
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormSelect from "@/components/forms/DFormSelect";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DTimePicker from "@/components/forms/DTimePicker";
import DImageUpload from "@/components/ui/DImageUpload";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { Button, DatePicker, message } from "antd";
import React from "react";
import dayjs from "dayjs";
import DateRangePicker from "@/components/ui/RangePicker";
import { useGetAllCategoriesLabelQuery } from "@/redux/api/categoryApi";
import { useAddServicesMutation } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
const CreateService = ({setOpen}:{setOpen:any}) => {
  const {data,isLoading}=useGetAllCategoriesLabelQuery(undefined)
  const categoryData=data?.data
  const { RangePicker } = DatePicker;
  const [addServicesWithFormData]=useAddServicesMutation()
 
  const userInfo:any=getUserInfo()
  console.log(userInfo,"user info");
  const handleStudentSubmit = async (values: any) => {
    console.log(userInfo,"user");
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    obj["availability"]=`${dayjs(obj.dateRange[0]).format('DD MMMM YYYY hh:mm A')}-${dayjs(obj.dateRange[1]).format('DD MMMM YYYY hh:mm A')}`
    obj["userId"]=userInfo.userId
    obj["price"]=Number(obj.price)
    delete obj["dateRange"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      const res = await addServicesWithFormData(formData).unwrap();
      console.log(res,"res");
      if (res?.success) {
        message.success("Services created successfully!");
        setOpen(false)
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <DForm submitHandler={handleStudentSubmit} >
      <div className="mb-3">
        <DFormInput
          name="serviceName"
          label="Service Name"
          placeholder="service name"
        />
      </div>
     
     
      <div className="mb-3">
        <DFormSelect
          name="categoryId"
          label="Category Id"
          options={categoryData}
        />
      </div>
      <div className="mb-3">
        <DFormSelect
          name="status"
          label="Service Status"
          options={[
            {
              label:"Upcomming",
              value:"upcomming"
            },
            {
              label:"Hot",
              value:"hot"
            },
            {
              label:"Tranding",
              value:"tranding"
            },
          ]}
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="price"
          label="Service Price"
          placeholder="service price"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="location"
          label="Location"
          placeholder="service location"
        />
      </div>
      
      
      <div className="mb-3">
        <DateRangePicker
          name="dateRange"
          label="To"
        />
      </div>
      <div className="mb-3">
        <DFormTextArea
          name="service_desc"
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

export default CreateService;
