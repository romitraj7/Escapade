import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function FAQEvent() {
    const question1 =
    "Refreshments will be provided to all the teams who qualify for the 2nd round.";
    const question2 =
    "The participants certificate from this event can be used to avail MAR points which are mandatory for every student to submit at the end of an year.";
    const question3 =
    "Answer3";
  return (
    <div className='flex flex-col justify-center items-center'>
        <div id="FAQ's" className='p-10'> 
         <h3 className="flex justify-center font-bold mt-4 font-luckyfarmer text-4xl md:text-5xl underline">Frequently Asked Questions?</h3>       
      </div>
        <Accordion variant="splitted" className='p-2 flex flex-col gap-1 max-w-[500px]'>
      <AccordionItem key="1" aria-label="Accordion 1" title="What are the perks of this event?">
        {question1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How can the participant certificate be used?">
        {question2}
      </AccordionItem>
      {/* <AccordionItem key="3" aria-label="Accordion 3" title="How can this even?">
        {question3}
      </AccordionItem> */}
        </Accordion>
    </div>
  )
}
