"use client";
import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";

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
  const { control, setValue } = useFormContext();
//   const handleOnChange: DatePickerProps["onChange"] = (
//     values,
//     formatString
//   ) => {
//     console.log(values,formatString)
//     if (Array.isArray(values)) {
//       const [start, end] = values;
//       const dateString = `${start?.format("YYYY-MM-DD")} to ${end?.format(
//         "YYYY-MM-DD"
//       )}`;
//       onChange ? onChange(start, dateString) : null;
//       setValue(name, formatString);
//     }
//   };

const handleOnChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setValue(name, dateString)
  }

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
    </div>
  );
};

export default DDateAndTimePicker;
