import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Irrigation Equipment Accessories'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Products {'>'} Irrigation Equipment Accessories</div>
                    <h3 className='font-bold text-3xl'>Irrigation Equipment Accessories</h3>
                </section>
                <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
                    <Carousel
                        className="rounded-xl"
                        autoplay={true}
                        loop={true}
                        autoplayDelay={3000}
                    >
                      
                        <img
                            src="/assets/products/irrigation-equipment/irrigation-2.jpg"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/assets/products/irrigation-equipment/irrigation-3.jpg"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                        At AgriSun Ethiopia, we recognize that small landholder farmers are the backbone of agriculture, and their success is vital for food security and sustainable farming practices. Our commitment to supporting these dedicated individuals extends beyond providing essential irrigation equipment accessories tailored to their unique needs.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        AgriSun Ethiopia is deeply rooted in the local farming community, and we take pride in our commitment to supporting the needs of small landholder farmers.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        In the ever-evolving landscape of agriculture, small landholder farmers play a pivotal role in feeding communities and driving local economies. Their dedication to sustainable and efficient farming practices is the bedrock of food security and environmental responsibility. At AgriSun Ethiopia, we share this commitment to supporting small landholder farmers on their journey to success.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 py-4">
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Drip Tape and Tubing</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our high-quality drip tapes and tubing ensure efficient water delivery directly to the roots, minimizing water wastage and promoting healthy crop growth.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Filters</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">We offer a range of filters to safeguard your irrigation system from debris and contaminants, ensuring a continuous flow of clean water to your crops.</div>
                            </div>
                        </div>

                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/4.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pressure Regulators</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Maintain consistent water pressure with our pressure regulators, preventing over- or under-irrigation and optimizing water usage.</div>
                            </div>
                        </div>
                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/3.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Emitters & Sprayers</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Choose from a variety of emitters and sprayers to customize water distribution for different crop types and field layouts.</div>
                            </div>
                        </div>
                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/4.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Timers & Controllers</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Automate your irrigation schedule with our user-friendly timers and controllers, allowing you to focus on other critical farm tasks while ensuring precise watering.</div>
                            </div>
                        </div>
                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/3.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hose Connectors & Fittings</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our high-quality connectors and fittings are designed for leak-free connections, minimizing water loss and system downtime.</div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold py-3 my-2  '>Advantages of Our Irrigation Equipment Accessories</h3>
                    <div className="mb-3 font-normal text-gray-700 font-normal dark:text-gray-400"> Small landholder farmers face unique challenges in agriculture, often limited by resources and access to technology. Solar powered water pumping systems offer several advantages tailored specifically to meet the needs of these farmers:</div>
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Tailored Solutions</h5>
                            </a>
                            We understand that every farm is unique. Our range of accessories can be customized to match your specific crop types, field sizes, and budget.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Affordability</h5>
                            </a>
                            We believe in making sustainable technology accessible. Our pricing and financing options ensure that even small landholder farmers with modest budgets can benefit from efficient irrigation.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Expert Support</h5>
                            </a>
                            Our team of experts is always ready to provide guidance on system selection, installation, operation, and maintenance. We're here to support you every step of the way.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Sustainability</h5>
                            </a>
                            We are committed to eco-friendly practices. Our accessories not only improve your farm's efficiency but also contribute to sustainable agriculture and resource conservation.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Increased Productivity</h5>
                            </a>
                            We are committed to eco-friendly practices. Our accessories not only improve your farm's efficiency but also contribute to sustainable agriculture and resource conservation.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Community Impact</h5>
                            </a>
                            As advocates for rural development, we understand the far-reaching impact of small landholder farmers. Our solutions benefit not only individual farmers but also strengthen entire communities.
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold my-4 ">
                            Join us at AgriSun Ethiopia as we continue to innovate and provide solutions that nurture growth, making the dream of a thriving, sustainable farm a reality for small landholder farmers. These accessories are the unsung heroes of modern farming, enhancing the effectiveness of irrigation systems and helping farmers make the most of their valuable resources. Whether you're a seasoned farmer or just starting your journey, our irrigation equipment accessories are here to support you in achieving healthier crops, greater yields, and a more sustainable future for agriculture.
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
