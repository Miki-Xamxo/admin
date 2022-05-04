import React, { ReactNode } from "react";
import s from "./Button.module.scss";

interface IButtonProps {
  title: string;
  children: ReactNode;
  className?: string;
  handleClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ title, children, handleClick }) => {
  return (
    <button className={s.button} onClick={handleClick}>
      <div className={s.icon}>{children}</div>
      <span className={s.title}>{title}</span>
    </button>
  );
};

export default Button;
