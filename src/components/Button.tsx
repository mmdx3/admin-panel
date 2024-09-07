import React from "react";

type Button = {
  bgColor?: string;
  color?: string;
  size?: string;
  text?: string;
  borderRadius?: string;
  icon?: React.ReactNode;
  bgHoverColor?: string;
  width?: string;
};

const Button = ({ bgColor, color, size, text, borderRadius }: Button) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl `}
    >
      {text}
    </button>
  );
};

export default Button;
