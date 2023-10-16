"use client";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import DModal from "@/components/ui/DModal";
import DTable from "@/components/ui/DTable";
import { useDeleteUserMutation, useGetAllUsersQuery } from "@/redux/api/authApi";
import { useDebounced } from "@/redux/hooks";
import { Avatar, Button, Input, Modal, Row, message } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const MakeAdmin = () => {
  const query: Record<string, any> = {};
  const [deleteUser]=useDeleteUserMutation()
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [rowDto, setRowDto] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading } = useGetAllUsersQuery({...query});
  const usersData = data?.data?.data;
//   delete user
const handleDelte = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteUser({ id: id }).unwrap();
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
      render: (data: any, text: any, i: number) => i + 1,
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "Image",
      render: (data: any) => {
        return (
          <>
            <Avatar src={data?.profileImg} shape="square" size="small" />
          </>
        );
      },
    },
    {
      title: "Mobile",
      dataIndex: "contactNo",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Present Adress",
      dataIndex: "presentAddress",
    },
    {
      title: "Permanent Adress",
      dataIndex: "permanentAddress",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "action",
      render:(abc:any)=>{
        return <>
            <DeleteOutlined
              onClick={() => {
                Modal.confirm({
                  title: "Confirm ",
                  content: "Are you sure to delete this user?",
                  onOk: () => handleDelte(abc?.id),
                  footer: (_, { OkBtn, CancelBtn }) => (
                    <>
                      <CancelBtn />
                      <OkBtn />
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
      }
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  return (
    <div>
      <DBreadCrumb
        items={[
          {
            label: "Manage Admin",
            link: "/admin/manage-users",
          },
        ]}
      />
      <Row justify={"end"}></Row>
      <Row className="my-3" justify={"space-between"}>
        <Input
          className="d-block"
          style={{ width: "200px" }}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search"
        />
        <Button type="primary" onClick={() => setOpen(true)}>
          Create
        </Button>
      </Row>

      {/* Table start */}
      <DTable
        loading={isLoading}
        columns={tableColumn}
        dataSource={usersData}
        pageSize={size}
        totalPages={data?.meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
         onTableChange={onTableChange}
        showPagination={true}
      />

      {/* Table end */}

      {/* <DModal
        open={open}
        handleCancel={() => setOpen(false)}
        title="Create User"
      >
        <CreateUser  setOpen={setOpen}/>
      </DModal>
      <DModal
        open={openEditModal}
        handleCancel={() => setOpenEditModal(false)}
        title="Edit User"
      >
        <EditUser rowDto={rowDto} setOpen={setOpenEditModal} />
      </DModal> */}
    </div>
  );
};

export default MakeAdmin;
