"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submitHandeler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandeler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let rendenderTask = <h2>no task avalible</h2>;
  if (mainTask.length > 0) {
    rendenderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3 items-center">
            <h4 className="text-2xl font-semibold">{t.title}</h4>
            <h6 className="text-lg font-medium">{t.desc}</h6>
            <button
              onClick={() => {
                deleteHandeler(i);
              }}
              className="bg-red-400 rounded font-bold text-white px-4 py-2"
            >
              delete
            </button>
            <hr />
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-2xl font-bold text-center">
        your todo list
      </h1>
      <form onSubmit={submitHandeler}>
        <input
          type="text"
          className="border-zinc-800 border-2 m-5 px-4 py-2 text-2xl"
          placeholder="enter your task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-zinc-800 border-2 m-5 px-4 py-2 text-2xl"
          placeholder="enter your discription"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold m-5 rounded">
          add task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{rendenderTask}</ul>
      </div>
    </>
  );
};

export default page;
