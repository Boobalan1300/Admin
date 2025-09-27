import type { JSX } from "react";

type CustomStyledTextProps = {
  title: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
};

export default function CustomStyledText({
  title,
  as: Component = "p",
  style,
}: CustomStyledTextProps) {
  return (
    <Component
      style={style}
    >
      {title}
    </Component>
  );
}


export function CustomBoldText({
  title,
  as: Component = "p",
  style = {},
  
}: CustomStyledTextProps) {
  return (
    <Component
      style={{
        color: "var(--color-grey)",
        fontWeight: 500,
        fontSize:".875rem",
        ...style, 
      }}
    >
      {title}
    </Component>
  );
}
