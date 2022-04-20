import React from "react";

const LoadingSkeleton = ({ className = "" }) => {
  // destructuring
  return <div className={`skeleton ${className}`}></div>;
};

export default LoadingSkeleton;
