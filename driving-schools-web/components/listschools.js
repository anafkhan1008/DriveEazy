import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function ListSchools({ data }) {
  console.log(data);
  
  return (
    <div className='px-2' >
      {data.map((school, index) => (
        <div key={index} className="result-item p-4 flex justify-between items-center">
          <div>
         
            <h3 className="text-xl font-bold"> <span> <FontAwesomeIcon icon={faCar} className="text-xl mr-2" /> </span> {school.name}</h3>
            <p>{school.address}</p> 
          </div>
          <div className="ml-auto">
            <Link href={`/schooldetail/${school._id}`} >
              <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700">
              Details
            </button>
            </Link>
          
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListSchools;

