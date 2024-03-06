import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function FAQ() {
    const question1 =
    "The last date to pay and register for the event is 26th March 2024.";
    const question2 =
    "The registration fee can be paid either in online mode or offline mode.The details for which will be given in the official whatsapp group.";
    const question3 =
    "A team can consist of either two or a single member.For a team of two , members can be  from any department and year";
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center">
            
        </div>
        <Accordion variant="splitted" className='p-2 flex flex-col gap-1 max-w-[500px]'>
      <AccordionItem key="1" aria-label="Accordion 1" title="When is the deadline to pay and register for the event?">
        {question1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How to pay the registration fee?">
        {question2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How many members will be in a team?">
        {question3}
      </AccordionItem>
        </Accordion>
    </div>
  )
}
