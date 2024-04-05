import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function AccordionAlwaysOpen() {
  const [show, setShow] = useState({});
  
  const toggleShow = (collapseKey) => {
    setShow(prevState => ({ ...prevState, [collapseKey]: !prevState[collapseKey] }));
  };

  const accordionItems = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <div className="w-[90%] shadow-lg  ml-[5%]">

    <div className=" grid md:grid-cols-2 ">
      <div className="md:translate-y-1/4">

      <h2 className="font-bold md:text-8xl text-4xl mt-5 text-[#1D4ED8] text-center tracking-tight">FAQ</h2>
        <p className=" font-semibold md:text-xl text-md text-[#1D4ED8] text-center mt-3 mb-3">Frequently asked questions</p>
      </div>
   
    <div className="flex flex-col  w-[100%]">
      {accordionItems.map((item) => (
        <div key={`accordion-${item}`} className={`border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 ${item !== 1 ? 'border-t-0' : ''}`}>
          <h2 className="mb-0">
            <button
              className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800  transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white ${show[`collapse${item}`] ? 'text-white bg-blue-800 box-shadow:inset_0_-1px_0_rgba(229,231,235) dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]' : ''}`}
              type="button"
              onClick={() => toggleShow(`collapse${item}`)}
              aria-expanded="true"
              aria-controls={`collapse${item}`}
            >
              Accordion Item #{item}
              <span className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300 ${show[`collapse${item}`] ? 'rotate-[-180deg] -mr-1' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse show={show[`collapse${item}`]} className={`!mt-0 ${item !== 1 ? '!rounded-b-none' : ''} !shadow-none`}>
            <div className="px-5 py-4">
              <strong>This is the item #{item}'s accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas ligula in varius. Proin ac erat pretium, ultricies leo at, cursus ante. Pellentesque at odio euismod, mattis urna ac, accumsan metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem. Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
      ))}
    </div>
              </div>
    </div>
  );
}
