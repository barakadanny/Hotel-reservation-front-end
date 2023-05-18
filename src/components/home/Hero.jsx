import React from 'react'
import HeroImg from '../../imgs/hero.png';

// partners
import tripadvisor from '../../imgs/tripadvisor.png';
import traveloka from '../../imgs/traveloka.png';
import tiketo from '../../imgs/tiketo.png';
import airbnb from '../../imgs/airbnb.png';

// Profiles imgs
import Insight from './Insight';
import profile1 from '../../imgs/profile/profile1.jpg'
import profile2 from '../../imgs/profile/profile2.jpg'
import profile3 from '../../imgs/profile/profile3.jpg'
import profile4 from '../../imgs/profile/profile4.jpg'

function Hero() {
  return (
    <section className=''>
        <div className='relative w-full'>
            {/* left side */}
            <article className='px-5 pt-24 pb-5 bg-gradient-to-br from-primaryColor to-slate-white'>
                <h1 className='text-4xl font-extrabold text-textColor mb-5'>Find the place to <br/>Live  <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-white'>your dreams</span><br/> easily here</h1>
                <p className='text-paragraphColor'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
                <div className='relative w-full inline-flex items-center mt-8 mb-8'>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Location, Hotel"
                        className="block w-full px-4 py-4 bg-white text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-full caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 drop-shadow-xl"
                        required
                    />
                    <button type="submit" className="absolute text-sm top-1 right-1 items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-primaryColor border border-transparent rounded-full hover:bg-blue-800 focus:bg-blue-800">
                        Search
                    </button>
                </div>
                <article>
                    <p className='text-paragraphColor'>Our Partners</p>
                    <ul className='flex justify-between'>
                        <li>
                            <img src={tripadvisor} alt="tripadvisor" />
                        </li>
                        <li>
                            <img src={traveloka} alt="traveloka" />
                        </li>
                        <li>
                            <img src={tiketo} alt="tiketo" />
                        </li>
                        <li>
                            <img src={airbnb} alt="airbnb" />
                        </li>
                    </ul>
                </article>
            </article>
            {/* right side */}
            
            <article className='relative overflow-hidden'>
                <img src={HeroImg} className="w-full" alt="" />
                <div className='absolute bottom-4 left-4 w-full overflow-x-scroll scrollbar-hide md:scrollbar-default pr-8'>
                    <ul className='flex flex-row w-max gap-3'>
                        <Insight imageObj={[profile1, profile2, profile3]} styleClasses='w-10 h-10 border-[0.2rem] border-white rounded-full' metricsText='1K+ people' spanText='Successfully Getting Homes'  />
                        <Insight imageObj={[profile3]} styleClasses='w-10 h-10 border-[0.2rem] border-white rounded-full' metricsText='56 Houses' spanText='Sold Monthly'  />
                        <Insight imageObj={[profile4]} styleClasses='w-10 h-10 border-[0.2rem] border-white rounded-full' metricsText='4K+' spanText='People Looking for New Homes'  />
                    </ul>
                </div>
            </article>
        </div>
    </section>

  )
}

export default Hero
