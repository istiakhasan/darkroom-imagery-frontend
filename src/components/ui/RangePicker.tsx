"use client";
import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const DateRangePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: UMDatePikerProps) => {
  const { control, setValue, formState: { errors }, } = useFormContext();
  const { RangePicker } = DatePicker;

  const handleOnChange: DatePickerProps["onChange"] = (values, formatString) => {
    if (Array.isArray(values)) {
      const [start, end] = values;
      const dateString = `${start?.format("YYYY-MM-DD")} to ${end?.format("YYYY-MM-DD")}`;
      onChange ? onChange(start, dateString) : null;
      setValue(name, values);
    }
  };
  
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RangePicker
             showTime 
            size={size}
            //@ts-ignore
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
       <small style={{ color: "red" }}>{errorMessage}</small>
    </div>
  );
};

export default DateRangePicker;
