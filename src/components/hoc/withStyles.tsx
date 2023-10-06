import React, { ElementType } from "react";

function withStyles(Component: ElementType) {
  return (props: any) => (
    <Component
      style={{ padding: "2rem" }}
      className="bg-blue-500"
      {...props}
    ></Component>
  );
}

export default withStyles;
