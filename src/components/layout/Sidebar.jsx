function Sidebar() {
  return (
    <div className="bg-[#363F72] px-3 hidden md:flex flex-col justify-between items-center ">
      <div className="flex flex-col items-center gap-y-5 pt-6">
        <img className="w-9" src="/bell.svg" />
        <img className="w-9" src="/bell.svg" />
        <img className="w-9" src="/bell.svg" />
        <img className="w-9" src="/bell.svg" />
      </div>

      <div className="flex flex-col items-center gap-y-5 pb-6">
        <img className="w-9 " src="/bell.svg" />
        <img className="w-9" src="/bell.svg" />
        <img className="w-9" src="/bell.svg" />
        <img className="w-9" src="/bell.svg" />
        <div className="bg-white rounded-full flex items-center justify-center h-12 w-12"></div>
      </div>
    </div>
  );
}

export default Sidebar;
