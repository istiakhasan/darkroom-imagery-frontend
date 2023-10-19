"use client";
import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const DDateAndTimePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: UMDatePikerProps) => {
  const { control, setValue , formState: { errors }} = useFormContext();


const handleOnChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    setValue(name, dateString)
  }
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            size={size}
            //@ts-ignore
            onChange={handleOnChange}
            style={{ width: "100%" }}
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
          />
        )}
      />
       <small style={{ color: "red" }}>{errorMessage}</small>
    </div>
  );
};

export default DDateAndTimePicker;
