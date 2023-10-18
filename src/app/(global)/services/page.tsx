"use client";
import AvailAbleServiceCard from "@/components/ui/home/AvailAbleServiceCard";
import { useGetAllCategoriesLabelQuery } from "@/redux/api/categoryApi";
import {
  useGetAllServicesForUsersQuery
} from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import {
  Col,
  Divider,
  Input,
  InputNumber,
  Pagination,
  Row,
  Select,
  Slider,
} from "antd";
import { Key, useState } from "react";

const Services = () => {
  const [minValue, setMinValue] = useState(1);
  const [location, setLocation] = useState("");
  const [categoryId, setCategoryId] = useState<any>("");
  const [maxValue, setMaxValue] = useState(10000000);
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["minPrice"] = minValue;
  query["maxPrice"] = maxValue;
  query["location"] = location;
  query["categoryId"] = categoryId;
  console.log(categoryId, "category id");
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
  // load category
  const { data: categoryLabel, isLoading: categoryLoading } =
    useGetAllCategoriesLabelQuery(undefined);
  const serviceData = data?.data?.data;

  const onChange = (newValue: number) => {
    setMinValue(newValue);
  };
  const onChangeMax = (newValue: number) => {
   
    setMaxValue(newValue);
  };
  console.log(categoryLabel, "dsafasfd");
  const handleCurrentChange = (pageNumber:number,numSize:number) => {
    
    setPage(pageNumber);
    setSize(numSize)
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p>Filter By Location</p>
          <Input
            className="w-100"
            size="large"
            name="searchByLocation"
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <p>Filter By Category</p>
          <Select
            className="w-100"
            size="large"
            options={categoryLabel?.data}
            placeholder="location"
            onChange={(value) => setCategoryId(value)}
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
            disabled
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
            disabled
            max={10000000}
            value={maxValue}
            onChange={() => onChangeMax}
          />
        </Col>
        <Col lg={18}>
          <Row
            style={{
              maxHeight: "600px",
              overflow: "scroll",
              overflowX: "hidden",
            }}
            gutter={30}
          >
            {serviceData?.map((item: any, i: Key | null | undefined) => (
              <Col sm={24} className="mb-4" lg={6} key={i}>
                <AvailAbleServiceCard item={item} />
              </Col>
            ))}
          </Row>
          <Pagination
            className="text-end"
            onChange={handleCurrentChange}
            current={page}
            total={100}
            pageSizeOptions={[2,5,10,20,50]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
