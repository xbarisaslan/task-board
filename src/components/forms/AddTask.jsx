import React, { useState } from "react";
import { addTask } from "@/lib/add-task";

function AddTask({ boardId, onTaskAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(""); // State for start date
  const [endDate, setEndDate] = useState(""); // State for end date

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await addTask({
        name,
        description,
        startDate,
        endDate,
        boardId,
      });
      console.log("Task successfully created:", data);
      onTaskAdded(data);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-3 space-y-5 border py-3 mt-4"
    >
      <input
        className="border-b-2 p-1 bg-transparent outline-none w-full"
        id="name"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border-b-2 p-1 bg-transparent outline-none w-full"
        id="description"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="border-b-2 p-1 bg-transparent outline-none w-full"
        id="start_date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        className="border-b-2 p-1 bg-transparent outline-none w-full"
        id="end_date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#145389] text-white rounded-md py-0.5"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
