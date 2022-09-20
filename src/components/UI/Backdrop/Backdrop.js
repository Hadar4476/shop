import React from "react";

import classes from "./Backdrop.module.scss";

const backdrop = (props) => {
  const { displayState, emitClose } = props;

  return (
    <div
      className={`${classes.backdrop} ${classes[`backdrop-${displayState}`]}`}
      onClick={emitClose}
    ></div>
  );
};

export default backdrop;
