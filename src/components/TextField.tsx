import React from 'react';
import classNames from 'classnames';

interface TextFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  span?: string;
}

export default function TextField({ label, name, value, onChange, span }: TextFieldProps) {
  return (
    <>
      <div className={classNames("col col-auto", {
        [`span-${span}`]: span
      })}>
        <label htmlFor="T_prefix" className="text-field-label">{label}:</label>
      </div>
      <div className="col">
        <input
          id={name}
          name={name}
          type="text"
          className="text-field"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
