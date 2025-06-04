import React from "react";

function RadioInput({
  label,
  name,
  id,
  value,
  register,
  validationSchema,
  watch
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
          checked={watch(name) === value}
        />
        <label htmlFor={id}>{label}</label>
     
      </div>
    </div>
  );
}

export default RadioInput;
