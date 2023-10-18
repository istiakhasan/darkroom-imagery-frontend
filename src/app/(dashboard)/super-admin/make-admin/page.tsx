"use client";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import DModal from "@/components/ui/DModal";
import DTable from "@/components/ui/DTable";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "@/redux/api/authApi";
import { useDebounced } from "@/redux/hooks";
import { Avatar, Button, Col, Input, Modal, Row, Select, message } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CreateAdminUser from "./_create/CreaetAdminUser";

const MakeAdmin = () => {
  const query: Record<string, any> = {};
  const [deleteUser] = useDeleteUserMutation();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterOpton, setFilterOption] = useState<string>("");
  const [rowDto, setRowDto] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["role"] = filterOpton || "user";
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  console.log(query, "query");
  const { data, isLoading } = useGetAllUsersQuery({ ...query });
  const usersData = data?.data?.data;
  // make admin
  const [updateUserHandle] = useUpdateUserMutation();
  const makeAdminHandle = async (values: any) => {
    const formData = new FormData();
    const role = { role: "admin" };
    formData.append("data", JSON.stringify(role));
    message.loading("Creating...");
    let payload = {
      data: formData,
      id: values?.id,
    };
    try {
      const res = await updateUserHandle(payload).unwrap();
      console.log(res, "res");
      if (res?.success) {
        message.success("Make Admin  successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const removeAdminHanler = async (values: any) => {
    const formData = new FormData();
    const role = { role: "user" };
    formData.append("data", JSON.stringify(role));
    message.loading("Creating...");
    let payload = {
      data: formData,
      id: values?.id,
    };
    try {
      const res = await updateUserHandle(payload).unwrap();
      console.log(res, "res");
      if (res?.success) {
        message.success("Remove form Admin  successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

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
      title: "Manage Admin",
      render: (data: any) => {
        return (
          <>
            {data?.role === "user" && (
              <Button
                onClick={() => {
                  Modal.confirm({
                    title: "Confirm ",
                    content: "Are you sure  user?",
                    onOk: () => makeAdminHandle(data),
                    footer: (_, { OkBtn, CancelBtn }) => (
                      <>
                        <CancelBtn />
                        <OkBtn />
                      </>
                    ),
                  });
                }}
                size="small"
                type="primary"
              >
                Make admin
              </Button>
            )}{" "}
            {data?.role === "admin" && (
              <Button onClick={() => {
                Modal.confirm({
                  title: "Confirm ",
                  content: "Are you sure  user?",
                  onOk: () => removeAdminHanler(data),
                  footer: (_, { OkBtn, CancelBtn }) => (
                    <>
                      <CancelBtn />
                      <OkBtn />
                    </>
                  ),
                });
              }} size="small" type="primary" danger>
                Remove admin
              </Button>
            )}
          </>
        );
      },
    },
    {
      title: "action",
      render: (abc: any) => {
        return (
          <>
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
        );
      },
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
      <Row gutter={10} className="my-3" justify={"space-between"}>
        <Col lg={10} className="d-flex">
          <div className="me-2">
            Search
            <Input
              className="d-block "
              // style={{ width: "300px" }}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search"
            />
          </div>
          <div>
            Filter by role
            <Select
              className="w-100"
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={(value) => {
                setFilterOption(value);
              }}
              options={[
                {
                  value: "admin",
                  label: "Admin",
                },
                {
                  value: "user",
                  label: "User",
                },
                {
                  value: "super_admin",
                  label: "Super Admin",
                },
              ]}
            />
          </div>
        </Col>
        <Button type="primary" onClick={() => setOpen(true)}>
          Create Admin
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
      <DModal
        open={open}
        handleCancel={() => setOpen(false)}
        title="Create User"
      >
        <CreateAdminUser  setOpen={setOpen}/>
      </DModal>

      {/* Table end */}

      {/* 
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
