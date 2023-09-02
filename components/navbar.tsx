import { useEffect, useRef, useState } from 'react'
import { Collapse } from 'flowbite';
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    heroImage: 'design',
    slug: 'design',
    title: 'Design',
    mainParagraph: 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy. Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy.',
    subParagraphs: ['Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.',
      'Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'],
    services: [
      {
        text: 'Creativity',
        icon: ''
      }
    ],
    recents: [
      {
        image: '',
        link: 'https://www.google.com',
        type: 'Blog',
        title: 'Shaping Resilience',
        date: '2021-11-02'
      }
    ],
    otherAreas: [
      {
        title: 'Shaping resilience',
        text: 'Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.',
        link: 'Download',
        imageLink: ''
      }
    ],
    teamMembers: [
      {
        name: 'Surafel Yimam',
        title: 'Design CEO',
        imageLink: ''
      }
    ]
  }
]
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(globalThis.window?.innerWidth)
  const [showHighlights, setShowHighlights] = useState('')
  const [windowHeight, setWindowHeight] = useState(globalThis.window?.innerHeight)
  const [isMenuOpen, setIsMenuOpen] = useState(windowWidth > 1024 ? true : false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isProductsDrawerOpen, setIsProductsDrawerOpen] = useState(false)
  const [isServicesDrawerOpen, setIsServicesDrawerOpen] = useState(false)
  const [isWhoWeAreDrawerOpen, setIsWhoWeAreDrawerOpen] = useState(false)

  const setWindowDimensions = () => {
    setWindowWidth(globalThis.window?.innerWidth)
    setWindowHeight(globalThis.window?.innerHeight)
  }


  useEffect(() => {
    globalThis.window?.addEventListener('resize', setWindowDimensions);
    if (windowWidth > 1024) {
      setIsMenuOpen(true)
      setIsDrawerOpen(false)
      setIsWhoWeAreDrawerOpen(false)
      setIsProductsDrawerOpen(false)
      setIsServicesDrawerOpen(false)

    }
    else {
      setIsMenuOpen(false)
    }
    return () => {
      globalThis.window?.removeEventListener('resize', setWindowDimensions)
    }
  }, [windowWidth])

  return (

    <nav className="w-full z-10 bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900  ">

      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 rounded-2xl">

        <Link href="/">
          <div className='flex'>
            <Image
              src="/images/logo-2.png"
              width={48}
              className="mr-3"
              height={48}
              alt="AgriSun Ethiopia Engineering and Trading PLC"
            />
            <span className="hidden lg:flex self-center text-2xl font-bold whitespace-nowrap dark:text-white text-primary-color">AgriSun Ethiopia</span>
          </div>
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>

        </button>
        <div className="flex lg:order-2">
          <Link href="/contact-us">
            <button type="button" className="btn btn-secondary text-white focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact</button>
          </Link>
        </div>


        {
          (isMenuOpen) && (
            <div className="items-center justify-between font-medium w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button onClick={() => {
                    setIsWhoWeAreDrawerOpen(!isWhoWeAreDrawerOpen)
                    setIsDrawerOpen(false)
                    setIsProductsDrawerOpen(false)
                    setIsServicesDrawerOpen(false)
                  }} id="" data-collapse-toggle="" className="text-border-primary-color flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 text-primary-color font-bold dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">About Us
                    {isWhoWeAreDrawerOpen ? (<>
                      <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                      </svg>
                    </>) : (
                      <><svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                      </svg></>)}
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    setIsProductsDrawerOpen(!isProductsDrawerOpen)
                    setIsDrawerOpen(false)
                    setIsWhoWeAreDrawerOpen(false)
                    setIsServicesDrawerOpen(false)
                  }} className={`${isDrawerOpen && ('text-bordered-primary-color')} text-border-primary-color flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent text-primary-color font-bold dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700`}>Products
                    {isProductsDrawerOpen ? (<>
                      <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                      </svg>
                    </>) : (
                      <><svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                      </svg></>)}

                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    setIsServicesDrawerOpen(!isServicesDrawerOpen)
                    setIsDrawerOpen(false)
                    setIsProductsDrawerOpen(false)
                    setIsWhoWeAreDrawerOpen(false)
                  }} className={`${isDrawerOpen && ('text-bordered-primary-color')} text-border-primary-color flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent text-primary-color font-bold dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700`}>Services
                    {isServicesDrawerOpen ? (<>
                      <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                      </svg>
                    </>) : (
                      <><svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                      </svg></>)}

                  </button>
                </li>

                {/* <li>
                  <Link href="/our-work" >
                    <button id="" data-collapse-toggle="" className="text-border-primary-color flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 text-primary-color font-bold dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">Our Work</button>
                  </ Link>
                </li>
                <li>
                  <Link href="news-and-stories">
                    <button id="" data-collapse-toggle="" className="text-border-primary-color flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 text-primary-color font-bold dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">News and Stories</button>
                  </Link>
                </li> */}
              </ul>
            </div>

          )}


      </div>

      {
        (isMenuOpen && isProductsDrawerOpen) && (
          <div className="absolute w-full py-6 top-[250px] z-30 lg:top-[68px] mt-1 bg-gray-800 border-gray-800 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 rounded-b-3xl">
            <div className="grid gap-2 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 lg:flex lg:px-24 ">
              <ul className="mb-4 w-1/2 space-y-4 lg:mb-0" aria-labelledby="mega-menu-full-image-button">

                <li>
                  <Link href="/products/solar-powered-water-pumping-systems">
                    <button
                      onMouseEnter={() => setShowHighlights('solar-powered-water-pumping-systems')}
                      onMouseLeave={() => setShowHighlights('')}
                      className="text-border-white text-white font-bold">
                      Solar Powered Water Pumping Systems
                      <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </Link>
                </li>
                <li>
                  <button
                    onMouseEnter={() => setShowHighlights('irrigation-equipment-accessories')}
                    onMouseLeave={() => setShowHighlights('')}
                    className="text-border-white text-white font-bold">
                    <Link href="/products/irrigation-equipment-accessories">
                      Irrigation Equipment & Accessories
                    </Link>
                    <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => setShowHighlights('shallow-depth-water-well-drilling-rigs')}
                    onMouseLeave={() => setShowHighlights('')}
                    className="text-border-white text-white font-bold">
                    <Link href="/products/shallow-depth-water-well-drilling-rigs">
                      Shallow Depth Water Well Drilling Rigs
                    </Link>
                    <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => setShowHighlights('solar-powered-energy-backup-system')}
                    onMouseLeave={() => setShowHighlights('')}
                    className="text-border-white text-white font-bold">
                    <Link href="/products/solar-powered-energy-backup-system">
                      Solar Powered Energy Backup System
                    </Link>
                    <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </li>
              </ul>
            
            </div>
          </div>
        )
      }
      {
        (isMenuOpen && isServicesDrawerOpen) && (
          <div className="absolute w-full z-30 top-[250px] lg:top-[68px] mt-1 bg-gray-800 border-gray-800 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 rounded-b-3xl">
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 lg:flex lg:px-24 ">
              <ul className="mb-4 w-1/2 space-y-4 lg:mb-0" aria-labelledby="mega-menu-full-image-button">
                <li>
                  <Link href="/services/solar-powered-water-pumping-systems">
                    <button
                      onMouseEnter={() => setShowHighlights('solar-powered-water-pumping-systems')}
                      onMouseLeave={() => setShowHighlights('')}
                      className="text-border-white text-white font-bold">
                      Installation
                      <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/services/solar-powered-water-pumping-systems">
                    <button
                      onMouseEnter={() => setShowHighlights('solar-powered-water-pumping-systems')}
                      onMouseLeave={() => setShowHighlights('')}
                      className="text-border-white text-white font-bold">
                      Training
                      <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/services/solar-powered-water-pumping-systems">
                    <button
                      onMouseEnter={() => setShowHighlights('solar-powered-water-pumping-systems')}
                      onMouseLeave={() => setShowHighlights('')}
                      className="text-border-white text-white font-bold">
                      Manufacturing
                      <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </Link>
                </li>
                <li>
                  <button
                    onMouseEnter={() => setShowHighlights('irrigation-equipment-accessories')}
                    onMouseLeave={() => setShowHighlights('')}
                    className="text-border-white text-white font-bold">
                    <Link href="/services/irrigation-equipment-accessories">
                      Shallow Depth Water Well Drilling
                    </Link>
                    <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => setShowHighlights('shallow-depth-water-well-drilling-rigs')}
                    onMouseLeave={() => setShowHighlights('')}
                    className="text-border-white text-white font-bold">
                    <Link href="/services/shallow-depth-water-well-drilling-rigs">
                      Consulting
                    </Link>
                    <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </li>
              </ul>
              {/* <div className="lg:block w-full text-left">
                <div>
                  <p className="max-w-xl mb-5 text-white">Highlights</p>
                </div>
                <div className='flex justify-between'>
                  <div>
                    {showHighlights && (<div>{showHighlights}</div>)}
                    Image 1
                  </div>
                  <div>
                    Image 2
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )
      }
      {
        (isMenuOpen && isWhoWeAreDrawerOpen) && (
          <div className="absolute w-full top-[250px] lg:top-[68px] mt-1 bg-gray-800 border-gray-800 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 rounded-b-3xl">
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 lg:flex lg:px-24 ">
              <ul className="mb-4 w-1/2 space-y-4 lg:mb-0" aria-labelledby="mega-menu-full-image-button">
                <li>
                  <Link href="/who-we-are/about-us">
                    <button
                      onMouseEnter={() => setShowHighlights('design')}
                      onMouseLeave={() => setShowHighlights('')}
                      className="text-border-white text-white font-bold">
                      About Us
                      <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </ Link>
                </li>
                <li>
                  <Link href="/who-we-are/our-strategy">
                    <button
                      onMouseEnter={() => setShowHighlights('energy')}
                      onMouseLeave={() => setShowHighlights('')}
                      className="text-border-white text-white font-bold">
                      Our Strategy
                      <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </ Link>
                </li>
                {/* <li>
                  <Link href="/who-we-are/our-products">
                    <button
                      onMouseEnter={() => setShowHighlights('energy')}
                      onMouseLeave={() => setShowHighlights('')}
                      className="text-border-white text-white font-bold">
                      Our Products
                      <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </ Link>
                </li> */}
              </ul>

              {/* <div className="lg:block w-full hidden text-left">
                <div>
                  <p className="max-w-xl mb-5 text-white">Highlights</p>
                </div>
                <div className='flex justify-between'>
                  <div>
                    {showHighlights && (<div>{showHighlights}</div>)}
                    Image 1
                  </div>
                  <div>
                    Image 2
                  </div>
                </div>
              </div>  */}
            </div>
          </div>

        )

      }

    </nav>

  )
}

export default Navbar