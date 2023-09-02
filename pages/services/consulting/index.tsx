import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Consulting'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Services {'>'} Consulting</div>
                    <h3 className='font-bold text-3xl'>Consulting</h3>
                </section>
                <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
                    <Carousel
                        className="rounded-xl"
                        autoplay={true}
                        loop={true}
                        autoplayDelay={3000}
                    >
                        <img
                            src="/assets/products/solar-powered/panel.JPG"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/assets/products/solar-powered/pump.JPG"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/assets/products/solar-powered/spray.JPG"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                        In the ever-evolving landscape of agriculture, the quest for knowledge and expertise is unceasing. Small landholder farmers, businesses, and agricultural communities face diverse challenges, from sustainable resource management to efficient crop production.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia,  we offer a comprehensive suite of Consulting Services designed to empower individuals and organizations with the insights and strategies needed for agricultural success.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        In this article, we delve into the significance of consulting in agriculture and how our services illuminate pathways to advancement.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 py-4">
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sustainable Farming Practices:</h5>
                                </a>
                            </div>
                            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Consultants provide guidance on environmentally friendly and resource-efficient farming methods that reduce the carbon footprint and promote long-term sustainability.</div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crop Management</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Expert advice on crop selection, planting techniques, and pest control strategies maximizes yields and minimizes losses, contributing to food security and increased income.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Water Resource Management</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Consultants assist in efficient water usage, irrigation system design, and groundwater management, ensuring responsible resource stewardship.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Soil Health</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Soil testing and analysis lead to tailored soil improvement plans, enhancing soil fertility and crop performance.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Water Quality Testing</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">After drilling, we conduct water quality tests to ensure that the water is safe for its intended use, whether for irrigation, drinking, or other purposes.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology Integration</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Consultants help farmers adopt and integrate modern technologies, such as precision agriculture, to optimize farm operations and reduce costs.</div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold py-3 my-2 '>Our Consulting Service</h3>

                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium grid-cols-2">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/tailor.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Needs Assesment</h5>
                            </a>
                            We begin by conducting a comprehensive assessment of the client's needs, challenges, and goals. This step forms the foundation of our consulting approach.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/affordable.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Customized Solutions</h5>
                            </a>
                            Based on the assessment, we craft tailored solutions that address specific challenges and objectives, ensuring the most effective outcomes.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/reliable.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Expert Guidance</h5>
                            </a>
                            Our team of experienced consultants includes experts in various agricultural domains, ensuring clients receive the highest level of expertise and guidance.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/sustainable.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Implementation Support</h5>
                            </a>
                            We provide hands-on support during the implementation of recommended strategies and practices, ensuring a smooth transition.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/sustainable.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Monitoring and Evaluation</h5>
                            </a>
                            Our consulting services extend beyond recommendations; we offer continuous monitoring and evaluation to track progress and make adjustments as needed.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/sustainable.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Education and Training</h5>
                            </a>
                            We prioritize knowledge sharing and capacity building, offering training sessions and workshops to empower clients with the skills they need.
                        </div>
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
