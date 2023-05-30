import React from "react";
import { 
  ChevronLeftIcon,
  ChevronRightIcon
   } from '@heroicons/react/outline'

import { FireIcon } from '@heroicons/react/solid'

import hotel1 from "../../../imgs/hotels/hotel1.png"
import profile1 from "../../../imgs/profile/profile1.jpg"

const Tab = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col">
            <div>
              <span className="text-smallTextColor text-xs flex gap-1 items-center"> <div className="w-5 h-0 border border-smallTextColor"/>Our Recommendation</span>
              <h2 className="ml-6 text-textColor font-bold text-xl">Featured House</h2>
            </div>
            <div className="pl-6 pr-6 flex justify-between">
              <ul
                className="flex mb-0 list-none pt-3 pb-4 flex-row gap-3"
                role="tablist"
              >
                <li className=" last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs flex gap-1 font-normal px-4 py-2 rounded-3xl leading-normal " +
                      (openTab === 1
                        ? "text-primaryColor bg-primaryColorRgba border border-primaryColorRgba"
                        : "text-customGray100 bg-white border border-customGray100")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <svg className="mt-[1px]" width="11" height="12" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8.83189V17.5C17.9998 17.7719 17.9262 18.0386 17.7868 18.272C17.6475 18.5054 17.4476 18.6968 17.2084 18.8259C16.9916 18.9432 16.7485 19.0031 16.5021 18.9999H11.9967C11.7978 18.9999 11.607 18.9209 11.4664 18.7803C11.3257 18.6396 11.2467 18.4488 11.2467 18.2499V13.7493C11.2467 13.5504 11.1677 13.3596 11.0271 13.2189C10.8864 13.0783 10.6956 12.9993 10.4967 12.9993H7.49673C7.29781 12.9993 7.10705 13.0783 6.9664 13.2189C6.82574 13.3596 6.74673 13.5504 6.74673 13.7493V18.2499C6.74673 18.4488 6.66771 18.6396 6.52706 18.7803C6.3864 18.9209 6.19564 18.9999 5.99673 18.9999H1.5002C1.28754 19.0005 1.07723 18.9556 0.883354 18.8682C0.689475 18.7808 0.516507 18.653 0.37604 18.4934C0.12946 18.2082 -0.00428751 17.8427 8.829e-06 17.4657V8.8318C0.000172265 8.62281 0.0439196 8.41615 0.128457 8.22503C0.212994 8.0339 0.336463 7.86251 0.490978 7.7218L7.99032 0.903078C8.26579 0.650753 8.62579 0.510777 8.99936 0.510742C9.37293 0.510707 9.73296 0.650617 10.0085 0.90289L17.5091 7.72189C17.6636 7.86263 17.787 8.03403 17.8716 8.22515C17.9561 8.41627 17.9998 8.62292 18 8.83189Z" fill={openTab === 1 ? "#10B981" : "#888B97"}/>
                    </svg>
                    Home
                  </a>
                </li>
                <li className=" last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs flex gap-1 font-normal px-4 py-2 rounded-3xl leading-normal" +
                      (openTab === 2
                        ? "text-primaryColor bg-primaryColorRgba border border-primaryColorRgba"
                        : "text-customGray100 bg-white border border-customGray100")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <svg className="mt-[1px]" width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 17.9999H1C0.45 17.9999 0 17.5499 0 16.9999V5.68994C0 5.26994 0.25 4.89994 0.64 4.74994L11.64 0.519938C11.7921 0.46126 11.9561 0.440637 12.118 0.459864C12.2798 0.47909 12.4345 0.537584 12.5686 0.630254C12.7027 0.722923 12.8121 0.846959 12.8873 0.991563C12.9624 1.13617 13.0012 1.29696 13 1.45994V6.99994H5C4.45 6.99994 4 7.44994 4 7.99994V17.9999ZM14 8.99994H7C6.45 8.99994 6 9.44994 6 9.99994V16.9999C6 17.5499 6.45 17.9999 7 17.9999H11V13.9999C11 13.4499 11.45 12.9999 12 12.9999C12.55 12.9999 13 13.4499 13 13.9999V17.9999H17C17.55 17.9999 18 17.5499 18 16.9999V8.99994C18 7.89994 17.1 6.99994 16 6.99994C14.9 6.99994 14 7.89994 14 8.99994Z" fill={openTab === 1 ? "#888B97" : "#10B981"}/>
                    </svg>
                    Villa
                  </a>
                </li>
                <li className="-mb-px last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs flex gap-1 font-normal px-4 py-2 rounded-3xl leading-normal " +
                      (openTab === 3
                        ? "text-primaryColor bg-primaryColorRgba border border-primaryColorRgba"
                        : "text-customGray100 bg-white border border-customGray100")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    <svg className="mt-[2px]" width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 8V2C14 0.9 13.1 0 12 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V16C0 17.1 0.9 18 2 18H8V14H10V18H16C17.1 18 18 17.1 18 16V10C18 8.9 17.1 8 16 8H14ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM12 12H10V10H12V12ZM12 8H10V6H12V8ZM12 4H10V2H12V4ZM16 16H14V14H16V16ZM16 12H14V10H16V12Z" fill={openTab === 1 ? "#888B97" : "#10B981"}/>
                    </svg>
                    Apartment
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                <a href="#" className="text-textColor bg-customGray100Rgba border border-customGray100Rgba rounded-full px-2 py-1">
                  <ChevronLeftIcon className="h-5 w-5"/>
                </a>
                <a href="#" className="text-white bg-primaryColor border border-primaryColorRgba rounded-full px-2 py-1">
                  <ChevronRightIcon className="h-5 w-5"/>
                </a>
              </div>
            </div>

          </div>
          <div className="pl-6 relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                {/* home tab content */}
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <article className='relative overflow-hidden'>
                    <div className=' bottom-4 left-4 w-full overflow-x-scroll scrollbar-hide md:scrollbar-default pr-8'>
                        <ul className='flex flex-row w-max gap-3'>
                          {/* list item-1 */}
                          <li className='bg-whitex p-3 py-4 pr-6'>
                              <div className="relative">
                                <img src={hotel1} className="h-56 rounded-xl" />
                                <p className="absolute flex gap-1 text-xs text-redColor px-2 py-1 rounded-xl bottom-3 left-3 bg-redBgColor">
                                  <FireIcon className="h-4"/>
                                  Popular
                                </p>
                              </div>
                              <div>
                                <div className="mt-2">
                                  <p className="text-textColor">Roselands House</p>
                                  <span className="text-sm text-textColor">$ 35.000.000</span>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                  <img src={profile1} className="h-8 rounded-full" alt="" />
                                  <div>
                                    <p className="text-sm">John Doe</p>
                                    <p className="text-xs text-addressColor">Manchester, Kentucky</p>
                                  </div>
                                </div>
                              </div>
                          </li>
                          {/* list item-1 */}
                          <li className='bg-whitex p-3 py-4 pr-6'>
                              <div className="relative">
                                <img src={hotel1} className="h-56 rounded-xl" />
                                <p className="absolute flex gap-1 text-xs text-redColor px-2 py-1 rounded-xl bottom-3 left-3 bg-redBgColor">
                                  <FireIcon className="h-4"/>
                                  Popular
                                </p>
                              </div>
                              <div>
                                <div className="mt-2">
                                  <p className="text-textColor">Roselands House</p>
                                  <span className="text-sm text-textColor">$ 35.000.000</span>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                  <img src={profile1} className="h-8 rounded-full" alt="" />
                                  <div>
                                    <p className="text-sm">John Doe</p>
                                    <p className="text-xs text-addressColor">Manchester, Kentucky</p>
                                  </div>
                                </div>
                              </div>
                          </li>
                          {/* list item-1 */}
                          <li className='bg-whitex p-3 py-4 pr-6'>
                              <div className="relative">
                                <img src={hotel1} className="h-56 rounded-xl" />
                                <p className="absolute flex gap-1 text-xs text-redColor px-2 py-1 rounded-xl bottom-3 left-3 bg-redBgColor">
                                  <FireIcon className="h-4"/>
                                  Popular
                                </p>
                              </div>
                              <div>
                                <div className="mt-2">
                                  <p className="text-textColor">Roselands House</p>
                                  <span className="text-sm text-textColor">$ 35.000.000</span>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                  <img src={profile1} className="h-8 rounded-full" alt="" />
                                  <div>
                                    <p className="text-sm">John Doe</p>
                                    <p className="text-xs text-addressColor">Manchester, Kentucky</p>
                                  </div>
                                </div>
                              </div>
                          </li>
                          {/* list item-1 */}
                          <li className='bg-whitex p-3 py-4 pr-6'>
                              <div className="relative">
                                <img src={hotel1} className="h-56 rounded-xl" />
                                <p className="absolute flex gap-1 text-xs text-redColor px-2 py-1 rounded-xl bottom-3 left-3 bg-redBgColor">
                                  <FireIcon className="h-4"/>
                                  Popular
                                </p>
                              </div>
                              <div>
                                <div className="mt-2">
                                  <p className="text-textColor">Roselands House</p>
                                  <span className="text-sm text-textColor">$ 35.000.000</span>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                  <img src={profile1} className="h-8 rounded-full" alt="" />
                                  <div>
                                    <p className="text-sm">John Doe</p>
                                    <p className="text-xs text-addressColor">Manchester, Kentucky</p>
                                  </div>
                                </div>
                              </div>
                          </li>
                          {/* list item-1 */}
                          <li className='bg-whitex p-3 py-4 pr-6'>
                              <div className="relative">
                                <img src={hotel1} className="h-56 rounded-xl" />
                                <p className="absolute flex gap-1 text-xs text-redColor px-2 py-1 rounded-xl bottom-3 left-3 bg-redBgColor">
                                  <FireIcon className="h-4"/>
                                  Popular
                                </p>
                              </div>
                              <div>
                                <div className="mt-2">
                                  <p className="text-textColor">Roselands House</p>
                                  <span className="text-sm text-textColor">$ 35.000.000</span>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                  <img src={profile1} className="h-8 rounded-full" alt="" />
                                  <div>
                                    <p className="text-sm">John Doe</p>
                                    <p className="text-xs text-addressColor">Manchester, Kentucky</p>
                                  </div>
                                </div>
                              </div>
                          </li>
                        </ul>
                    </div>
                  </article>
                </div>
                {/* Villa tab content */}
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                {/* Apartment tab content */}
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab

