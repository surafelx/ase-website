import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Installation'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Services {'>'} Installation</div>
                    <h3 className='font-bold text-3xl'>Installation</h3>
                </section>
                <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
                    <Carousel
                        className="rounded-xl"
                        autoplay={true}
                        loop={true}
                        autoplayDelay={3000}
                    >
                        <img
                            src="/assets/home/services-installation.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                        In the world of agriculture, efficiency is key to success, especially for small landholder farmers who often face resource constraints and unpredictable weather patterns.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia, we understand the critical role that access to water and efficient irrigation play in farming. That's why we offer comprehensive installation services for drip irrigation and solar-powered water pump systems.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        In this article, we'll explore how these services can revolutionize small-scale farming, increasing productivity, conserving resources, and paving the way for a sustainable agricultural future.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 py-4">
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Drip Irrigation</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">In the world of agriculture, every drop of water counts, especially for small landholder farmers who often face water scarcity and resource constraints. Drip irrigation, a precise and efficient method of delivering water directly to the roots of plants, has become a game-changer for small-scale farming.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Solar Powered Water Pump Systems</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">In the world of agriculture, access to water is paramount. Our specialized installation services for solar-powered water pump systems offer a sustainable, cost-effective, and environmentally friendly solution to meet your water needs. </div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold py-3 my-2  '>Drip Irrigation</h3>
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Customized Solutions</h5>
                            </a>
                            Our installation services for drip irrigation are tailored to the unique needs of your farm. We consider factors such as crop types, field layout, and water availability to design a system that maximizes efficiency.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Water Conservation</h5>
                            </a>
                            Drip irrigation delivers water directly to the root zone of plants, minimizing water wastage through evaporation and runoff. This conservation not only reduces your water bills but also promotes responsible water usage.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Improved Crop Health</h5>
                            </a>
                            Precise water delivery promotes healthy plant growth and reduces the risk of disease, resulting in higher crop yields and better-quality produce.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Time and Labor Savings</h5>
                            </a>
                            The systems can be automated with timers and controllers, allowing you to focus on other important farm tasks while ensuring your crops receive the right amount of water.
                        </div>
                    </div>

                    <h3 className='text-3xl font-bold py-3 my-2  '>Solar Powered Water Pump Systems</h3>
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Energy Independence</h5>
                            </a>
                            Solar systems operate off the grid, freeing farmers from the shackles of conventional electricity or costly fuel sources. They guarantee a reliable water supply, even in the most remote areas.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Cost-Effective</h5>
                            </a>
                            Once installed, solar systems have minimal operational costs, resulting in substantial savings on electricity or fuel bills. Over time, the initial investment often pays for itself.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Environmentally Friendly</h5>
                            </a>
                            Solar systems produce no emissions, making them an environmentally responsible choice. They reduce carbon footprints and contribute to a cleaner and greener agricultural ecosystem.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Versatiliyy</h5>
                            </a>
                            Our installation services are adaptable to various farming needs, from small-scale drip irrigation to large-scale sprinkler systems. We customize the system to meet the unique requirements of your farm.
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
