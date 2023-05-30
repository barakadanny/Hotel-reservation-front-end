import React, { useState, useEffect } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          if (scrollTop > 0 && !showShadow) {
            setShowShadow(true);
          } else if (scrollTop === 0 && showShadow) {
            setShowShadow(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [showShadow]);
  return (
    // TO DO: correct the bg color, is supposed to appear only on scroll
    <header className={`${showShadow ? 'drop-shadow-md bg-primaryColor' : ''} bg-opacity-30z-30 bg-primaryColor fixed left-0 right-0 z-30`}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <a href="." title="" className="flex text-xl text-white">
                        <span className='font-bold'>H</span>ayaSaSa
                    </a>
                </div>

                <div
                    className={`flex bg-primaryColor md:bg-transparent drop-shadow-xl flex-col mt-[17rem] px-24 py-5 space-y-5   ${
                    isOpen ? 'translate-y-0' : '-translate-y-96'
                    } duration-1000 ease-in-out lg:drop-shadow-none lg:translate-y-0 lg:space-y-0 lg:py-0  lg:px-0 lg:flex-row lg:mt-0 lg:items-center lg:justify-center lg:space-x-10`}
                >
                    <a href="." title="" className="text-base text-white transition-all duration-200 hover:text-opacity-70"> About </a>

                    <a href="." title="" className="text-base text-white transition-all duration-200 hover:text-opacity-70"> Ratings </a>

                    <select className='text-base text-white outline-none cursor-pointer bg-primaryColor md:bg-transparent transition-all duration-200 hover:text-opacity-70' name="language" id="language">
                        <option value="EN">English</option>
                        <option value="IN">Indi</option>
                        <option value="FR">French</option>
                    </select>
                    
                    <a href="." title="" className="text-base text-white transition-all duration-200 hover:text-opacity-70"> Account </a>

                </div>

                <button type="button" class="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden" onClick={toggleMenu}>
                    {isOpen ? (
                    
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 8h16M4 16h16"></path>
                        </svg>
                    )}
                </button>

            </div>
        </div>
    </header>
  )
}

export default Nav
