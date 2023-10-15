"use client";
import AvailAbleServiceCard from "@/components/ui/home/AvailAbleServiceCard";
import { Col, Divider, Input, InputNumber, Row, Slider } from "antd";
import { useState } from "react";

const Services = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };
  return (
    <div>
      <h1 className="my-2 text-center underline">
        All <span>Services</span>
      </h1>

      <Divider />
      <Row gutter={30}>
        <Col lg={6}>
          <p>Search Service</p>
          <Input
            className="w-100"
            size="large"
            name="searchTerm"
            placeholder="Search"
          />
          <p>Minimum Price</p>
          <Slider
            className="w-100"
            min={1}
            max={1000000000000}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
          <InputNumber
            min={1}
            className="w-100"
            max={10000000}
            value={inputValue}
            onChange={() => onChange}
          />
          <p>Maximum Price</p>
          <Slider
            className="w-100"
            min={1}
            max={1000000000000}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
          <InputNumber
            min={1}
            className="w-100"
            max={10000000}
            value={inputValue}
            onChange={() => onChange}
          />
        </Col>
        <Col lg={18}>
          <Row 
          style={{
            maxHeight:"600px",
            overflow:"scroll",
            overflowX:"hidden"
          }}
          gutter={30}>
            {Array.from(Array(16).keys()).map((item, i) => (
              <Col sm={24} lg={6} key={i}>
                <AvailAbleServiceCard />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
