"use client";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import DModal from "@/components/ui/DModal";
import DTable from "@/components/ui/DTable";
import {
  Badge,
  Button,
  Image,
  Input,
  Modal,
  Row,
  Tooltip,
  message,
} from "antd";
import { useState } from "react";

import {
  useDeleteaqBlogByIdMutation,
  useGetAllBlogByAuthorEmailQuery,
} from "@/redux/api/blogApi";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { useDebounced } from "@/redux/hooks";
import { useGetAllBookedServiceByEmailQuery } from "@/redux/api/serviceApi";
import ManageUserBooking from "./_create/page";
const ManageBooking = () => {
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
  const { data, isLoading } = useGetAllBookedServiceByEmailQuery(
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
      title: "Service Image",
      key: 1,
      render: function (data: any) {
        return (
          <Image
            style={{ borderRadius: "50%" }}
            width={20}
            height={20}
            src={data?.service?.service_img}
            alt=""
          />
        );
      },
    },
    {
      title: "Service Name",
      render: function (data: any) {
        return <span> {data?.service?.serviceName}</span>;
      },
      key: 2,
    },
    {
      title: "Service Name",
      render: function (data: any) {
        return <span> {data?.service?.serviceName}</span>;
      },
      key: 2,
    },
    {
      title: "Customer Name",
      render: function (data: any) {
        return <span> {data?.user?.name}</span>;
      },
      key: 2332,
    },
    {
      title: "Start Date",
      render: function (data: any) {
        return (
          <span> {dayjs(data?.startTime).format("YYYY-MM-DD HH-mm")}</span>
        );
      },
      key: 232,
    },
    {
      title: "End Date",
      render: function (data: any) {
        return <span> {dayjs(data?.endTime).format("YYYY-MM-DD HH-mm")}</span>;
      },
      key: 2321,
    },
    {
      title: "Location",
      render: function (data: any) {
        return <span> {data?.service?.location}</span>;
      },
      key: 232,
    },
    {
      title: "Description",
      key: 12,
      width: "300px",
      render: function (data: any) {
        return (
          <Tooltip
            placement="top"
            title={
              data?.service?.service_desc?.length > 100
                ? data?.service?.service_desc
                : ""
            }
          >
            {data?.service?.service_desc?.length > 100
              ? `${data?.service?.service_desc?.slice(0, 100)}...`
              : data?.service.service_desc?.length}
          </Tooltip>
        );
      },
    },
    {
      title: "CreatedAt",
      render: function (data: any) {
        return data && dayjs(data?.createdAt).format("MMM D, YYYY hh:mm A");
      },
      key: 12,
    },
    {
      title: "Status",
      render: function (data: any) {
        return (
          <>
            {data?.isCancel?<Badge count={"Order Cancel By user"}   />:<>
            
            {data.status === "pending" && (
              <Badge count={data?.status} showZero color="#faad14" />
            )}
            {data.status === "cofirm" && (
              <Badge count={data?.status} showZero color="#52c41a" />
            )}
            {data.status === "reject" && (
              <Badge count={data?.status}   />
            )}
             </>}
           
          </>
        );
      },
      key: 12,
    },
    {
      title: "Action",
      render: function (abc: any) {
        return (
          <>
            {/* <DeleteOutlined
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
            /> */}
            {abc?.isCancel ?<Button disabled type="primary">Manage Booking</Button>:<Button  onClick={() => {
                setOpenEditModal(true);
                setRowDto(abc);
              }}  type="primary">Manage Booking</Button>}
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
      <Row className="my-3" justify={"end"}>
        <Input
          className="d-block"
          style={{ width: "200px" }}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search"
        />

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

      {/* <DModal
        open={open}
        handleCancel={() => setOpen(false)}
        title="Create Blog"
      >
        <CreateBlog setOpen={setOpen} />
      </DModal>
     */}

      <DModal
        open={openEditModal}
        handleCancel={() => setOpenEditModal(false)}
        title="Manage Booking"
      >
        <ManageUserBooking rowDto={rowDto} setOpen={setOpenEditModal} />
      </DModal> 
    </div>
  );
};

export default ManageBooking;
