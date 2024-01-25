"use client"
import { Col, Divider, Row } from "antd";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { useGetAllReviewQuery } from "@/redux/api/reviewApi";
import Loading from "@/app/loading";
import { Key, useEffect, useState } from "react";

const ReviewSection = () => {
  const {data,isLoading}=useGetAllReviewQuery(undefined)
 
  const reviewData=data?.data?.length>6?data?.data?.slice(0,6):data?.data 
  const [collapes, setCollapes] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setCollapes(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setCollapes(true);
      } else {
        setCollapes(false);
      }
    });
    window.addEventListener("load", () => {
      if (window.innerWidth < 700) {
        setCollapes(true);
      } else {
        setCollapes(false);
      }
    });
  }, []);
  if(isLoading){
    return <Loading />
  }
  return (
    <div>
      <h1 className="my-5 text-center underline">
        Customer <span>Review</span>
      </h1>

      <Divider />
      <Swiper
        slidesPerView={collapes?1:3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviewData?.map((item: any, i: Key | null | undefined) => (
          <Col sm={24} lg={8} key={i}>
            <SwiperSlide>
              <ReviewCard item={item} />
            </SwiperSlide>
          </Col>
        ))}
      </Swiper>
      <Row gutter={30} justify={"center"}></Row>
    </div>
  );
};

export default ReviewSection;
