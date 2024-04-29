import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

const AccordionItem = ({ item, show, toggleShow }) => {
  // Define the question and answer for each item
  const questions = [
    "What is Swa-Knee?",
    "How does Swa-Knee function?",
    "What is PEMF technology?",
    "Are there any side effects associated with Swa-Knee?",
    "Can Swa-Knee be used alongside other treatments?",
    "How long should I use Swa-Knee each day?",
    // Add more questions as needed
  ];

  const answers = [
    "Swa-Knee is a revolutionary medical device designed for pain relief that is both lightweight andportable. It can be conveniently worn over any painful area to alleviate discomfort effectively. ",
    "Swa-Knee combines a biocompatible knee brace with advanced electromagnets that generatePEMF (Pulsed Electromagnetic Field) signals. These signals penetrate clothing and tissues totarget pain at the cellular level, offering pain relief wherever and whenever needed as part of yourdaily lifestyle",
    "PEMF technology, utilized by renowned institutions like NASA and Johns Hopkins for decades, employs electromagnetic waves to stimulate cellular recovery and enhance their energyproduction. Swa-Knee adapts this clinically proven technology into a portable, wearable format that is safe, effective, and free from side effects, making advanced pain relief accessible at homeor on the go",
    "Swa-Knee, utilizing PEMF technology, is free from known side effects. While users might experience a slight warming sensation due to increased blood circulation triggered by PEMF, thisis a normal response and not a side effect",
    "Swa-Knee is designed to complement various treatment modalities, making it a versatile additionto traditional medical treatments or physical therapy routines for comprehensive pain management.",
    "For optimal results, it is recommended to use Swa-Knee for specific durations based ontheseverity of pain and the advice of your healthcare provider, ensuring a personalized approachtopain management.",
    // Add more answers as needed
  ];

  return (
    <div key={`accordion-${item}`} className={`border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 ${item !== 1 ? 'border-t-0' : ''}`}>
      <h2 className="mb-0">
        <button
          className={`group relative flex w-full font-semibold items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-neutral-900  transition hover:z-[2]  focus:z-[3] focus:outline-none   ${show[`collapse${item}`] ?  ' text-white bg-blue-800 ' : ''}`}
          type="button"
          onClick={() => toggleShow(`collapse${item}`)}
          aria-expanded="true"
          aria-controls={`collapse${item}`}
        >
          {questions[item - 1]} {/* Display the question */}
          <span className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300 ${show[`collapse${item}`] ? 'rotate-[-180deg] -mr-1' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <TECollapse show={show[`collapse${item}`]} className={`!mt-0 ${item !== 1 ? '!rounded-b-none' : ''} !shadow-none`}>
        <div className="px-5 py-4">
          <div>{answers[item - 1]}</div> {/* Display the answer */}
        </div>
      </TECollapse>
    </div>
  );
};

export default function AccordionAlwaysOpen() {
  const [show, setShow] = useState({});
  
  const toggleShow = (collapseKey) => {
    setShow(prevState => ({ ...prevState, [collapseKey]: !prevState[collapseKey] }));
  };

  const accordionItems = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="w-[90%] shadow-lg  ml-[5%]">

      <div className="grid md:grid-cols-2">
        <div className="md:translate-y-1/4 md:px-32">
          <h2 className=" md:text-lg font-bold md:font-normal text-4xl mt-1 lg:ml-2 text-[#1E40AF] text-center md:text-start tracking-tight">FAQ</h2>
          <p className="font-bold md:text-5xl text-md text-[#1E40AF] text-center mt-3 mb-3">Frequently Asked Questions</p>
        </div>

        <div className="flex flex-col w-[100%]">
          {accordionItems.map((item) => (
            <AccordionItem key={item} item={item} show={show} toggleShow={toggleShow} />
          ))}
        </div>
      </div>
    </div>
  );
}
