import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function FAQ() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">Frequently Asked Questions?</h3>
        </div>
        <Accordion variant="splitted" className='p-2 flex flex-col gap-1 max-w-[500px]'>
      <AccordionItem key="1" aria-label="Accordion 1" title="Question 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Question 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Question 3">
        {defaultContent}
      </AccordionItem>
        </Accordion>
    </div>
  )
}
