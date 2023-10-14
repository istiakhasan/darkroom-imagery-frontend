import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

const DModal = ({children,open,handleCancel,setOk}:{children:React.ReactNode,open:boolean,handleCancel:()=>void,setOk:()=>void}) => {

  return (
    <>
      <Modal
        open={open}
        title="Title"
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button onClick={()=>setOk()}>Submit</Button>
          </>
        )}
      >
        {children}
      </Modal>
    </>
  );
};

export default DModal;