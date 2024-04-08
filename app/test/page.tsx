'use client';

import Component from '@/components/test';

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  console.log('client');
  return (
    <div>
      <h1 className='bg-white w-full'>Hello, Dashboard Page!</h1>;
      <Component />
    </div>
  );
}
