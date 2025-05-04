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
            className="w-full py-3 px-4 rounded-xl text-secondary-900 border border-gray-100  hover:border-primary-500  focus:border-primary-500 focus:bg-white transition-all duration-300 ease-out focus:shadow-lg focus:shadow-secondary-200  "
            type="text"
          />
        </div>
        <button className="px-4 py-2 font-bold bg-primary-900 text-white w-full rounded-xl transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
