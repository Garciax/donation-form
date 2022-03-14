import cn from "./Input.module.scss";
import React, { ReactNode } from "react";

/**
 * Компонент ввода данных
 */
const Input = ({
  value,
  onChange,
  leftComponent,
  rightComponent,
}: {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftComponent?: ReactNode | null;
  rightComponent?: ReactNode;
}) => {
  return (
    <div className={cn.container}>
      {leftComponent && (
        <div className={cn.leftComponent_container}>{leftComponent}</div>
      )}
      <div className={cn.input_container}>
        <input
          value={Number(value.toString())}
          className={cn.input}
          onChange={onChange}
        />
      </div>
      {rightComponent && (
        <div className={cn.rightComponent_container}>{rightComponent}</div>
      )}
    </div>
  );
};

export default Input;
