"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cart";
import { Avatar, Button, Card, Image } from "antd";
import { useRouter } from "next/navigation";

const { Meta } = Card;
const AvailAbleServiceCard = ({ item,isCart }: { item: any,isCart?:boolean }) => {
  const { cart } = useAppSelector((state) => state);
  const dispatech = useAppDispatch();
  const router = useRouter();
  return (
    <Card
      style={{ marginBottom: "20px", height:`${!isCart? "100%":"auto"}` }}
      cover={
        <Image
          height={150}
          style={{ objectFit: "cover" }}
          preview={true}
          alt="example"
          src={item?.service_img}
        />
      }
    >
      <Meta
        avatar={<Avatar src={item?.user?.profileImg} />}
        title={item?.serviceName}
        description={`${item?.price} tk`}
      />

      <span className="badge text-bg-primary text-uppercase me-3 mt-3">
        {item?.status}
      </span>
      <span className="badge rounded-pill text-bg-secondary me-3">
        Location: {item?.location}
      </span>
      <p className="mt-2 ">
        <strong>Category:</strong> {item?.category?.name}
      </p>

      <p className="">
        {item?.service_desc?.length > 100
          ? `${item?.service_desc?.slice(0, 100)}...`
          : item?.service_desc}
      </p>
      <div
        style={{ height: "100%" }}
        className="mt-auto h-100 d-flex align-items-end"
      >
        <div style={{ position: "absolute", right: "10px", bottom: "10px" }}>
        {!isCart &&  <Button className="me-2 bg-dark" onClick={() => dispatech(addToCart(item))} type="primary">
            Add To Cart
          </Button>}
          <Button
            onClick={() => router.push(`/services/${item?.id}`)}
            type="primary"
          >
            Booked
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AvailAbleServiceCard;
