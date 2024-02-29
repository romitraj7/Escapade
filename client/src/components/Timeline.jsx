import React from "react"
import { Chrono } from "react-chrono";
const Timeline = () => {
  const items = [{
    title: "3rd APRIL",
    cardTitle: "Register",
    url: "http://www.history.com",
    cardSubtitle:"",
    cardDetailedText: "Register before date to be successfully registered in EScapade",

  },
  {
    title: "9:30 Am",
    cardTitle: "IQ ODYSSEY",
    url: "",
    cardSubtitle:"1st Round",
    cardDetailedText: "1st Round Of Escapade",
  },{
    title: "12 Noon",
    cardTitle: "QUIZ",
    url: "",
    cardSubtitle:"2nd Round",
    cardDetailedText: "2nd Round Of Escapade",

  },{
    title: "3PM",
    cardTitle: "ESCAPADE",
    url: "",
    cardSubtitle:"3rd Round",
    cardDetailedText: "Final Round of Escapade",

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