"use client"
import { Col, Divider, Row } from "antd";
import UpcommingServicesCard from "./UpcommingServicesCard";
import { useGetAllServicesForUsersQuery } from "@/redux/api/serviceApi";

const UpcommingServices = () => {
  const { data, isLoading } = useGetAllServicesForUsersQuery(
    { status:"upcomming" },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );

  const serviceData = data?.data?.data;
  console.log(serviceData,"service data");
  return (
    <div>
      <h1 className="my-5 text-center underline">Upcomming <span>Services</span></h1>

       <Divider />
      <Row gutter={30}  justify={"center"}>
        {serviceData?.map((item, i) => (
          <Col  sm={24} lg={8}  key={i}>
            <UpcommingServicesCard  item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcommingServices;
