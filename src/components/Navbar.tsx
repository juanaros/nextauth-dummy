"use client"

import Link from 'next/link'
import {signIn, useSession, signOut} from 'next-auth/react'
// import Image from 'next/image'

function Navbar() {

    const {data: session} = useSession()

    return (
        <nav className="bg-gray-900 p-5">
        <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-xl font-bold" href="/">
            Ejemplo
        </Link>
            <div className="flex space-x-4">
                {session?.user ? (
                    <div className='flex gap-4 items-center'>
                        <Link href="/dashboard" className="text-gray-300 hover:text-white transition duration-300">
                            Dashboard
                        </Link>
                        <p className='text-white'>{session.user.name}</p>
                        <button className='text-slate-100' onClick={() => signOut({callbackUrl: "/"})}>Logout</button>
                    </div>
                ) :
                <button className='text-slate-200 border rounded-full px-5 bg-sky-600' onClick={() => signIn()}>Sign In</button>}
            </div>
        </div>
    </nav>
    )
}

export default Navbar
