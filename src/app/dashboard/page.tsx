import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Projects from "@/components/layout/Projects";
import BoardsList from "@/components/boards/BoardsList";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex grow">
        <Sidebar />
        <Projects />
        <BoardsList />
      </div>
    </div>
  );
}
