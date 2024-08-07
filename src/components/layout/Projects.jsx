import Accordion from "@/components//ui/Accordion";

function Sidebar() {
  return (
    <div className="flex flex-col items-start justify-between p-8 border-r w-[15%]">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-xl">Projeler</h1>
        <div className="flex flex-col gap-y-5 pt-6 w-full">
          <Accordion title="Proje İsim 1" initialOpen={false} />
          <Accordion title="Proje İsim 2" initialOpen={false} />
          <Accordion title="Proje İsim 3" initialOpen={false} />
          <Accordion title="Proje İsim 4" initialOpen={false} />
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">Barış Aslan</p>
        <p>baslan374@gmail.com</p>
      </div>
    </div>
  );
}

export default Sidebar;
