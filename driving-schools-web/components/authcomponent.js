'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import axios from 'axios'
import { useEffect } from 'react'
import baseurl from "../config"
import Image from "next/image"
import personIcon from '../public/img/person_icon.png' // Import your default person icon
import Link from "next/link"

export default function Authcomponent() {

  const { data: session } = useSession()

  console.log(session);

  

  useEffect(() => {
    if (session) {
      const bodyData = {
        name: session.user.name,
        email: session.user.email
      }

      console.log(bodyData)

      const postData = async () => {
        try {
          const res = await axios.post(`${baseurl}register`, bodyData)
          console.log(res)
        } catch (error) {
          console.log(error)
        }
      }

      postData()
    }
  }, [session])

  if (session) {
    return (
      <div className="text-white flex items-center">
        <Link href="/userdetail" >
        <Image
          src={session.user.image ? session.user.image : personIcon}
          width={50}
          height={50}
          alt="User Image"
          className="rounded-full border border-indigo-500 border-spacing-2 m-x-2"
        /></Link>
        <button onClick={() => signOut()} className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
          Sign out
        </button>
      </div>
    )
  }

  return (
    <>
      <br />
      <button onClick={() => signIn()} className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
        Sign in
      </button>
    </>
  )
}
