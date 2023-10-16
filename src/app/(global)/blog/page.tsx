"use client";
import Loading from "@/app/loading";
import { useAllBlogForUsersQuery } from "@/redux/api/blogApi";
import { Col, Divider, Image, Row } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";

const BlogPage = () => {
  const { data, isLoading } = useAllBlogForUsersQuery(undefined);
  const [viewBlog, setViewBlog] = useState<any>({});
  const blogs: {
    image: string;
    createdAt: string;
    description: string;
    title: string;
    user: {
      name: string;
    };
  }[] = data?.data;
  if (isLoading) {
    return <Loading />;
  }
  console.log(blogs, "blogs");
  return (
    <div className="my-3">
      <Row justify={"center"} gutter={50}>
        <Col lg={10}>
          <h1>Inside</h1>
          <div>
            <Image
              height={400}
              width={"100%"}
              alt=""
              src={viewBlog?.image || blogs[0].image}
            />
            <strong className="my-2">
              Date:
              <small>
                {dayjs(viewBlog?.createdAt || blogs[0]?.createdAt).format(
                  "MMM D, YYYY hh:mm A"
                )}
              </small>
            </strong>

            <h1>{viewBlog?.title || blogs[0].title}</h1>
            <p>{viewBlog?.description || blogs[0].description}</p>
          </div>
        </Col>

        <Col style={{ maxHeight: "100vh", overflow: "auto" }} lg={8}>
          <h3 className="mt-5">Recent Blog</h3>
          {blogs.map((item, i) => (
            <>
              <div
                onClick={() => setViewBlog(item)}
                style={{ cursor: "pointer" }}
                className="blog_card d-flex items-start gap-3 "
              >
                <Image
                  style={{ objectFit: "cover" }}
                  height={100}
                  width={200}
                  preview={false}
                  alt=""
                  src={item?.image}
                />
                <div>
                  <p style={{ color: "#bd486d" }} className="mb-0">
                    Design system
                  </p>
                  <h4>{item?.title}</h4>
                  <p className="text-secondary">{item?.user?.name}</p>
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
