"use client"
import HomeCarousel from "@/components/ui/HomeCarousel";
import UpcommingServices from "../../../components/ui/home/UpcommingServices";
import React from "react";
import AvailableServices from "@/components/ui/home/AvailableServices";
import EventByCategorySection from "@/components/ui/home/EventByCategorySection";
import 'swiper/css';
import ReviewSection from "@/components/ui/home/ReviewSection";
import LatestNewsSection from "@/components/ui/home/LatestNewsSection";


const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <AvailableServices />
      <UpcommingServices />
      <EventByCategorySection />
      <ReviewSection />
      <LatestNewsSection />
    </div>
  );
};

export default HomePage;
