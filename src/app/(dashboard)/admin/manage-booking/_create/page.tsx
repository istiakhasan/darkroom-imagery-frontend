import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DDateAndTimePicker from "@/components/ui/DDateAndTimePicker";
import DSelectField from "@/components/ui/DSelect";
import { useManageBookingServiceByIdMutation } from "@/redux/api/serviceApi";
import { Button, message } from "antd";
import React from "react";

const ManageUserBooking = ({
  rowDto,
  setOpen,
}: {
  rowDto: any;
  setOpen: any;
}) => {
  const [manageUserBooking] = useManageBookingServiceByIdMutation();
  const manageBooking = async (values: any) => {
    const payload = {
      id: rowDto?.id,
      data: values,
    };
    message.loading("Creating...");
    try {
      const res = await manageUserBooking(payload).unwrap();
      if (res?.success) {
        message.success("Booking  approve successfully");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <DForm submitHandler={manageBooking}>
        <div className="mb-3">
          <DSelectField
            name="status"
            options={[
              {
                label: "pending",
                value: "pending",
              },
              {
                label: "cofirm",
                value: "cofirm",
              },
              {
                label: "Cancel",
                value: "reject",
              },
            ]}
          />
        </div>
        <div className="mb-3">
          <DDateAndTimePicker name="startTime" label="Start Date" />
        </div>
        <div className="mb-3">
          <DDateAndTimePicker name="endTime" label="End Date" />
        </div>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </DForm>
    </div>
  );
};

export default ManageUserBooking;
