'use client';

import ImageSlider from '../components/image.slider';
import { SparklesCore } from '../components/sparkles';
import AnimationRevealPage from './helpers/AnimationRevealPage';
import Header from '../components/header';
import { Spotlight } from '@/components/spotlight';
import { Button } from '@/components/ui/button';
import { Features } from '@/components/features';
import { RoomsPreview } from '@/components/RoomsPreview';
import { FAQs } from '@/components/faqs';
import { Footer } from '@/components/footer';
export default function Home() {
  return (
    <>
      <Header />
      <AnimationRevealPage>
        <div className='flex flex-col '>
          <div className='flex items-center justify-center p-8'>
            <div className='w-2/4 flex flex-col'>
              <div className='h-[40rem] w-full rounded-md flex py-20 mt-10 md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden'>
                <Spotlight
                  className='top-40 left-0 md:left-60 md:top-[-9rem]'
                  fill='white'
                />
                <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0'>
                  <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-sky-500 bg-opacity-50'>
                    ParadiseView.
                  </h1>

                  <div className='w-[40rem] h-40 relative'>
                    {/* Gradients */}
                    <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
                    <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
                    <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
                    <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

                    {/* Core component */}
                    <SparklesCore
                      background='transparent'
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={1500}
                      className='w-full h-1/2'
                      particleColor='#50C4ED'
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className='absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'>
                      <p className='mt-4 font-normal text-2xl text-muted-foreground max-w-lg text-center mx-auto my-8 py-14'>
                        Welcome to ParadiseView, where luxury meets nature in
                        perfect harmony.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center w-full'>
                    <Button className=' bg-gradient-to-r from-indigo-400 to-sky-300 w-1/2 p-8 text-foreground font-semibold text-xl hover:bg-indigo-500'>
                      Browse rooms
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-2/4 p-16'>
              <ImageSlider
                urls={[
                  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
                  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
                  'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
                  'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
                ]}
              />
            </div>
          </div>
          {/* features */}
        </div>
        <Features />
        <RoomsPreview />
        <FAQs />
        <Footer />
      </AnimationRevealPage>
    </>
  );
}
