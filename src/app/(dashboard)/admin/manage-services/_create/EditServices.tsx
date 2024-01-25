"use client";
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
import { useUpdateServiceByIdMutation } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import { uploadImageToImagebb } from "@/utils/common";
const EditServices = ({ setOpen, rowDto }: { setOpen: any; rowDto: any }) => {
  const { data, isLoading } = useGetAllCategoriesLabelQuery(undefined);
  const categoryData = data?.data;
  const [updateService] = useUpdateServiceByIdMutation();

  const userInfo: any = getUserInfo();
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    
    if (obj?.dateRange?.length > 0) {
      obj["availability"] = `${dayjs(obj.dateRange[0]).format(
        "DD MMMM YYYY hh:mm A"
      )}-${dayjs(obj.dateRange[1]).format("DD MMMM YYYY hh:mm A")}`;
    }

    obj["userId"] = userInfo.userId;
    obj["price"] = Number(obj.price);
    delete obj["dateRange"];
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
      obj["service_img"] = finalImageUrl;
      delete obj["file"]
    }
    message.loading("Updating...");
    try {
      const res = await updateService({
        data: obj,
        id: rowDto?.id,
      }).unwrap();
      if (res?.success) {
        message.success("Services Updated successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    serviceName: rowDto?.serviceName,
    price: rowDto?.price,
  };
  console.log(defaultValues,"default values")
  return (
    <DForm submitHandler={handleStudentSubmit} defaultValues={defaultValues}>
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
              label: "Upcomming",
              value: "upcomming",
            },
            {
              label: "Hot",
              value: "hot",
            },
            {
              label: "Tranding",
              value: "tranding",
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
        <DateRangePicker name="dateRange" label="To" />
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

export default EditServices;
