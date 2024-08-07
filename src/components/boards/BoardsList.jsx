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
    <div className="flex flex-col grow bg-[#F3F6FD] p-12 gap-8">
      <h1 className=" text-2xl text-[#145389] font-semibold">Frontend Case</h1>

      <div className="flex grow gap-5">
        {boards.data.map((board) => (
          <div key={board.id} className="border rounded-3xl p-4 w-full">
            <h1 className="border-b-2 pb-4">{board.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardsPage;
