"use client";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import DModal from "@/components/ui/DModal";
import DTable from "@/components/ui/DTable";
import { Button, Image, Modal, Row, message } from "antd";
import { useState } from "react";
import CreateBlog from "./_create/CreateBlog";
import { useDeleteaqBlogByIdMutation, useGetAllBlogByAuthorEmailQuery } from "@/redux/api/blogApi";
import dayjs from "dayjs";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import EditBlog from "./_create/EditBlog";
const ManageBlog = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [rowDto, setRowDto] = useState({});
  const [size, setSize] = useState<number>(10);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [deleteBlogHandler]=useDeleteaqBlogByIdMutation()
  const { data, isLoading } = useGetAllBlogByAuthorEmailQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });
  const faqDAta = data?.data?.data;

  const showModal = () => {
    setOpen(true);
  };
  const handleDelte =async (id:string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteBlogHandler({id:id}).unwrap();
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
      //@ts-ignore
      render: (text, record, index) => index + 1
    },
    {
      title: "Image",
      key: 1,
      render: function (blogDto: any) {
        console.log(blogDto, "blog dto");
        return (
          <Image
            style={{ borderRadius: "50%" }}
            width={20}
            height={20}
            src={blogDto?.image}
            alt=""
          />
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: 2,
    },
    {
      title: "Description",
      dataIndex: "description",
      key:12,
    },
    {
      title: "CreatedAt",
      render: function (data: any) {
        return data && dayjs(data?.createdAt).format("MMM D, YYYY hh:mm A");
      },
      key:12,
    },
    {
      title: "Action",
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

            <EditOutlined
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
            label: "Manage Services",
            link: "/admin/manage-services",
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

      <DModal
        open={open}
        handleCancel={() => setOpen(false)}
        title="Create Blog"
      >
        <CreateBlog setOpen={setOpen} />
      </DModal>
      <DModal
        open={openEditModal}
        handleCancel={() => setOpenEditModal(false)}
        title="Edit Blog"
      >
        <EditBlog rowDto={rowDto} setOpen={setOpenEditModal} />
      </DModal>
    </div>
  );
};

export default ManageBlog;
