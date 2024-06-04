import { getProviders, getCsrfToken, signIn } from "next-auth/react"
import Link from "next/link"

export default function SignIn({ providers, csrfToken }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-md shadow-md">
      <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span> DriveEasy</span>
                  </span>
                </Link>
        <form method="post" action="/api/auth/callback/credentials" className="space-y-6">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div>
            <input 
              name="email" 
              type="email" 
              placeholder="Email"
              required 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <div>
            <input 
              name="password" 
              type="password" 
              placeholder="Password"
              required 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
        <div>
         <p>Not registered ?</p>
         <Link href="/auth/signup" className="text-indigo-600">Sign up</Link>
        </div>
      
        <hr className="my-3" />
        <div className="space-y-4">
          {Object.values(providers).map((provider) => {
            if (provider.id !== "credentials") {
              return (
                <div key={provider.name}>
                  <button 
                    onClick={() => signIn(provider.id)} 
                    className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)

  return {
    props: {
      providers: providers ?? [],
      csrfToken: csrfToken ?? null,
    },
  }
}
