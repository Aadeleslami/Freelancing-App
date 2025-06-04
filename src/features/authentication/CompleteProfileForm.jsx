import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import Loading from "../../ui/Loading";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{ required: "نام و نام خانوادگی ضروری است" }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{ required: "ایمیل ضروری است" }}
            errors={errors}
          />
          <div className="flex justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              register={register}
              name="role"
              id="OWNER"
              value="OWNER"
              checked={watch("role") === "OWNER"}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
              errors={errors}
            />
            <RadioInput
              label="فریلنسر"
              register={register}
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              checked={watch("role") === "FREELANCER"}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
              errors={errors}
            />
          </div>
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full"> تایید</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
