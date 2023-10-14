"use client";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import DModal from "@/components/ui/DModal";
import DTable from "@/components/ui/DTable";
import { Button, Row } from "antd";
import { useState } from "react";
import CreateServices from "./_create/CreateServices";


const ManageServices = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    console.log("done");
    
  };
  const tableColumn = [
    {
      title: "sl",
      dataIndex: "sl",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "age",
      dataIndex: "age",
    },
    {
      title: "action",
      dataIndex: "action",
    },
  ];

  const dataSlurce: any = [];
  return (
    <div>
      <DBreadCrumb
        items={[
          {
            label: "Manage Faq",
            link: "/admin/manage-faq",
          },
        ]}
      />
      <Row justify={"end"}>
        <Button type="primary" onClick={showModal}>
          Create
        </Button>
      </Row>

      {/* Table start */}
      <DTable dataSource={dataSlurce} columns={tableColumn} />

      {/* Table end */}

      <DModal
        // setOk={handleSubmit}
        open={open}
        handleCancel={() => setOpen(false)}
        title="Create Services"
      >
        <CreateServices />
      </DModal>
    </div>
  );
};

export default ManageServices;
