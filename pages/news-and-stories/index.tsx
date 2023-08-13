import { useState } from 'react'
import Layout from '../../components/layout'
import LargeList from '../../components/Lists/LargeListWithImage'
import { getAllPosts } from '../../lib/api'

export default function Index({ allPosts }: any) {
    const [designChecked, setDesignChecked] = useState(false)
    const [isListOpen, setIsListOpen] = useState(false)

    return (
        <>
            <Layout title={'News and Stories'}>
                <section className='my-8 w-full px-12 mx-auto max-w-screen-xl'>
                    <h2 className='font-bold '>News and Stories</h2>
                </section>
                <section className='flex flex-col lg:flex-row lg:space-between  max-w-screen-xl px-12 mx-auto'>
                    <div className='w-full lg:w-1/4'>
                        <div className='w-full flex justify-between pb-2'>
                            <h3 className='text-xl font-bold'>Filters</h3>
                            <div className='text-sm px-2 py-1  flex my-auto text-white  bg-primary-color rounded-xl'
                            >reset filters
                                <svg className="w-[15px] h-[15px] ml-2 my-auto text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' text-bordered-primary-color font-bold pb-1 mb-2 '>
                                <button onClick={() => {
                                    setIsListOpen(!isListOpen)
                                }} className={`flex items-center justify-between w-full hover:bg-gray-100 lg:hover:bg-transparent text-primary-color font-bold dark:text-white`}>
                                    <div>
                                        Services
                                    </div>
                                    <div>
                                        {isListOpen ? (<>
                                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                                            </svg>
                                        </>) : (
                                            <><svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                            </svg></>)}

                                    </div>

                                </button>

                            </div>
                            <ul className='flex flex-col gap-2'>
                                {isListOpen && (
                                    <>
                                        <li className='flex w-full gap-1 font-medium'>
                                            {designChecked ? (
                                                <>
                                                    <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box bg-primary-color px-1 h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>
                                                        <svg className="w-[10px] h-[10px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )
                                                : (
                                                    <>
                                                        <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>

                                                        </button>
                                                    </>
                                                )
                                            }

                                            Design
                                        </li>
                                        <li className='flex w-full gap-1 font-medium'>
                                            {designChecked ? (
                                                <>
                                                    <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box bg-primary-color px-1 h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>
                                                        <svg className="w-[10px] h-[10px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )
                                                : (
                                                    <>
                                                        <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>

                                                        </button>
                                                    </>
                                                )
                                            }

                                            Energy
                                        </li>
                                        <li className='flex w-full gap-1 font-medium'>
                                            {designChecked ? (
                                                <>
                                                    <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box bg-primary-color px-1 h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>
                                                        <svg className="w-[10px] h-[10px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )
                                                : (
                                                    <>
                                                        <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>

                                                        </button>
                                                    </>
                                                )
                                            }

                                            Software
                                        </li>
                                        <li className='flex w-full gap-1 font-medium'>
                                            {designChecked ? (
                                                <>
                                                    <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box bg-primary-color px-1 h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>
                                                        <svg className="w-[10px] h-[10px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )
                                                : (
                                                    <>
                                                        <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>

                                                        </button>
                                                    </>
                                                )
                                            }

                                            Agriculture
                                        </li>
                                        <li className='flex w-full gap-1 font-medium'>
                                            {designChecked ? (
                                                <>
                                                    <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box bg-primary-color px-1 h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>
                                                        <svg className="w-[10px] h-[10px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )
                                                : (
                                                    <>
                                                        <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>

                                                        </button>
                                                    </>
                                                )
                                            }

                                            Construction
                                        </li>
                                        <li className='flex w-full gap-1 font-medium'>
                                            {designChecked ? (
                                                <>
                                                    <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box bg-primary-color px-1 h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>
                                                        <svg className="w-[10px] h-[10px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )
                                                : (
                                                    <>
                                                        <button onClick={() => { setDesignChecked(!designChecked) }} className='check-box h-5 w-5 flex mr-2 border-2 rounded-md border-primary-color'>

                                                        </button>
                                                    </>
                                                )
                                            }

                                            Water
                                        </li>
                                    </>
                                )}

                            </ul>
                        </div>
                    </div>
                    <div className='w-full'>
                       {allPosts.length > 0 && <LargeList posts={allPosts} />}
                    </div>
                </section>
            </Layout>
            <style jsx>
                {
                    `
            .hero {
              background-image:
              linear-gradient(230.7deg,rgba(0,0,0,.105) 2.42%,rgba(0,0,0,.07) 24.45%,rgba(0,0,0,.21) 41.88%,rgba(0,0,0,.546) 76.81%),
              url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg');
              background-size: cover;
              background-repeat: no-repeat;
          }
            `
                }
            </style>
        </>
    )
}

const OtherAreasCard = ({ icon, title, text }) => {
    return (
        <div className='border-b-2 py-5 border-green-500 px-12'>
            <div className="flex flex-col gap-2 align-middle justify-between">
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className='bg-black rounded-3xl h-[250px] w-full mb-4'></div>
                    <div className='w-full'>
                        <h4 className='font-bold'>{title}</h4>
                        <p className='font-semibold'>{text}</p>
                        <div className='flex gap-4 mt-4 lg:mt-20'>
                            <div>Learn More</div>
                            <div>Download</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'slug',
    ])
  
  
    return {
      props: { allPosts },
    }
  }
  