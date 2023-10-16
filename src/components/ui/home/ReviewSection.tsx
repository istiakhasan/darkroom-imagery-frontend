import { Col, Divider, Row } from "antd";
import "swiper/css/pagination";

// import './styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
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
        {Array.from(Array(6).keys()).map((item, i) => (
          <Col sm={24} lg={8} key={i}>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
          </Col>
        ))}
      </Swiper>
      <Row gutter={30} justify={"center"}></Row>
    </div>
  );
};

export default ReviewSection;
