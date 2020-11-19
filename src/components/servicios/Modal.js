import React, { Component } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  isOpen,
  handleToggleScreen,
  imgData,
  handleNextImg,
  handlePrevImg,
  currentImgIndx,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="bg__container">
      <div className="modal__container">
        <div className="about__exit-icon">
          <AiOutlineClose onClick={() => handleToggleScreen()} />
        </div>
        <div className="modal__img">
          <img src={imgData[currentImgIndx]} onClick={() => handleNextImg()} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
