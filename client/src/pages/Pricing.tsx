import React from 'react'
import { appPlans } from '../assets/assets';

interface Plan {
  id: string;
  name: string;
  price: string;
  credites: number;
  description: string;
  features: string[];
}

const Pricing = () => {
  const [plans] = React.useState<Plan[]>(appPlans)
  return (
    <>
       <div className='w-full max-w-5xl mx-auto z-20 max-md:px-4 min-h[80vh]'>
        <div className='text-center mt-16'>
          <h1 className='text-gray-100 text-3xl font-medium'>Choose Your Plan</h1>
          <p className='text-gray-400 text-sm max-w-md mx-auto mt-2'>Start for free and scale up as you grow, Find the perfect plan for your content creation needs.</p>
        </div>

       </div>
    </>
  )
}

export default Pricing
