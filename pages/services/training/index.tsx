import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Training'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Sevices {'>'} Training</div>
                    <h3 className='font-bold text-3xl'>Training</h3>
                </section>
                <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
                    <Carousel
                        className="rounded-xl"
                        autoplay={true}
                        loop={true}
                        autoplayDelay={3000}
                    >
                        <img
                            src="/assets/home/services-training.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                        In the world of agriculture, success is rooted in knowledge and innovation. For small landholder farmers and customers, understanding the intricacies of the services they invest in is crucial to reaping the full benefits.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia, we are committed to not only providing top-tier products and installation services but also to empowering our clients with the knowledge they need to make the most of our offerings.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        In this article, we shed light on our comprehensive training services, which aim to educate and equip farmers and customers with the skills to optimize the services we provide.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 py-4">
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Product Understanding</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">It all begins with a deep understanding of the products we offer. Whether it's solar-powered water pump systems, drip irrigation setups, or shallow well drilling rigs, we believe that knowing your equipment inside out is essential for its effective use.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Installation Expertise</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">For customers who prefer a hands-on approach, we provide training on the installation of our systems. This empowers them to take control of the setup process and ensures that the equipment is correctly and safely installed. </div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">System Operation</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Operating the equipment efficiently is paramount for its success. Our training includes detailed instructions on system operation, maintenance, and troubleshooting, enabling users to maximize performance and longevity.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Water Management</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proper water management is a fundamental aspect of farming. We provide training on how to optimize water usage, schedule irrigation, and manage resources responsibly to promote crop health and conservation.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Energy Efficiency</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">For users of our solar-powered systems, understanding how to monitor energy usage, perform basic maintenance, and troubleshoot common issues is vital for sustainability and cost savings.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Environmental Stewardship</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">We emphasize the importance of responsible and eco-friendly farming practices. Training includes guidance on reducing environmental impact and adopting sustainable agricultural methods.</div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold py-3 my-2 '>Comprehensive Training Programs</h3>
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Hands-on Learning</h5>
                            </a>
                            We believe in learning by doing. Our training includes practical demonstrations and interactive sessions to ensure that farmers and customers can apply their newfound knowledge effectively.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Expert Guidance</h5>
                            </a>
                            Our training is conducted by experienced professionals who are experts in their respective fields. This ensures that participants receive accurate and up-to-date information.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Customization</h5>
                            </a>
                            We understand that every farm and customer is unique. Our training programs are customized to address specific needs, challenges, and goals.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Ongoing Support</h5>
                            </a>
                            Learning doesn't end with a training session. We offer continuous support, including access to resources, Q&A sessions, and a dedicated helpline to address any queries or concerns.
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
