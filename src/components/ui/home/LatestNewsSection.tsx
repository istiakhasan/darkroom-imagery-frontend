"use client";
import { Col, Divider, Row } from "antd";
import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import { useAllBlogForUsersQuery } from "@/redux/api/blogApi";

const LatestNewsSection = () => {
  const { data, isLoading } = useAllBlogForUsersQuery(undefined);
  console.log(data?.data,"data");
  const newData=data?.data
  return (
    <div>
      <h1 className="my-5 text-center underline">
        2023 <span>Latest News</span>
      </h1>
      <hr style={{ height: "4px", background: "rgb(0,0,0)" }} />
      <Row gutter={30}>
        {newData?.map((item:any, i:number) => (
          <>
            <Col className="mb-4" lg={8} key={i}>
              <LatestNewsCard item={item} />
            </Col>
          </>
        ))}
        <Col lg={24}>
          <hr style={{ height: "4px", background: "rgb(0,0,0)" }} />
        </Col>
        {/* {Array.from(Array(3).keys()).map((item, i) => (
          <>
            <Col className="mb-4" lg={8} key={i}>
              <LatestNewsCard />
            </Col>
          </>
        ))}
         <Col lg={24}>
          <hr style={{ height: "4px", background: "rgb(0,0,0)" }} />
        </Col> */}
      </Row>

      <Divider />
    </div>
  );
};

export default LatestNewsSection;
