"use client";
import AvailAbleServiceCard from "@/components/ui/home/AvailAbleServiceCard";
import { useGetAllServicesForUsersQuery, useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { Col, Divider, Input, InputNumber, Row, Slider } from "antd";
import { useState } from "react";

const Services = () => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(10000000);
  const query: Record<string, any> = {};
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [rowDto, setRowDto] = useState({});
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["minPrice"] = minValue;
  query["maxPrice"] = maxValue;
  query["isAvailable"] = "available";
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading } = useGetAllServicesForUsersQuery(
    { ...query },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );
  const serviceData = data?.data?.data;
  
  const onChange = (newValue: number) => {
    setMinValue(newValue);
  };
  const onChangeMax = (newValue: number) => {
    setMaxValue(newValue);
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
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <p>Minimum Price</p>
          <Slider
            className="w-100"
            min={1}
            max={10000000}
            onChange={onChange}
            value={typeof minValue === "number" ? minValue : 0}
          />
          <InputNumber
            min={1}
            className="w-100"
            max={10000000}
            value={minValue}
            onChange={() => onChange}
          />
          <p>Maximum Price</p>
          <Slider
            className="w-100"
            min={1}
            max={10000000}
            onChange={onChangeMax}
            value={typeof maxValue === "number" ? maxValue : 0}
          />
          <InputNumber
            min={1}
            className="w-100"
            max={10000000}
            value={maxValue}
            onChange={()=>onChangeMax}
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
            {serviceData?.map((item, i) => (
              <Col sm={24} className="mb-4" lg={6} key={i}>
                <AvailAbleServiceCard item={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
