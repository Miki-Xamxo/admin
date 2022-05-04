import React, { ReactNode } from "react";
import s from "./ButtonSvg.module.scss";

interface IProps {
  handleClick: () => void;
  children: ReactNode;
}

export const ButtonSvg: React.FC<IProps> = ({ children, handleClick }) => {
  return (
    <button title="Закрыть" className={s.button} onClick={handleClick}>
      {children}
    </button>
  );
};
