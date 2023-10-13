import React from "react";
import { Collapse } from "antd";


const DCollapse = ({ label, text }: { label: string; text: string }) => (
  <>
    <Collapse
      size="large"
      className="mb-3"
      items={[
        {
          label: label,
          children: text,
        },
      ]}
    />
  </>
);

export default DCollapse;
