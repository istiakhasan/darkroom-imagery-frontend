"use client";
import DModal from "@/components/ui/DModal";
import { useGetServiceByIdQuery } from "@/redux/api/serviceApi";
import { Button, Card, Col, Divider, Image, Rate, Row, Space } from "antd";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import CreateReview from "./_create/page";
import  dayjs  from 'dayjs';
import Loading from "@/app/loading";
import BookedServices from "./_create/BookedServices";

const ServiceDetailsPage = () => {
  const [openReviewModal,setOpenReviewModal]=useState(false)
  const [openBookedModal,setOpenBookedModal]=useState(false)

  const { id } = useParams();
  const { data,isLoading } = useGetServiceByIdQuery({ id: id },{
    refetchOnMountOrArgChange:true,
    refetchOnFocus:true
  });
  const serviceData = data?.data;
  const rating=serviceData?.ReviewAndRating?.reduce((a:number,b:any)=>a+b.rating,0)
  const avgRating=rating/Number(serviceData?.ReviewAndRating?.length )
  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <Row gutter={30} justify={"center"}>
        <Col sm={24} lg={8}>
          <Card style={{ width: "100%" }} hoverable>
            <Image
             
              className="img-fluid w-100 mx-auto d-block"
              alt="example"
              height={400}
              src={serviceData?.service_img}
            />
          </Card>
        </Col>

        <Col lg={8}>
          <h3 className="mb-4">{serviceData?.serviceName} </h3>
          <p className="mb-4">{serviceData?.service_desc}</p>
          <Card className="mb-4">
            <span>
              <Rate value={avgRating} /> <span className="ms-3">{rating} Reviews</span>
            </span>
          </Card>
          <h4 className=" mb-4 px-4">{serviceData?.price} tk</h4>
          <Button onClick={()=>setOpenBookedModal(true)}  type="primary" style={{ background: "black" }}>
            Booked Service
          </Button>
        </Col>
        <Col className="mt-4" lg={16}>
          <Card>
            <Button onClick={()=>setOpenReviewModal(true)} type="primary">Post Review</Button>
            <Divider orientation="left">Reviews And Ratings</Divider>
            <Row>
              {serviceData?.ReviewAndRating?.map((item:any, i:number) => (
                <>
                  <Col lg={8}>
                    <Rate value={item?.rating} />
                  </Col>
                  <Col lg={16}>
                    <p>
                      <strong>{item?.user?.name}</strong>
                      <small className="d-block">{dayjs(item?.createdAt).format('DD MMMM YYYY')}</small>
                    </p>
                    <p className="text-secondary">
                      {item?.review}
                    </p>
                  </Col>
                  <Col lg={24}>
                    <Divider />
                  </Col>
                </>
              ))}
            </Row>
          </Card>
        </Col>
        <DModal
        open={openReviewModal}
        handleCancel={() => setOpenReviewModal(false)}
        title="Post Review"
      >
        <CreateReview serviceId={id as string} setOpen={setOpenReviewModal} />
      </DModal>
        <DModal
        open={openBookedModal}
        handleCancel={() => setOpenBookedModal(false)}
        title="Create Booked"
      >
        <BookedServices serviceId={id as string} setOpen={setOpenBookedModal} />
      </DModal>
      </Row>
    </div>
  );
};

export default ServiceDetailsPage;
