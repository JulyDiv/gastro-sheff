import React from "react";

export const Input = ({
  type,
  register,
  placeholder,
  messageErr,
  item,
  message,
  value,
  className
}) => {

  return (
    <>
      <input
        {...register(item, {
          required: {
            value: message ? true : false,
            message: message,
          },
          pattern: {
            value: value,
            message: messageErr,
          },
        })}
        className={className}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};
