import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Manufacturing'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Services {'>'} Manufacturing</div>
                    <h3 className='font-bold text-3xl'>Manufacturing</h3>
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
                        In the realm of renewable energy and sustainable agriculture, innovation and precision are paramount. To harness the power of the sun and efficiently manage water resources, farmers and businesses rely on a range of specialized equipment and structures.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia, we take pride in offering Manufacturing as a Service (MaaS) for a diverse array of essential components, including solar panel mounting racks, reservoir mounting structures, inverter/controller safety boxes, water well safety cups, PV module mounting fencing, and various types of stands, including sprinkler tripods.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        In this article, we'll delve into these components, highlighting how our manufacturing expertise contributes to the advancement of solar infrastructure and water management.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 py-4">
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Solar Panel Mounting Racks</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Solar panel mounting racks are the foundation of solar energy systems. These structures secure photovoltaic panels in place, ensuring optimal sun exposure and stability. Our manufacturing services focus on precision engineering to create robust, corrosion-resistant mounting racks that withstand harsh environmental conditions. These racks not only maximize energy generation but also contribute to the longevity of solar installations.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reservoir Mounting Structure</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Reservoir mounting structures play a vital role in water resource management. Whether used for rainwater harvesting, aquaculture, or irrigation, these structures need to be reliable and durable. Our manufacturing services produce mounting structures that provide stability and longevity, facilitating efficient water storage and distribution.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inverter/Controller Safety Boxes</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Inverters and controllers are the brains of solar installations, ensuring smooth energy conversion and management. To protect these crucial components from environmental factors and tampering, our manufacturing services produce safety boxes designed for secure enclosure and ventilation. These boxes not only enhance system safety but also prolong the life of inverters and controllers.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Water Well Safety Cups</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Water well safety cups are essential for protecting groundwater sources from contamination. Our manufacturing services create durable and effective safety cups that prevent debris, contaminants, and pests from entering water wells. These cups play a pivotal role in maintaining water quality and preserving this precious resource.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PV Module Mounting Fencing</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Solar farms require fencing solutions that combine security and accessibility. Our manufacturing services produce PV module mounting fencing designed to protect solar installations while allowing easy maintenance access. These fencing solutions are engineered to withstand environmental challenges and ensure the security of valuable solar assets.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sprinkler Tripod and Other Stands</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Irrigation is the lifeblood of agriculture, and sprinkler tripods and stands are versatile tools for optimizing water distribution. Our manufacturing services cater to the diverse needs of farmers by creating sturdy, adjustable, and easy-to-install tripod and stand solutions. These components enable efficient irrigation management, promoting healthy crop growth.</div>
                            </div>
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
