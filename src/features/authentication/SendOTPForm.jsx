import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ isSendingOtp, onSubmit, register }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">ارسال کد تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
