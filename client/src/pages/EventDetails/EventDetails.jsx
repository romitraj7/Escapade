import React from 'react';
import './EventDetails.css'
import EventHeader from './EventHeader';

const EventDetails = () => {
  return (
   <div className='instruction-background'>
      <EventHeader/>   
    <div className="event-details">
      <h2 className='flex justify-center font-feelfree text-5xl underline'> Escapade Instructions :</h2>
      <div className="instruction">
        <h3>Identification & Tokens:</h3>
        <ul>
          <li>Ensure you bring your valid ID card.</li>
          <li>Participants must have their assigned tokens for event access.</li>
        </ul>
      </div>

      <div className="instruction">
        <h3>Team Formation:</h3>
        <ul>
        <li>Form teams of two members each from any department.</li>
        </ul>
      </div>

      <div className="instruction">
        <h3>Assembly Time & Venue:</h3>
        <li>Be present and adjusted by 9:45 AM in the ECE Department.</li>
      </div>

      <div className="instruction">
        <h3>Team Naming Guidelines:</h3>
        <ul>
          <li>Create a unique team name.</li>
          <li>Avoid team names with inappropriate slangs.</li>
        </ul>
      </div>

      <div className="instruction">
        <h3>Organizer's Decision:</h3>
        <li>The organizers' decisions on any matter are final.</li>
      </div>

      <div className="instruction">
        <h3>Fair Play:</h3>
        <li>Strict action against participants using unfair means during exams.</li>
      </div>

      <div className="instruction">
        <h3>Second Round Qualifiers:</h3>
        <li>Refreshments provided for teams qualifying in the second round.</li>
      </div>

      <div className="instruction">
        <h3>Participation Fees:</h3>
        <li>Team: ₹60 | Individual: ₹30</li>
      </div>

      <div className="instruction">
        <h3>Contact for Queries:</h3>
        <ul>
          <li>Anuran Chatterjee: 8240489824</li>
          <li>Sudhanshu Rathore: 9801201715</li>
          <li>Swagata Mondal: 7449950207</li>
        </ul>
      </div>
    </div>
   </div>
  );
};

export default EventDetails;
