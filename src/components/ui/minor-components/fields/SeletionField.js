// Custom components
import React from "react";

function SelectionField(props) {
  const {
    label,
    id,
    extra,
    options,
    variant,
    state,
    disabled,
    value,
    onChange,
  } = props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <select
        disabled={disabled}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`form-select mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 ${
          disabled === true
            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : state === "error"
            ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "border-gray-200 dark:!border-white/10 dark:text-white"
        }`}
      >
        {options.map((option, index) => (
          <>
          <option hidden selected>
            Select Option
          </option>
          <option key={index} value={option.value}>
            {option.label}
          </option>
          </>
        ))}
      </select>
    </div>
  );
}

export default SelectionField;
