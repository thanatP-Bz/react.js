import React, { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (prop) => {
  return <div className={classes.Backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop>
        <ModalOverlay>{props.children}</ModalOverlay>
      </Backdrop>
    </Fragment>
  );
};

export default Modal;
