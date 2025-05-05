import React, { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="mb-2" htmlFor="phonenumber">
            شماره تماس
          </label>
          <input
            id="phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="textField__input"
            type="text"
          />
        </div>
        <button className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
