import React from "react";

const Status = ({ status, children }) => {
  let color;

  switch (status) {
    case "success":
      color = "green";
      break;
    case "error":
      color = "red";
      break;
    case "warning":
      color = "yellow";
      break;
    default:
      color = "black";
      break;
  }

  return <span style={{ color }}>{children}</span>;
};

export default Status;
