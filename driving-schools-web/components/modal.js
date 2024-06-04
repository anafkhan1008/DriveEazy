"use client";
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Link from 'next/link';

const baseurl = require('../config');
import suggestions from '../cityList';
import Autofinish from './autofinish';





Modal.setAppElement('#__next');

const CustomModal = ({ isOpen, onRequestClose }) => {

  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]); 
  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
  ];

  const icons = {
    Mumbai: 'https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png',
    Delhi: 'https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png',
    Bangalore: 'https://in.bmscdn.com/m6/images/common-modules/regions/bang.png',
    Hyderabad: 'https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png',
    Chennai: 'https://in.bmscdn.com/m6/images/common-modules/regions/chen.png',
    Kolkata: 'https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png',
    Pune: 'https://in.bmscdn.com/m6/images/common-modules/regions/pune.png',
    Ahmedabad: 'https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png',
  };

  const handleInputChange = (value) => {
    setInput(value);
   
  };
  
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Welcome Modal" className="modal" overlayClassName="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl text-black font-bold mb-2">Welcome to <span className='text-bold'>DriveEasy!</span></h2>
        <p className="mb-4 text-black">Your premier online resource for finding the best driving schools.</p>

        <Autofinish suggestions={suggestions} onChange={handleInputChange} />

        <p>Popular cities</p>
        <ul className="city-list mb-4 grid grid-cols-2 gap-4">
          {cities.map((city) => (
            <li key={city} className="flex flex-col justify-center items-center mb-2 text-black">
              <img src={icons[city]} alt={city} className="w-10 h-10 mb-2" />
              {city}
            </li>
          ))}
        </ul>
        <p id='all' className='mb-2'>View all</p>

        <button onClick={onRequestClose} className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
