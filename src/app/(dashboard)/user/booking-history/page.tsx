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
import { useGetAllBookedServiceByEmailQuery, useManageBookingServiceByIdMutation } from "@/redux/api/serviceApi";
const BookingHistory = () => {
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
  const [cancelBooking]=useManageBookingServiceByIdMutation()
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
      refetchOnReconnect:true
    }
  );
  const faqDAta = data?.data?.data;

  const showModal = () => {
    setOpen(true);
  };
  const handleDelte = async (id: string) => {
    const payload={
      id,
      data:{
        isCancel:true
      }
    }
    message.loading("Canceling.....");
    try {
      const res = await cancelBooking(payload).unwrap();
      if (res?.success) {
        message.success("Service Cancel successfully");
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
      title: "Price",
      render: function (data: any) {
        return <span> {data?.service?.price}</span>;
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
      width: "400px",
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
          {data?.isCancel?<Badge count={"Order cancel "}   />:<> {data.status === "pending" && (
              <Badge count={data?.status} showZero color="#faad14" />
            )}
            {data.status === "cofirm" && (
              <Badge count={data?.status} showZero color="#52c41a" />
            )}
            {data.status === "reject" && (
              <Badge count={data?.status}   />
            )}</>}
            
          </>
        );
      },
      key: 12,
    },
    {
      title: "Cancel Service",
      render: function (abc: any) {
        return (
          <>
            {abc?.isCancel?<Button type="primary" disabled>Cancel</Button>:<Button 
            size="small" 
            type="primary"
            danger
              onClick={() => {
                Modal.confirm({
                  title: "Confirm ",
                  content: "Are you sure to cancel order?",
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
              className="me-2"
            > Cancel</Button>}
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

    </div>
  );
};

export default BookingHistory;
