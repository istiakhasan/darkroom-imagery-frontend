import { Avatar, Card, Divider, Image, Rate } from "antd";
import React from "react";

const ReviewCard = () => {
  return (
    <Card hoverable>
      <div className="d-flex gap-3">
        <Avatar
          size={60}
          src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
        />
        <div>
          <p className="mb-0">Rahim Khan</p>
          <p className="text-secondary"><small>Lorem ipsum dolor sit amet.</small></p>
        </div>
      </div>
      <Rate className="mt-2" value={5} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus dolor nobis sit dolorem perspiciatis aperiam officia necessitatibus? Rerum sit ipsa nulla quam facilis molestiae tenetur minima, consequuntur amet quibusdam.</p>

      <Divider />
      <p><small>20 december 2032</small></p>
    </Card>
  );
};

export default ReviewCard;
