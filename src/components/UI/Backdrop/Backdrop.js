import React from "react";

const backdrop = (props) => {
  const { emitClose } = props;

  return <div onClick={emitClose}></div>;
};

export default backdrop;
