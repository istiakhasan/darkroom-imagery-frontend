import HomeCarousel from "@/components/ui/HomeCarousel";
import UpcommingServices from "../../../components/ui/home/UpcommingServices";
import EventByCategorySection from "../../../components/ui/home/EventByCategorySection";
import React from "react";
import AvailableServices from "@/components/ui/home/AvailableServices";


const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <AvailableServices />
      <UpcommingServices />
      <EventByCategorySection />
    </div>
  );
};

export default HomePage;
