import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
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
  const { control, formState: { errors }, } = useFormContext();
  const [value,setValue]=useState(3)
  const errorMessage = getErrorMessageByPropertyName(errors, name);
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
       <small style={{ color: "red" }}>{errorMessage}</small>
    </div>
  );
};

export default DFormRate;