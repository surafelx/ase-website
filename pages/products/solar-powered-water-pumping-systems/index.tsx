import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Solar Powered Water Pumping Systems'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Products {'>'} Solar Powered Water Pumping Systems</div>
                    <h3 className='font-bold text-3xl'>Solar Powered Water Pumping Systems</h3>
                </section>
                <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
                    <Carousel
                        className="rounded-xl"
                        autoplay={true}
                        loop={true}
                        autoplayDelay={3000}
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <img
                            src="/assets/products/solar-powered/panel.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/assets/products/solar-powered/pump.jpg"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/assets/products/solar-powered/spray.jpg"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                        At AgriSun Ethiopia, we understand the invaluable role that small landholder farmers play in nourishing communities and sustaining agriculture. Our mission is to empower these dedicated individuals with the tools they need to thrive in an ever-changing agricultural landscape. We take pride in offering a range of innovative solutions, with a particular focus on providing solar powered water pumping systems tailored to the unique needs of small landholder farmers.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        Our journey began with a deep-rooted commitment to sustainable farming practices and environmental stewardship. Over the years, we've recognized the challenges faced by small landholders – limited resources, unpredictable weather patterns, and the need for cost-effective, reliable water supply solutions. In response, we've developed cutting-edge solar pumping systems designed to make a meaningful difference in the lives of these farmers.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                        Solar powered water pumping systems are innovative technology marvels that combine solar panels, specialized pumps, and energy storage solutions to draw water from a source, such as a well or reservoir, and distribute it where needed. Let's break down the key components:
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 py-4">
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PV Module</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">These are the heart of the system. Solar panels capture sunlight and convert it into electrical energy. The size and efficiency of the panels determine how much water can be pumped.</div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Controller & Inverter</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">This crucial component manages the system's operation, ensuring optimal performance and protecting it from overloading or underperformance due to varying sunlight levels.</div>
                            </div>
                        </div>

                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/4.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pump</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">The pump is responsible for lifting water from the source to the desired location. Solar pumps come in various types, including submersible, surface, and centrifugal pumps, each tailored to specific applications.</div>
                            </div>
                        </div>
                        <div className="bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/assets/products/solar-powered/3.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Energy Storage</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400"> To ensure consistent water supply during cloudy days or at night, solar powered water pumping systems may include batteries or other energy storage solutions to store excess energy generated during the day.</div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold py-3 my-2  '>Advantages of Our Solar Powered Water Pumping Systems</h3>
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
                            We understand that every farm is unique, and each farmer has distinct requirements. That's why we offer a range of solar powered water pumping systems that can be customized to match the specific needs and resources of small landholders.
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
                            We believe that sustainable technology should be accessible to all. Our pricing and financing options are designed to ensure that even those with modest budgets can benefit from the advantages of solar pumping.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Reliability</h5>
                            </a>
                            Small landholder farmers need solutions they can rely on day in and day out. Our solar pumping systems are built to last and require minimal maintenance, so farmers can focus on what matters most – their crops and livelihoods.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Environmental Responsibility</h5>
                            </a>
                            Our commitment to the environment extends beyond our products. We take every step to ensure that our solar pumping systems are eco-friendly, producing no emissions and contributing to a greener, more sustainable future.
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
                            We recognize that small landholder farmers are the backbone of rural communities. By supporting these farmers, we aim to strengthen the entire community, providing not only economic benefits but also improved living standards and access to clean water.
                        </div>
                        <div className="mb-4 text-gray-500  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 dark:text-gray-400 font-medium">
                            <div className='mx-auto '>
                                <Image
                                    src={`/images/knowledge.svg`}
                                    className="mx-auto"
                                    width={70}
                                    height={70}
                                    alt={``}
                                />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Knowledge Sharing</h5>
                            </a>
                            We believe that knowledge is power. In addition to offering state-of-the-art solar pumping systems, we are dedicated to providing small landholder farmers with the knowledge and training needed to make the most of our technology.
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold my-4 ">
                            We are not just a provider of solar powered water pumping systems; we are a partner on your farming journey. We're here to equip you with the tools you need to overcome challenges, increase productivity, and achieve your agricultural goals sustainably. Join us in our commitment to empower small landholder farmers and make a positive impact on agriculture and rural communities. Together, we can grow a brighter and more sustainable future.
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
