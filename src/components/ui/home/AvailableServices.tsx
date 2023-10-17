"use client"
import { Col, Divider, Row } from "antd";
import AvailAbleServiceCard from "./AvailAbleServiceCard";
import { useGetAllServicesForUsersQuery } from "@/redux/api/serviceApi";

const AvailableServices = () => {
  const query: Record<string, any> = {};
  query["isAvailable"]="available"
  const { data, isLoading } = useGetAllServicesForUsersQuery(
    {isAvailable:true},
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );

  const serviceData = data?.data?.data;
  return (
    <div>
      <h1 className="my-5 text-center underline">Available <span>Services</span></h1>

       <Divider />
      <Row gutter={30}  justify={"center"}>
        {(serviceData?.length>6?serviceData.slice(0,6):serviceData)?.map((item, i) => (
          <Col  sm={24} lg={8}  key={i}>
            <AvailAbleServiceCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AvailableServices;
