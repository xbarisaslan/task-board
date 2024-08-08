"use client";

import { useState, useEffect } from "react";
import { fetchBoards } from "@/lib/fetch-boards";

const BoardsPage = () => {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="flex flex-col grow bg-[#F3F6FD] p-6 md:p-12 gap-8 overflow-x-scroll">
      <h1 className=" text-2xl text-[#145389] font-semibold">Frontend Case</h1>
      <div className="flex flex-col md:flex-row grow gap-5 ">
        {boards.data.map((board) => (
          <div
            key={board.id}
            className="flex flex-col  border rounded-3xl p-4 min-w-[20rem] group cursor-pointer"
          >
            <h1 className="border-b-2 pb-4 text-[#4E5BA6] text-xl">
              {board.name}
            </h1>
            {board.tasks && board.tasks.length > 0 ? (
              <ul className="pt-4 space-y-8">
                {board.tasks.map((task, index) => (
                  <li key={index} className="border p-3 rounded-xl">
                    <p>{task.name}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="h-fit m-auto ">
                <img src="/empty.png" />
                <div className="md:opacity-0 md:group-hover:opacity-100 ease-in duration-150 text-2xl text-gray-500 text-center pt-3 md:pt-8">
                  + New Task
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardsPage;
