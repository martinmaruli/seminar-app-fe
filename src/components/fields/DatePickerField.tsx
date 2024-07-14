"use client"

import clsx from "clsx";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

interface DatePickerFieldProps {
  name: string;
  label?: string;
  className?: string;
}

const DatePickerField = (props: DatePickerFieldProps) => {
  const { name, label, className } = props;
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div className={clsx("w-full", className)}>
      {label && <label htmlFor={`field-${name}`}>{label}</label>}
      <DatePicker
        id={`field-${name}`}
        wrapperClassName="w-full"
        className='w-full min-h-10 text-gray-950 px-3'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeInput
        timeInputLabel="Time:"
        dateFormat="dd/MM/yyyy HH:mm"
      />
    </div>
  );
}

export default React.memo(DatePickerField);