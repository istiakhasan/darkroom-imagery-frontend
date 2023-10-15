"use client";
import Loading from "@/app/loading";
import DCollapse from "@/components/ui/DCollapse";
import { useAllFaqForUsersQuery } from "@/redux/api/faqApi";
import { Col, Divider, Row } from "antd";
import React from "react";

const Faq = () => {
  const { data, isLoading } = useAllFaqForUsersQuery(undefined);
  const faqDAta: { question: string; answer: string }[] = data?.data;
  return (
    <div>
      <Divider orientation="left">Frequently Asked Question</Divider>
      <Row gutter={30}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {faqDAta?.map((item, i) => (
              <Col sm={24} lg={12} key={i}>
                <DCollapse text={item?.answer} label={item?.question} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </div>
  );
};

export default Faq;
