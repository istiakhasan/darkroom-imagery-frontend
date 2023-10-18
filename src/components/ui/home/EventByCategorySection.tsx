"use client";
import React from "react";
import { Col, Divider, Row } from "antd";
import EventByCategoryCard from "./EventByCategoryCard";
import { useGetAllCategoriesLabelQuery } from "@/redux/api/categoryApi";
import Loading from "@/app/loading";
const EventByCategorySection = () => {
  const { data, isLoading } = useGetAllCategoriesLabelQuery({
    category: "category",
  });
  const categoryData = data?.data;
  console.log(categoryData, "category data");
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="my-5 text-center underline">
        Event By <span>Category</span>
      </h1>

      <Divider />
      {categoryData?.map((item: any, i: React.Key | null | undefined) => (
        <>
          <h5>{item?.name}</h5>
          <Row gutter={30}>
            {item?.Services?.map(
              (service: any, index: React.Key | null | undefined) => (
                <Col sm={24} lg={6} key={index}>
                  <EventByCategoryCard service={service} />
                </Col>
              )
            )}
          </Row>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default EventByCategorySection;
