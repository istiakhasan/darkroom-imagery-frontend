import React, { useState } from "react";
import { Button, Modal, Space } from "antd";

const DModal = ({
  children,
  open,
  handleCancel,
  setOk,
  title,
  width
}: {
  children: React.ReactNode;
  open: boolean;
  handleCancel: () => void;
  setOk?: () => void;
  title: string;
  width?:string
}) => {
  return (
    <>
      <Modal
        open={open}
        title={title}
        onCancel={handleCancel}
        width={width?width:"500px"}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>{setOk && <Button onClick={() => setOk()}>Submit</Button>}</>
        )}
      >
        {children}
      </Modal>
    </>
  );
};

export default DModal;
