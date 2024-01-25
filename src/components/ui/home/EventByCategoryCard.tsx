import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cart";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const EventByCategoryCard = ({service}:{service:any}) => {
  const dispatech = useAppDispatch();
  const router=useRouter()
  return (
    <div className="card-deck ">
      <div className="card mb-4 m-0 p-0 shadow_hover">
        <div className="view overlay m-0 p-0 overflow-hidden">
          <img 
            height={180}
            style={{objectFit:"cover"}}
            className="card-img-top"
            src={service?.service_img}
            alt="Card image cap"
          />
        </div>

        <div className="card-body">
          <h4 className="card-title">{service?.serviceName}</h4>
          <div>
            <Button className="me-2" onClick={()=>router.push(`/services/${service?.id}`)} type="primary">Booked</Button>
            <Button className="bg-dark" onClick={() => dispatech(addToCart(service))} type="primary">Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventByCategoryCard;
