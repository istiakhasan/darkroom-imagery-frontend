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


const ManageFeedback = () => {
  const [page, setPage] = useState<number>(1);
  const [rowDto, setRowDto] = useState({});
  const [size, setSize] = useState<number>(10);
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { data, isLoading } = useGetAllFeedbackQuery(undefined);
  const [deleteFaqHandler]=useDeleteaqByIdMutation()
  const faqDAta = data?.data;
  console.log(data,"data");

  const showModal = () => {
    setOpen(true);
  };
  const handleDelte =async (id:string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteFaqHandler({id:id}).unwrap();
      console.log(res,"res");
      if (res?.success) {
        message.success("Deleted  successfully");
      }
    } catch (error) {
      console.log(error);
    }

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
            <DeleteOutlined
              onClick={() => {
                Modal.confirm({
                  title: "Confirm ",
                  content: "Are you sure to delete this item?",
                  onOk: ()=>handleDelte(abc?.id),
                  footer: (_, { OkBtn, CancelBtn }) => (
                    <>
                      <CancelBtn />
                      <OkBtn   />
                    </>
                  ),
                });
              }}
              style={{ cursor: "pointer" }}
              className="text-danger me-2"
            />

            <EyeFilled
            //   onClick={() => {
            //     setOpenEditModal(true);
            //     setRowDto(abc);
            //   }}
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
      <Row justify={"end"}>
        <Button type="primary" onClick={showModal}>
          Create
        </Button>
      </Row>

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
      <DModal
        open={openEditModal}
        handleCancel={() => setOpenEditModal(false)}
        title="Edit FAQ"
      >
        <EditFaq rowDto={rowDto} setIsOpen={setOpenEditModal} />
      </DModal> */}
    </div>
  );
};

export default ManageFeedback;
