"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Accordion = ({ title, initialOpen }) => {
  const [show, setShow] = useState(initialOpen || false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer hover:text-[#145389] ease-in duration-150"
        onClick={toggle}
      >
        <div className="font-medium">{title}</div>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`h-4 w-4 transform transition-transform duration-200 ease-in-out ${
            show ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <Transition
        show={show}
        enter="transition-all duration-200 ease-in-out"
        enterFrom="h-0 opacity-0"
        enterTo="h-auto opacity-100"
        leave="transition-all duration-200 ease-in-out"
        leaveFrom="h-auto opacity-100"
        leaveTo="h-0 opacity-0"
      >
        <div className="ease-in-out duration-150 space-y-3 pt-3">
          <div className="flex items-center justify-between w-full text-sm">
            <p>Overview</p>
            <div className="bg-white rounded-full flex items-center justify-center h-7 w-8 border-2">
              10
            </div>
          </div>

          <div className="flex items-center justify-between w-full text-sm">
            <p>Notifications</p>
            <div className="bg-white rounded-full flex items-center justify-center h-7 w-8 border-2">
              10
            </div>
          </div>

          <div className="flex items-center justify-between w-full text-sm">
            <p>Analytics</p>
            <div className="bg-white rounded-full flex items-center justify-center h-7 w-8 border-2">
              10
            </div>
          </div>

          <div className="flex items-center justify-between w-full text-sm">
            <p>Reports</p>
            <div className="bg-white rounded-full flex items-center justify-center h-7 w-8 border-2">
              10
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Accordion;
