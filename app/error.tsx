'use client'

import { useEffect } from 'react'
import Link from "next/link";

export default function Error({
                                error,
                                reset,
                              }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={'flex min-h-screen items-center justify-center text-white'}>
      <div className={'flex flex-col items-center backdrop-blur-sm bg-white/30 p-24 rounded-2xl'}>
        <h2>Something went wrong!</h2>
        <Link className={'hover:text-purple-400'} href="/">Return Home</Link>
      </div>
    </div>
  )
}
