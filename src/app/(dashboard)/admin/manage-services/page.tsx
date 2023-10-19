"use client";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import DModal from "@/components/ui/DModal";
import DTable from "@/components/ui/DTable";
import { Button, Image, Input, Modal, Row, Tooltip, message } from "antd";
import { useState } from "react";
import {
  useDeleteaqBlogByIdMutation,
  useGetAllBlogByAuthorEmailQuery,
} from "@/redux/api/blogApi";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import CreateServices from "./_create/CreateServices";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
const ManageBlog = () => {
  const query: Record<string, any> = {};
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [rowDto, setRowDto] = useState({});
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [deleteBlogHandler] = useDeleteaqBlogByIdMutation();
  const [searchTerm, setSearchTerm] = useState<string>("");
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
  const { data, isLoading } = useGetAllServicesQuery(
    { ...query },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );
  const faqDAta = data?.data?.data;

  const showModal = () => {
    setOpen(true);
  };
  const handleDelte = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteBlogHandler({ id: id }).unwrap();
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
      render: (text, record, index) => index + 1,
    },
    {
      title: "Image",
      key: 1,
      render: function (blogDto: any) {
        return (
          <Image
            style={{ borderRadius: "50%" }}
            width={20}
            height={20}
            src={blogDto?.service_img}
            alt=""
          />
        );
      },
    },
    {
      title: "Title",
      dataIndex: "serviceName",
      key: 2,
    },
    {
      title: "Description",
      key: 12,
      width: "400px",
      render: function (data: any) {
        return (
          <Tooltip
            placement="top"
            title={data?.service_desc?.length > 100 ? data?.service_desc : ""}
          >
            {data?.service_desc?.length > 100
              ? `${data?.service_desc?.slice(0, 100)}...`
              : data?.service_desc?.length}
          </Tooltip>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: 212,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: 2212,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: 2122,
    },
    {
      title: "availability",
      dataIndex: "availability",
      key: 1111,
    },
    {
      title: "CreatedAt",
      render: function (data: any) {
        return data && dayjs(data?.createdAt).format("MMM D, YYYY hh:mm A");
      },
      key: 112,
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
      <Row className="my-3" justify={"space-between"}>
      <Input
            className="d-block"
            style={{ width: "200px" }}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search"
          />
          <Button type="primary" onClick={showModal}>
            Create
          </Button>
          
        
      </Row>


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



      <DModal
        open={open}
        handleCancel={() => setOpen(false)}
        title="Create Services"
      >
        <CreateServices setOpen={setOpen} />
      </DModal>
      {/* <DModal
        open={openEditModal}
        handleCancel={() => setOpenEditModal(false)}
        title="Edit Blog"
      >
        <EditBlog rowDto={rowDto} setOpen={setOpenEditModal} />
      </DModal> */}
    </div>
  );
};

export default ManageBlog;
