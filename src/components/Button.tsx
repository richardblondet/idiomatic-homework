import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  name: string;
  disabled?: boolean;
  onClick: () => void;
  children: JSX.Element | string;
}

export default function Button({ name, disabled, onClick, children }: ButtonProps) {
  return (
    <button
      id={name}
      className={classNames("button", {
        disabled: disabled
      })}
      onClick={onClick}>{children}</button>
  );
}
