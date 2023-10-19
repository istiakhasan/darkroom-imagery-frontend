"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeFilled
} from "@ant-design/icons";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import DModal from "@/components/ui/DModal";
import DTable from "@/components/ui/DTable";
import { Button, Modal, Row, message } from "antd";
import { useState } from "react";
import { useDeleteaqByIdMutation, useGetAllFaqQuery } from "@/redux/api/faqApi";
import { useGetAllFeedbackQuery } from "@/redux/api/feedbackApi";
import ViewFeedback from "./_view/page";


const ManageFeedback = () => {
  const [page, setPage] = useState<number>(1);
  const [rowDto, setRowDto] = useState({});
  const [size, setSize] = useState<number>(10);
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { data, isLoading } = useGetAllFeedbackQuery(undefined);

  const faqDAta = data?.data;

  const showModal = () => {
    setOpen(true);
  };

  const tableColumn = [
    {
      title: "sl",
      render:(data: any,text: any,i: number)=>i+1
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: 2,
    },
    {
      title: "Message",
      dataIndex: "message",
      key: 22,
    },
    {
      title: "View",
      render: function (abc: any) {
        return (
          <>
            <EyeFilled
              onClick={() => {
                setOpenEditModal(true);
                setRowDto(abc);
              }}
              style={{ cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
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


      {/* Table start */}
      <DTable
        loading={isLoading}
        columns={tableColumn}
        dataSource={faqDAta}
        pageSize={size}
        totalPages={data?.meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        //  onTableChange={onTableChange}
        showPagination={true}
      />

      {/* Table end */}

      {/* <DModal
        open={open}
        handleCancel={() => setOpen(false)}
        title="Create FAQ"
      >
        <CreateFaq setIsOpen={setOpen} />
      </DModal>
       */}
       <DModal
        open={openEditModal}
        handleCancel={() => setOpenEditModal(false)}
        title="View feedback"
      >
        <ViewFeedback rowDto={rowDto}  />
      </DModal>
    </div>
  );
};

export default ManageFeedback;
