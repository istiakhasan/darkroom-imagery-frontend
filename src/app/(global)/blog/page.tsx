import { Col, Divider, Image, Row } from "antd";
import React from "react";

const BlogPage = () => {
  return (
    <div className="my-3">
      <Row gutter={50}>
        <Col lg={14}>
          <h1>Inside</h1>
          <div>
            <Image
              height={400}
              width={"100%"}
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OwA7e6jrtb-TIG_N5qaMXcvu6wlOq0dNyw&usqp=CAU"
            />
            <strong className="my-2">
              Date:<small>20 december 2023</small>
            </strong>

            <h1>Seriously,You need to start documenting your ux design</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum perspiciatis commodi rem aut, iusto alias, vero libero
              fugiat veritatis neque animi ducimus atque necessitatibus.
              Numquam, nisi error. Alias, ipsum explicabo ut accusantium
              repellendus maxime recusandae dolor tenetur vero qui quibusdam vel
              officiis minima aliquid autem aperiam est natus illum placeat
              deserunt, ullam molestiae libero. Tempore magnam incidunt nam est
              quam asperiores dicta fuga? Laudantium illum repellat excepturi
              rerum iste alias at similique deserunt itaque repellendus magnam,
              quidem corporis voluptatem ut quo, quisquam ad aliquam maiores
              nobis consequuntur. Perspiciatis ea tempora magni saepe
              dignissimos at est unde, inventore quam, molestiae mollitia!
            </p>
          </div>
        </Col>

        <Col style={{maxHeight:"100vh",overflow:"auto"}} lg={10}>
          <h3 className="mt-5">Recent Blog</h3>
          {Array.from(Array(20).keys()).map((item, i) => (
            <>
              <div style={{cursor:"pointer"}} className="blog_card d-flex items-start gap-3 ">
                <Image
                  height={100}
                  width={200}
                  preview={false}
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OwA7e6jrtb-TIG_N5qaMXcvu6wlOq0dNyw&usqp=CAU"
                />
                <div>
                  <p style={{ color: "#bd486d" }} className="mb-0">
                    Design system
                  </p>
                  <h4>Learning to love the constrantain of design system</h4>
                  <p className="text-secondary">Jhon smieth</p>
                </div>
              </div>
              <Divider />
            </>
          ))}
         
        </Col>
      </Row>
    </div>
  );
};

export default BlogPage;
