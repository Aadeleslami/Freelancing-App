import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, config }) {
  const { name, validationSchema, options } = config;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map((option) => (
          <RadioInput
            key={option.value}
            label={option.label}
            register={register}
            name={name}
            id={option.value}
            value={option.value}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
