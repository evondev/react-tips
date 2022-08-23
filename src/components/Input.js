import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const Input = (props) => {
  const { type = "text", name = "", placeholder = "" } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-3 border outline-none border-slate-100 rounded-xl"
      />
    </div>
  );
};

function ErrorComponent({ error }) {
  return (
    <div className="p-5 text-red-500 border border-red-500 rounded-xl">
      {error.message}
    </div>
  );
}

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
