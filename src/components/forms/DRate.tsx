import { Input, Rate } from "antd";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const DFormRate = ({
  name,
  label,
  rows,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();
  const [value,setValue]=useState(3)
  return (
    <div className={`flex flex-col  w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        
        render={({ field }) => (
          <Rate {...field} className="w-100"   onChange={(value) => field.onChange(value)} />
        )}
      />
    </div>
  );
};

export default DFormRate;