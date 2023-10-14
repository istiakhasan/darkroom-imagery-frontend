"use client";
import DModal from "@/components/ui/DModal";
import { Button } from "antd";
import { useState } from "react";

const ManageFaq = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    console.log("done");
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Create
      </Button>

      <DModal
        setOk={handleSubmit}
        open={open}
        handleCancel={() => setOpen(false)}
      >
        <h1>Hi i am custom modal</h1>
      </DModal>
    </div>
  );
};

export default ManageFaq;
