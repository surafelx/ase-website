import Layout from '../../../components/layout'
import Image from 'next/image'
import { Carousel } from "@material-tailwind/react";

export default function Index() {
    return (

        <>

            <Layout title={'Shallow Depth Water Well Drilling'}>
                <section className='w-full mx-auto max-w-screen-xl'>
                    <div className='my-4'>Home {'>'} Products {'>'} Shallow Depth Water Well Drilling </div>
                    <h3 className='font-bold text-3xl'>Shallow Depth Water Well Drilling </h3>
                </section>
                <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
                    <Carousel
                        className="rounded-xl"
                        autoplay={true}
                        loop={true}
                        autoplayDelay={3000}
                    >
                        <img
                            src="/assets/products/irrigation-equipment/irrigation-1.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                       
                    </Carousel>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                    Access to clean and reliable water sources is the lifeline of agriculture, especially for small landholder farmers who often operate in remote or underserved areas. In these regions, shallow water wells offer a precious resource for irrigation, livestock, and daily needs. However, drilling these wells can be a challenging endeavor without the right equipment. 
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                    In the world of agriculture, small landholder farmers are the unsung heroes, toiling tirelessly to feed communities and fuel local economies. However, access to a reliable water source can often be a challenge, particularly in regions where water scarcity is a prevalent concern.
                    </p>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
                    At AgriSun Ethiopia, we are driven by a vision of prosperous farming, and we believe that access to clean water should be a fundamental right for all. In this guide, we explore the transformative potential of shallow water wells and introduce our range of shallow water well depth drilling rigs, carefully crafted to empower small landholder farmers in their quest for agricultural success.
                    </p>
                    <h3 className='text-3xl font-bold py-3 my-2  '>Advantages of Our Irrigation Equipment Accessories</h3>
                    <div className="mb-3 font-normal text-gray-700 font-normal dark:text-gray-400"> 
                    At AgriSun Ethiopia, our commitment to small landholder farmers is unwavering. We understand that the journey to prosperity begins with access to clean water. That's why we offer a range of shallow water well depth drilling rigs, purpose-built to meet the unique needs of these farmers. Here's what sets our drilling rigs apart:
                    </div>
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Expert Engineering</h5>
                            </a>
                            Our rigs are meticulously engineered for the specific needs of shallow well drilling, guaranteeing efficiency and precision.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Compact & Versatile</h5>
                            </a>
                            Recognizing the diverse landscapes in which small-scale farmers operate, our drilling rigs are compact and versatile, able to navigate challenging terrains and narrow spaces.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Durability</h5>
                            </a>
                            We understand that farming can be tough, and our drilling rigs are built to withstand the rigors of the field, ensuring longevity and reliability.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Accessibility</h5>
                            </a>
                            Our rigs are priced competitively to make them accessible to small landholder farmers, ensuring that this essential resource is within reach for all.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Supportive Partnership</h5>
                            </a>
                            Our team of experts is not just here to provide equipment but to forge a supportive partnership with farmers, offering guidance on rig selection, operation, and maintenance.
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
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">Precision Engineering</h5>
                            </a>
                            Our rigs are expertly designed for shallow well drilling, ensuring accuracy and efficiency in every operation.
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold my-4 ">
                        Join us at AgriSun Ethiopia in our mission to make the vision of prosperous farming a reality for small landholder farmers. With our shallow water well depth drilling rigs, we aim to provide the tools for a brighter, more sustainable future, one well at a time. Together, we can transform the landscape of agriculture and empower farmers to thrive.
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
