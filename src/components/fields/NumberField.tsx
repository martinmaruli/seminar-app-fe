"use client"

import clsx from "clsx";
import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface NumberFieldProps extends NumericFormatProps {
  name: string;
  className?: string;
  inputClassName?: string;
  label?: string;
}

const NumberField = (props: NumberFieldProps) => {
  const {
    name,
    className,
    label,
    placeholder,
    inputClassName,
    ...restProps
  } = props;

  return (
    <div className={clsx("w-full relative", className)}>
      {label && <label htmlFor={`field-${name}`}>{label}</label>}
      <NumericFormat
        className={clsx("w-full min-h-10 text-gray-950 px-3", inputClassName)}
        placeholder={placeholder}
        id={`field-${name}`}
        thousandSeparator=','
        {...restProps}
      />
    </div>
  );
}

export default React.memo(NumberField);