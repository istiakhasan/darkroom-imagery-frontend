"use client";
import { Carousel, Image } from "antd";

const contentStyle: React.CSSProperties = {
  height: "100%",
  color: "#fff",
  width: "100%",
  background: "#364d79",
};

const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
      <Image
        preview={false}
        style={contentStyle}
        width={"100%"}
        alt=""
        src="https://st4.depositphotos.com/10256402/27450/i/450/depositphotos_274504098-stock-photo-photographer-are-sitting-look-the.jpg"
      />
    </div>

    <div>
      <Image
        style={contentStyle}
        width={"100%"}
        alt=""
        preview={false}
        src="https://st4.depositphotos.com/10256402/27450/i/450/depositphotos_274504098-stock-photo-photographer-are-sitting-look-the.jpg"
      />
    </div>
  </Carousel>
);

export default HomeCarousel;
