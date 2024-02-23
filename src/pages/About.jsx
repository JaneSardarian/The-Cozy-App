import { useState } from 'react'
import hero3 from '../assets/hero3.jpg'

const About = () => {
  useState(false)
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love The Cozy
        </h1>
      </div>

      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sit
        omnis nihil numquam aspernatur delectus? Sequi aliquid perferendis
        molestias dolor, sed et recusandae est ullam aperiam quos id ab
        expedita?
      </p>
    </>
  )
}
export default About
