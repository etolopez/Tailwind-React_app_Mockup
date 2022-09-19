import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className="w-full text-white my-28">
      <div className=" w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white  my-5">
            The right price for your research
          </h3>
          <p className="text-3xl">
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years,
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-5xl font-bold py-4 flex">
                49$
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>

            <p className="text-2xl py-8 text-slate-500">
              'Content here, content here', making it look like readable
              English.
            </p>

            <div className="ml-4">
              <p className="flex py-4 text-2xl relative">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <button className="w-full my-4 py-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-5xl font-bold py-4 flex">
                99$
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>

            <p className="text-2xl py-8 text-slate-500">
              'Content here, content here', making it look like readable
              English.
            </p>

            <div className="ml-4">
              <p className="flex py-4 text-2xl relative">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <p className="flex py-4 text-2xl">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem, ipsom
                dolor
              </p>
              <button className="w-full my-4 py-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
