"use client";
import { Col, Divider, Row } from "antd";
import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import { useAllBlogForUsersQuery } from "@/redux/api/blogApi";

const LatestNewsSection = () => {
  const { data, isLoading } = useAllBlogForUsersQuery(undefined);
  const newData=data?.data
  return (
    <div>
      <h1 className="my-5 text-center underline">
        2023 <span>Latest News</span>
      </h1>
      <Row gutter={30}>
        {newData?.map((item:any, i:number) => (
            <Col  className="mb-4" lg={6} key={i}>
              <LatestNewsCard item={item} />
            </Col>
        ))}
      </Row>

      <Divider />
    </div>
  );
};

export default LatestNewsSection;
