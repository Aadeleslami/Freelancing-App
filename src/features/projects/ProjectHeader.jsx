import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-2xl text-secondary-700">پروژه ها</h1>
      <button
        className="btn btn--primary flex items-center w-56 gap-x-2"
        onClick={() => setIsOpen(true)}
      >
        <HiPlus />
        <span>اضافه کردن پروژه جدید</span>
      </button>
      <Modal
        open={isOpen}
        title="اضافه کردن پروژه جدید"
        onClose={() => setIsOpen(false)}
      >
        <CreateProjectForm />
      </Modal>
    </div>
  );
}

export default ProjectHeader;
