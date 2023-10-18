import { Col, Divider, Row } from "antd";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { useGetAllReviewQuery } from "@/redux/api/reviewApi";
import Loading from "@/app/loading";
import { Key } from "react";

const ReviewSection = () => {
  const {data,isLoading}=useGetAllReviewQuery(undefined)
  if(isLoading){
    return <Loading />
  }
  const reviewData=data?.data?.length>6?data?.data?.slice(0,6):data?.data
  console.log(reviewData,"rewview data"); 

  return (
    <div>
      <h1 className="my-5 text-center underline">
        Customer <span>Review</span>
      </h1>

      <Divider />
      <Swiper
        slidesPerView={3}
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
