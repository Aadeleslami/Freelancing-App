import React from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        register={register}
        name="title"
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: { value: 10, message: "طول این عنوان نامعتبر است" },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        register={register}
        name="description"
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: { value: 10, message: "طول این توضیح نامعتبر است" },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        register={register}
        name="budget"
        required
        validationSchema={{
          required: "بودجه ضروری است",
          minLength: { value: 10, message: "مقدار این بودجه نامعتبر است" },
        }}
        type="number"
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
