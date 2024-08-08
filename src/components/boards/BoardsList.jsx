"use client";

import { useState, useEffect } from "react";
import { fetchBoards } from "@/lib/fetch-boards";
import Filters from "@/components/boards/Filters";
import AddTask from "@/components/forms/AddTask";
import Modal from "@/components/ui/Modal";

const BoardsPage = () => {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeBoardId, setActiveBoardId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const getBoards = async () => {
      try {
        const data = await fetchBoards();
        setBoards(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getBoards();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col grow bg-[#F3F6FD] p-6 md:p-12 gap-6 overflow-x-scroll">
      <h1 className="text-2xl text-[#145389] font-semibold">Frontend Case</h1>
      <Filters />
      <div className="flex flex-col md:flex-row grow gap-5 ">
        {boards.data.map((board) => (
          <div
            key={board.id}
            className="flex flex-col border rounded-3xl p-4 min-w-[22rem] group"
          >
            <div className="flex items-center justify-between w-full border-b-2 pb-3">
              <h1 className=" text-[#4E5BA6] text-xl">{board.name}</h1>
              <img
                src="/plus.png"
                className="cursor-pointer"
                onClick={() =>
                  setActiveBoardId(activeBoardId === board.id ? null : board.id)
                }
              />
            </div>
            {activeBoardId === board.id && <AddTask boardId={board.id} />}
            {board.tasks && board.tasks.length > 0 ? (
              <ul className="pt-4 space-y-8 cursor-pointer">
                {board.tasks.map((task) => (
                  <li
                    key={task.id}
                    className="border p-3 rounded-xl space-y-2"
                    onClick={() => openModal(task)}
                  >
                    <div className="rounded-full float-right w-8 text-center h-8 border ">
                      ...
                    </div>
                    <h1>{task.name}</h1>
                    <p className="text-[#475467]">{task.description}</p>
                    <div className="text-[#98A2B3] text-sm flex items-center gap-2">
                      <img src="/calendar.png" className="mb-0.5" />{" "}
                      {formatDate(task.startDate)} - {formatDate(task.endDate)}
                    </div>
                    <p className="text-[#98A2B3] text-sm">Milestone Name</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="h-fit m-auto ">
                <img src="/empty.png" />
                <div
                  className="md:opacity-0 md:group-hover:opacity-100 ease-in duration-150 text-2xl text-gray-500 text-center pt-3 md:pt-8 cursor-pointer"
                  onClick={() =>
                    setActiveBoardId(
                      activeBoardId === board.id ? null : board.id
                    )
                  }
                >
                  + New Task
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedTask && (
          <div className="text-start space-y-8">
            <div>
              <p className="text-[#475467] text-3xl font-bold">
                {selectedTask.name}
              </p>
              <p>ID: #435365</p>
            </div>
            <div className="flex items-center gap-12 md:gap-20">
              <div>
                <p className="text-[#475467]">Task Status</p>
                <p className="font-semibold"> Open</p>
              </div>
              <div>
                <p className="text-[#475467]">Assignment</p>
                <ul className="flex">
                  <li className="rounded-full  w-9 text-center h-9 border"></li>
                  <li className="rounded-full  w-9 text-center h-9 border"></li>
                  <li className="rounded-full  w-9 text-center h-9 border"></li>
                </ul>
              </div>
              <p className="text-[#475467]">Priority</p>
            </div>
            <div className="text-[#475467] font-medium">
              <p>Description</p>
              <p>{selectedTask.description}</p>
            </div>
            <div className="absolute top-4 right-4 md:right-20 border p-2 px-5 rounded-2xl text-sm md:text-md">
              {formatDate(selectedTask.startDate)} -{" "}
              {formatDate(selectedTask.endDate)}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BoardsPage;
