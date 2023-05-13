import React from 'react'
import profile1 from '../../imgs/profile/profile1.jpg'

const Insight = () => {
  return (
    <li className='bg-white rounded-3xl p-3 py-4 pr-6 flex'>
        <div className='flex gap-6 items-center'>
            <figure className='flex '>
                <img src={profile1} className="w-10 h-10 border-[0.2rem] border-white rounded-full" alt="" />
                <img src={profile1} className="w-10 h-10 -ml-5 border-[0.2rem] border-white rounded-full" alt="" />
                <img src={profile1} className="w-10 h-10 -ml-5 border-[0.2rem] border-white rounded-full" alt="" />
            </figure>
            <div className=''>
                <p className='font-bold text-sm'>1K+ people <span className='block text-paragraphColor text-xs font-normal mt-1'>Successfully Getting Homes</span></p>
            </div>
        </div>
    </li>
  )
}

export default Insight
