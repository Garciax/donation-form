import React from "react";
import classNames from "classnames";
import cn from "./Button.module.scss";

export enum ButtonType {
  AMOUNT,
  DONATE,
}

const buttonTypeCn = {
  [ButtonType.DONATE]: cn.donate_button,
  [ButtonType.AMOUNT]: cn.amount_button,
};

/**
 * Компонент кнопки
 */
const Button = ({
  type,
  children,
  onClick,
  isActive,
}: {
  type: ButtonType;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isActive?: boolean;
}) => {
  return (
    <button
      className={classNames(
        buttonTypeCn[type],
        cn.button,
        isActive && cn.active
      )}
      onClick={onClick}
    >
      <div className={cn.button_content}>{children}</div>
    </button>
  );
};

export default Button;
