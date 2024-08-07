function Navbar() {
  return (
    <div className="w-full flex items-center justify-between py-3 px-8 border-b border-[#EAECF0]">
      <h1 className="text-[#145389] font-bold text-2xl">kargakarga</h1>
      <div className="flex gap-x-4">
        <img className="w-7" src="/bell.svg" />
        <img className="w-7" src="/bell.svg" />
      </div>
    </div>
  );
}

export default Navbar;
