import React from "react";

const Add: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24px"
      height="24px"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </svg>
  );
};

export default Add;
