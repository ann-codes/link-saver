import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const MessageBlock = () => {
  const msg = useSelector((state) => state.msgBlock);
  let message = <div className={msg.css}>{msg.msg}</div>;

  const scrollToTop = () => {
    if (
      document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0
    ) {
      window.scrollBy(0, -50);
      requestAnimationFrame(scrollToTop);
    }
  };

  scrollToTop();

  return <Fragment>{message}</Fragment>;
};

export default MessageBlock;
