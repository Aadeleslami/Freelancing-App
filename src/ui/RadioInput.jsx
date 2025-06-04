import React from "react";

function RadioInput({
  label,
  name,
  id,
  value,
  register,
  checked,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <div className="flex items-center gap-x-2 text-secondary-600">
        <input
          className="cursor-pointer w-4 h-4  form-radio text-primary-900 focus:ring-0"
          type="radio"
          name={name}
          {...register(name, validationSchema)}
          id={id}
          value={value}
          checked={checked}
        />
        <label htmlFor={id}>{label}</label>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
      </div>
    </div>
  );
}

export default RadioInput;
