import React, { useState } from "react";
import { Button, Card, Drawer, Image } from "antd";
import { useAppSelector } from "@/redux/hooks";
import AvailAbleServiceCard from "./home/AvailAbleServiceCard";

const DDrawer = ({ open, setOpen }: { open: any; setOpen: any }) => {
  const { cart } = useAppSelector((state) => state?.cart);
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        
      >
        {cart?.map((item, i) => (
        //   <Card className="mb-2" key={i}>
        //     <div className="d-flex justify-content-between align-items-center">
        //     <div>
        //     <Image preview={false} alt="" width={30} src={item?.service_img} />
        //     <h4>{item?.price} tk</h4>
        //     <p>{item?.serviceName}</p>
        //     </div>
        //     <Button type="primary">Booked</Button>
                
        //          </div>
        //   </Card>
        <AvailAbleServiceCard key={i} item={item} isCart={true} />
        ))}
      </Drawer>
    </>
  );
};

export default DDrawer;
