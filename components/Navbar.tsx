/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
const navigation = [
  { name: 'Narrative', href: '#about' },
  { name: 'Roadmap', href: '#' },
  { name: 'Project', href: '#join' },
  { name: 'Whitepaper', href: '#' },
  { name: 'Team', href: '#team' },
  { name: 'Faq', href: '#' },
  { name: 'Shop', href: '#' },
]

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')  
}


export default function Navbar() {
  
  
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()   
    window.addEventListener("scroll", changeBackground)
  })

  return (
    
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={"w-screen px-6 md:px-20 lg:px-[10%] 2xl:px-[310px] lg:fixed z-40 navbar lg:border-b-[1px] " + (navbar ? "bg-[#1d1d1d]" : "bg-transparent")} >
            <div className="relative flex items-end justify-between h-[120px] ">
              <div className="absolute inset-y-0 right-[10px] flex items-end lg:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between ">
                <div className="flex-shrink-0 flex items-center">
                  <a href="#" className='flex  '>
                    <img src='/Mobsquad.svg' className='transition-all ease-in-out duration-500' id="navbar_logo"></img>
                    <svg className="block transition-all ease-in-out duration-500" id="navbar_icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 80 100">
                    <path d="M86.67,52.3c-.41,0-.49,1.57-2.06,3.59a11.26,11.26,0,0,1-2.85,2.58,17.76,17.76,0,0,1-.49,7.83,17.22,17.22,0,0,1-4.06,7,36.78,36.78,0,0,0,1.16-8.06,37.44,37.44,0,0,0-.35-6.4,25.37,25.37,0,0,1-9.11-13.76c-3.06-12.29,4.67-22,5.49-23a17.54,17.54,0,0,0-2.93-6.2c-2.37-3.16-5.24-4.55-5.09-4.8s3.34,1.32,6.19,3.18a36.23,36.23,0,0,1,4.27,3.12,25.24,25.24,0,0,0,2.49,2.17c.1-.09-1-1.4-1.12-1.6A44.73,44.73,0,0,0,39,1.09C20.77,3.83,11.19,19.43,8.82,23.29c-9.95,16.19-14,43.18,1.43,60.79s39.46,13.85,44,13.17c4.29-.65,28.92-4.92,34.51-22.38,3.31-10.35-.94-22.59-2.09-22.57ZM47,66.12a25.11,25.11,0,0,1,.72,8.75A24.84,24.84,0,0,1,45,84.12a34.68,34.68,0,0,0-.29-9.53,33.91,33.91,0,0,0-2.14-7.46,25.53,25.53,0,0,1-9.89-8.75c-6.69-10.26-5.36-25.51,3.07-38.82a16.86,16.86,0,0,0-.53-6,16.61,16.61,0,0,0-3.12-6.07A15.1,15.1,0,0,1,37.26,13,15.47,15.47,0,0,1,39,18,31.94,31.94,0,0,1,53.31,36.37C57.9,52.22,47.82,65.08,47,66.12Z" transform="translate(0 -0.87)"></path>
                  </svg></a>

                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex xl:space-x-10 items-center justify-center text-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        'text-white font-[Poppins] font-semibold p-[10px] font-regular text-[16px] hover:text-[#98DABC] transition-all ease-in-out duration-500'
                        )}

                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='lg:flex space-x-10 hidden'>
                  <a href="#" target="_blank">        
                    <svg className='socials transition-all ease-in-out duration-500' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" viewBox="0 0 16 16">
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                    </svg>
                  </a>
                  <a href="#" target="_blank">
                    <svg className='socials transition-all ease-in-out duration-500' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>    
                  <a href="#" target="_blank">
                    <svg className='socials transition-all ease-in-out duration-500' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                        ' text-white block px-3 py-2 rounded-md  font-[Poppins] font-semibold text-[16px]'
                  )}

                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className='flex px-3 space-x-5 py-2'>
              <a href="#" target="_blank">        
                        <img src="/Discord.svg"></img>
                    </a>
                    <a href="#" target="_blank">
                        <img src="/Twitter.svg"></img>
                    </a>    
                    <a href="#" target="_blank">
                        <img src="/Instagram.svg"></img>
                    </a>
                </div>
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}