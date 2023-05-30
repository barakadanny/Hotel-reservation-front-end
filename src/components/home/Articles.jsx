import React from 'react'
import house1 from '../../imgs/articles/house1.png'
import house2 from '../../imgs/articles/house2.png'
import house3 from '../../imgs/articles/house3.png'
import house4 from '../../imgs/articles/house4.png'

import profile1 from '../../imgs/profile/profile1.jpg'

import { ClockIcon } from '@heroicons/react/solid'

function Articles() {
  return (
    <div>
      <div className='p-7'>
        <div className='text-center'>
            <h3 className='text-xs text-smallTextColor'>See Tips And Trick From Our Partnership</h3>
            <h2 className='text-textColor text-xl mb-4'>Find Out More About <br/> Selling And Buying Homes</h2>
            <a href="#" className='bg-primaryColor px-3 py-2 rounded-3xl text-xs text-white'>More Artikel</a>
        </div>
        <div>
            <div className='mb-10 mt-10 relative'>
                <div className='absolute -top-[8rem] -left-[10rem] w-[20rem] h-[25rem] rounded-full bg-gradient-to-br from-primaryColor to-yellowColor blur-2xl opacity-30 -z-10 '></div>
                <ul>
                    <li className='mb-5'>
                        <a href="#" className='flex gap-4'>
                            <img src={house2} alt="" className='object-cover w-36 h-24 rounded-lg'/>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-3 ">
                                    <img src={profile1} className="h-5 rounded-full" alt="" />
                                    <div>
                                        <p className="text-sm text-customGray100">John Doe</p>
                                    </div>
                                </div>
                                <p className='text-textColor text-sm'>The things we need to check when we want to buy a house</p>
                                <span className='flex gap-1 text-customGray100'>
                                    <ClockIcon className='w-4 ' />
                                    <p className='text-xs'>4 min read | 25 Apr 2021</p>
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className='mb-5'>
                        <a href="#" className='flex gap-4'>
                            <img src={house3} alt="" className='object-cover w-36 h-24 rounded-lg'/>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-3 ">
                                    <img src={profile1} className="h-5 rounded-full" alt="" />
                                    <div>
                                        <p className="text-sm text-customGray100">John Doe</p>
                                    </div>
                                </div>
                                <p className='text-textColor text-sm'>The things we need to check when we want to buy a house</p>
                                <span className='flex gap-1 text-customGray100'>
                                    <ClockIcon className='w-4 ' />
                                    <p className='text-xs'>4 min read | 25 Apr 2021</p>
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className='mb-5'>
                        <a href="#" className='flex gap-4'>
                            <img src={house4} alt="" className='object-cover w-36 h-24 rounded-lg'/>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-3 ">
                                    <img src={profile1} className="h-5 rounded-full" alt="" />
                                    <div>
                                        <p className="text-sm text-customGray100">John Doe</p>
                                    </div>
                                </div>
                                <p className='text-textColor text-sm'>The things we need to check when we want to buy a house</p>
                                <span className='flex gap-1 text-customGray100'>
                                    <ClockIcon className='w-4 ' />
                                    <p className='text-xs'>4 min read | 25 Apr 2021</p>
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <img src={house1} alt="" className='mb-3 rounded-lg' />
                <div>
                    <div className="flex items-center gap-3 mb-3 ">
                        <img src={profile1} className="h-5 rounded-full" alt="" />
                        <div>
                            <p className="text-sm text-customGray100">John Doe</p>
                        </div>
                    </div>
                    <h3 className='mb-3 text-lg text-textColor'>12 Things to know before buying a house</h3>
                    <p className='text-xs text-customGray100 mb-3'>
                        Want to buy a house but are unsure about what we should know, 
                        here I will try to explain what we should know and check when 
                        we want to buy a house
                    </p>
                    <span className='flex gap-1 text-customGray100'>
                        <ClockIcon className='w-4 ' />
                        <p className='text-xs'>4 min read | 25 Apr 2021</p>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
