import React, { useState } from "react";
import { Button, Modal, Space } from "antd";

const DModal = ({
  children,
  open,
  handleCancel,
  setOk,
  title,
}: {
  children: React.ReactNode;
  open: boolean;
  handleCancel: () => void;
  setOk?: () => void;
  title: string;
}) => {
  return (
    <>
      <Modal
        open={open}
        title={title}
        onCancel={handleCancel}
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
