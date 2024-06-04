"use client"
import axios from "axios"
import { getCsrfToken } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"
import baseurl from "../../config"
import Link from "next/link"


export default function SignUp({ csrfToken }) {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const submit = async (event) => {
    event.preventDefault()

    const res = await fetch(`${baseurl}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        csrfToken,
        name,
        email,
        password,
      }),
    })

    const data = await res.json()
    if (res.ok) {
      console.log('Signup successful:', data)
      router.push('/auth/signin')
    } else {
      console.error('Signup error:', data)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-md shadow-md">
        <form onSubmit={submit} className="space-y-6">
        <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span> DriveEasy</span>
                  </span>
                </Link>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div>
            <input 
              name="name" 
              type="text" 
              placeholder="User's name"
              required 
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full p-2 border bg-slate-50 border-gray-300 rounded-md" 
            />
          </div>
          <div>
            <input 
              name="email" 
              placeholder="Email"
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-gray-300 rounded-md" 
            />
          </div>
          <div>
            <input 
              name="password" 
              type="password" 
              placeholder="Password"
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
  
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)

  return {
    props: {
      csrfToken: csrfToken ?? null,
    },
  }
}
