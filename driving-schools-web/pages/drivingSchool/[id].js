import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import baseurl from '../../config';
import axios from 'axios';
import ListSchools from '../../components/listschools'; 

export async function getServerSideProps({ params }) {
  const { id } = params; 
  console.log(params);

  try {
    const res = await axios.get(`${baseurl}search?id=${id}`);
    const data = res.data;


    return {
      props: { data , id }, 
    };
  } catch (err) {
    console.error('Error fetching school data:', err);
    return {
      notFound: true, 
    };
  }
}


function Product({ data , id }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data) {
      setError('An error occurred fetching school details.'); 
    }
  }, [data]);

  return (
    <div className="p-4" >
      <Navbar />
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className='flex justify-center items-center font-bold text-2xl p-4 shadow-lg'>
            {id}
          </div> 
          <ListSchools data={data} />
        </>
      )}
    </div>
  );
}

export default Product;

