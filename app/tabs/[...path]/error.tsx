'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service

    console.error(error);
  }, [error]);

  return (
    <main className='flex h-screen w-full flex-col items-center justify-center text-white'>
      <h2 className='text-center'>
        {error?.message ?? 'Something went wrong!'}{' '}
      </h2>

      <button
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
