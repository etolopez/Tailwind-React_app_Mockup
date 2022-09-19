import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="relative max-w-[1240px] mx-auto text-white">
        <div className="px-4 py-12">
          <h2 className="text-3xlS pt-8 text-slate-300 text-center uppercase">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the Right Team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid grid-cols-1 mx-4 lg:grid-cols-3 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl hover:drop-shadow-xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md" />
              <h3 className="font-bold text-2xl mb-6 mt-2">Sales</h3>
              <p className="text-gray-600 text-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl hover:drop-shadow-xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md" />
              <h3 className="font-bold text-2xl mb-6 mt-2">
                Technical Support
              </h3>
              <p className="text-gray-600 text-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl hover:drop-shadow-xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md" />
              <h3 className="font-bold text-2xl mb-6 mt-2">Media Inquires</h3>
              <p className="text-gray-600 text-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
