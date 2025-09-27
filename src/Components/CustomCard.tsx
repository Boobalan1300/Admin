import React from "react";
import { CustomBoldText } from "./CustomStyledText";

interface CustomCardProps {
  title?: string;
  value?: string | number;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function CustomCard({
  title = "Card",
  value,
  icon,
  style = {},
}: CustomCardProps) {
  return (
    <div
      style={{
        color: "#000000ff",
        borderRadius: "10px",
        borderLeft: "4px solid #1cca5b",
        padding: "24px",
        boxShadow: "0 6px 20px rgba(30, 39, 114, 0.15)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        height: "140px",
        ...style,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <p>{title}</p> */}
          <CustomBoldText title={title} />

          <div>{icon && <div>{icon}</div>}</div>
        </div>

        <div>
          <h2>{value}</h2>
          <p style={{ marginTop: "5px",fontSize:"12px",color:"var(--color-grey)"}}>
            <span style={{ color: "#1cca5b",fontWeight:500 }}> +12.5% </span> from last month
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
