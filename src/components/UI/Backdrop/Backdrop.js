import React from "react";

import classes from "./Backdrop.module.scss";

const backdrop = (props) => {
  const { emitClose } = props;

  return <div className={classes.backdrop} onClick={emitClose}></div>;
};

export default backdrop;
