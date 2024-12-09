'use client'

import OutlinedButton from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import React from 'react'


function CareerPage() {
  return (
    <div className='flex flex-col items-center my-20 font-poppins lg:my-[150px]'>
        <div className='flex flex-col text-center gap-[15px] md:w-[600px]'>
            <h1 className='font-bold text-2xl md:text-4xl'>Get Connected to the Best Remote Jobs in Your Field</h1>
            <p className='font-semibold text-slate-500 mb-[40px]'>Discover a wide range of remote opportunities on our platform and take control of your career</p>
        </div>
        <div className='flex justify-center mb-8 md:mb-[100px]'>
          <button
            type='button'
            className='font-bold ring-none !ring-transparent focus-visible:outline-secondary-500 focus-visible:ring-secondary-400 bg-secondary text-sm text-white border-[1px] py-[10px] px-[20px] rounded-full md:text-base hover:drop-shadow-xl'
          >
            Explore Remote Jobs
          </button>
          

          <OutlinedButton />
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='font-semibold text-slate-600'>Featured Jobs</h1>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <Card 
              imgUrl={'/images/figma.png'}
              jobTitle='Front-end Developer'
              platform='Figma'
              text='We are looking for an experienced front-end developer to join our team.'
              tag='Rust'
              currency='$70,000 - $90,000'
            />
            <Card 
              imgUrl={'/images/facebook.png'}
              jobTitle='DataScientist'
              platform='Facebook'
              text='We are seeking a data scientist to join our team'
              tag='Python'
              currency='$100,000 - $130,000'
            />
            <Card 
              imgUrl={'/images/vercel.png'}
              jobTitle='Technical Writer'
              platform='Vercel'
              text='We are seeking a technical writer to join our team.'
              tag='Documentation'
              currency='$60,000 - $80,000'
            />
          </div>
        </div>
    </div>
  )
}

export default CareerPage