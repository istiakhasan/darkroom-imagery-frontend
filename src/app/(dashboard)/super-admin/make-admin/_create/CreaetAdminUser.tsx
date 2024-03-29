"use client";
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DImageUpload from "@/components/ui/DImageUpload";
import DSelectField from "@/components/ui/DSelect";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { Button, message } from "antd";
import React from "react";

const CreateAdminUser = ({ setOpen }: { setOpen: any }) => {
  const [CreateUserHandler] = useCreateUserMutation();
  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      const res = await CreateUserHandler(formData).unwrap();
      if (res?.success) {
        message.success("User created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <DForm submitHandler={handleStudentSubmit}>
      <div className="mb-3">
        <DFormInput name="name" label="Full Name" placeholder="Name" />
      </div>
      <div className="mb-3">
        <DFormInput name="email" label="Email" placeholder="Email" />
      </div>
      <div className="mb-3">
        <DFormInput name="contactNo" label="Phone Number" placeholder="Phone" />
      </div>
      <div className="mb-3">
        <DFormInput
          name="presentAddress"
          label="Present Address"
          placeholder="Present Address"
        />
      </div>
      <div className="mb-3">
        <DSelectField
          name="role"
          label="Role"
          options={[
            {
              label: "Admin",
              value: "admin",
            },
          ]}
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="permanentAddress"
          label="Permanent Address"
          placeholder="Permanent Address"
        />
      </div>
      <div className="mb-3">
        <DFormInput
          name="address"
          label="Secondary Address"
          placeholder="Address Two"
        />
      </div>
      <div className="mb-3">
        <DFormInput name="password" label="Password" placeholder="Password" />
      </div>
      <div className="mb-3">
        <DFormTextArea name="about" label="About" placeholder="About" />
      </div>
      <div className="mb-3">
        <DFormTextArea name="bioData" label="Bio" placeholder="Bio Data" />
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

export default CreateAdminUser;
