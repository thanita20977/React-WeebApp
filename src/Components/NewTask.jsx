import React, { useRef, useState } from "react";

function NewTask({ addTask }) {
  //   const [title, setTitle] = useState("");
  const title = useRef();     //ประกาศตัวแปร title เพื่ออ้างถึง input field
  const form = useRef();      //ประกาศตัวแปร form เพื่ออ้างถึง form element 
  const submitForm = (e) => {   //  ฟังก์ชั่นจัดการ summit form
    e.preventDefault();       //ป้องกันการรีเฟรชหน้าเว็ปเมื่อกด summit
                               

    const task = {            //สร้างอ็อปเจ็กต์ task ใหม่
      title: title.current.value,
      date: new Date().toLocaleString(),
    };
    addTask(task);          //เรียกใช้ฟังก์ชั่น 
    form.current.reset();
  };
  return (
    <>
      <form ref={form} onSubmit={submitForm}>
        <label htmlFor="title" className="text-lg text-gray-400">
          Add New Task
        </label>
        <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3 mt-2">
          <input
            id="title"
            type="text"
            className="focus:outline-none w-full"
            maxLength="30"
            placeholder="Type Something here..."
            autoFocus
            required
            ref={title}         //เชื่อมโยง input field กับตัวแปร title
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="w-40 px-3 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-700"
          >
            New Task
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTask;
