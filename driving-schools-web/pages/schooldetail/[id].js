import React from 'react'
import Navbar from '../../components/navbar'
import baseurl from '../../config';
import heroImg from '../../public/img/carimage.png'
import axios from 'axios';
import Container from '../../components/container';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



export async function getServerSideProps({ params }) {
    const { id } = params;
    console.log(params);

    try {
        const res = await axios.get(`${baseurl}searchbyid?id=${id}`);
        const data = res.data;
        console.log(data)


        return {
            props: { data },
        };
    } catch (err) {
        console.error('Error fetching school data:', err);
        return {
            notFound: true,
        };
    }
}




function schooldetail({ data }) {

    return (
        <div className='px-4' >
            <Navbar />
            <Container className="flex flex-wrap ">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8 px-2">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            {data.name}
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            {data.address} <br/>
                            {data.zipcode}  <br/>
                            {data.state} <br/>

                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <a
                                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                                target="_blank"
                                rel="noopener"
                                className="px-6 py-2 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                                Book
                            </a>
                            <a
                                href={`${data.website}`}
                                target="_blank"
                                rel="noopener"
                                className="px-6 py-1 text-lg font-medium text-center text-white bg-indigo-600 rounded-xl ">
                                visit website <FontAwesomeIcon icon={faUpRightFromSquare} />
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={heroImg}
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="Hero Illustration"
                            loading="eager"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default schooldetail