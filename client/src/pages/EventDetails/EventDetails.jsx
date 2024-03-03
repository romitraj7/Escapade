import React from 'react';
import './EventDetails.css'
import EventHeader from './EventHeader';
const EventDetails = () => {
  return (
   <>
      <EventHeader/>   
    <div className="event-details">
      <h2 className='flex justify-center'> ESCAPADE INSTRUCTIONS :</h2>
      <div className="instruction">
        <h3>Identification & Tokens:</h3>
        <ul>
          <li>Ensure you bring your valid ID card.</li>
          <li>Participants must have their assigned tokens for event access.</li>
        </ul>
      </div>

      <div className="instruction">
        <h3>Team Formation:</h3>
        <p>Form teams of two members each from any department.</p>
      </div>

      <div className="instruction">
        <h3>Assembly Time & Venue:</h3>
        <p>Be present and adjusted by 9:45 AM in the ECE Department.</p>
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
        <p>The organizers' decisions on any matter are final.</p>
      </div>

      <div className="instruction">
        <h3>Fair Play:</h3>
        <p>Strict action against participants using unfair means during exams.</p>
      </div>

      <div className="instruction">
        <h3>Second Round Qualifiers:</h3>
        <p>Refreshments provided for teams qualifying in the second round.</p>
      </div>

      <div className="instruction">
        <h3>Participation Fees:</h3>
        <p>Team: ₹60 | Individual: ₹30</p>
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
   </>
  );
};

export default EventDetails;
