import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Solar Powered Energy Backup Systems'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Products {'>'} Solar Powered Energy Backup Systems</div>
                    <h3 className='font-bold text-3xl'>Solar Powered Energy Backup Systems</h3>
                </section>
                <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
                    <Carousel
                        className="rounded-xl"
                        autoplay={true}
                        loop={true}
                        autoplayDelay={3000}
                    >
                         <img
                            src="/assets/products/solar-powered-backup/solar-powered-backup.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                       
                    </Carousel>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                        In today's world, access to reliable energy is essential for modern living and business operations. However, power outages are an all-too-familiar challenge that can disrupt productivity and daily life.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia, we understand the importance of uninterrupted energy supply, especially for small landholder farmers and rural communities. That's why we're committed to providing innovative solutions, such as our solar-powered energy backup systems. In this article, we delve into the significance of reliable energy and introduce our range of solar-powered backup systems, designed to empower individuals and communities, even in the face of power disruptions.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        Reliable energy is the backbone of progress in today's world. It powers homes, businesses, and critical infrastructure. For small landholder farmers and rural communities, access to energy can be the key to:
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 py-4">
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PV Array</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Harness the sun's energy with our high-efficiency PV arrays, providing clean and sustainable power for your needs.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Controller and Inverter</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">We offer a range of filters to safeguard your irrigation system from debris and contaminants, ensuring a continuous flow of clean water to your crops.</div>
                            </div>
                        </div>

                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/3.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Storage Batteries</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Maintain consistent water pressure with our pressure regulators, preventing over- or under-irrigation and optimizing water usage.</div>
                            </div>
                        </div>
                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/4.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PV Cables & Fittings</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Choose from a variety of emitters and sprayers to customize water distribution for different crop types and field layouts.</div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold py-3 my-2  '>Advantages of Our Solar Powered Energy Backup Systems</h3>
                    <div className="mb-3 font-normal text-gray-700 font-normal dark:text-gray-400"> Our commitment to empowering individuals and communities extends to providing reliable energy solutions, even in the face of power outages. Our range of solar-powered energy backup systems is designed to offer:</div>
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Solar Reliability</h5>
                            </a>
                            Our systems harness the power of the sun, providing a clean and renewable source of energy. This not only reduces electricity bills but also minimizes the carbon footprint.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Energy Storage</h5>
                            </a>
                            Our systems come equipped with energy storage solutions, such as batteries, which store excess solar energy during the day for use during the night or during power interruptions.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Custom Solutions</h5>
                            </a>
                            We understand that energy needs vary. Our systems can be tailored to the specific requirements of homes, businesses, and communities, ensuring optimal performance.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Ease of Use</h5>
                            </a>
                            Our solar-powered energy backup systems are user-friendly, with intuitive controls and automatic switching to backup power during outages, eliminating the need for manual intervention.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/productive.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Affordability</h5>
                            </a>
                            We believe that reliable energy should be accessible to all. Our pricing and financing options make our systems affordable for small landholder farmers and rural communities.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/community.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Expert SUpport</h5>
                            </a>
                            A Our team of experts is always available to offer guidance on system selection, installation, and maintenance, ensuring that you get the most from your investment.
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold my-4 ">
                        By offering solar-powered energy backup systems, we aim to empower individuals and communities with the resilience and security of uninterrupted energy supply. Our systems are more than just a source of power; they are a beacon of hope, productivity, and progress for rural areas and beyond.
                        </p>
                        <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold my-4 ">
                        Join us at AgriSun Ethiopia in our mission to shine brighter, even in the darkest hours. With our solar-powered energy backup systems, we're illuminating the path to a more empowered and sustainable future for all.
                        </p>
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
