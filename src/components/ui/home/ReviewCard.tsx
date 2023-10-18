import { Avatar, Card, Divider, Image, Rate } from "antd";
import React from "react";
import  dayjs  from 'dayjs';

const ReviewCard = ({item}:{item:any}) => {
  return (
    <Card hoverable>
      <div className="d-flex gap-3">
        <Avatar
          size={60}
          src={item?.user?.profileImg}
        />
        <div>
          <p className="mb-0">{item?.user?.name}</p>
          <p className="text-secondary"><small>{item?.user?.email}</small></p>
        </div>
      </div>
      <Rate className="mt-2" value={5} />
      <p>{item?.review}</p>

      <Divider />
      <p><small>{dayjs(item?.createdAt).format('DD MMMM YYYY')}</small></p>
    </Card>
  );
};

export default ReviewCard;
