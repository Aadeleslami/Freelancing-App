import React from "react";

function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 ">
        آیا از حذف {resourceName} مطمئنید؟
      </h2>
      <div className="flex items-center justify-between gap-x-16">
        <button
          className="btn btn--primary flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          className="btn btn--danger flex-1 py-3"
          onClick={onConfirm}
          disabled={disabled}
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
