import React from "react"
import { Chrono } from "react-chrono";
const Timeline = () => {
  const items = [{
    title: "3rd APRIL",
    cardTitle: "Register",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

  },
  {
    title: "May 1940",
    cardTitle: "IQ ODYSSEY",
    url: "http://www.history.com",
    cardSubtitle:"1st Round",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  },{
    title: "May 1940",
    cardTitle: "QUIZ",
    url: "http://www.history.com",
    cardSubtitle:"2nd Round",
    cardDetailedText: "Event Details to know more click on the link..",

  },{
    title: "May 1940",
    cardTitle: "ESCAPADE",
    url: "http://www.history.com",
    cardSubtitle:"3rd Round",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

  }];

  return (
    <>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">Timeline</h3>
        </div>
        <div style={{ width: '500px', height: '950px' }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
        </div>
    </>
  )
}
export default Timeline