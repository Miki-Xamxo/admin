import React from "react";

import { ButtonSvg } from "../ButtonSvg";

import { ReactComponent as CloseSvg } from "../../../assets/svg/close.svg";
import s from "./ErrorMessage.module.scss";

interface IProps {
  message: string;
  closeMessage: () => void;
}

const ErrorMessage: React.FC<IProps> = ({ message, closeMessage }) => {
  return (
    <div className={s.message}>
      <span className={s.text}>{message}</span>
      <ButtonSvg handleClick={closeMessage}>
        <CloseSvg />
      </ButtonSvg>
    </div>
  );
};

export default ErrorMessage;
