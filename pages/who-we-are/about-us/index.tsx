import Layout from '../../../components/layout'
import Recents from '../../../components/recents'
import AboutUs from '../../../components/about-us'
import Services from '../../../components/focus'
import OtherAreas from '../../../components/other-areas'
import { getAllPosts } from '../../../lib/api'

export default function Index({ allPosts }: any) {
    const morePosts = allPosts

    return (
        <>
            <Layout title={'About Us'}>
                <section className='my-8 w-full px-12 mx-auto max-w-screen-xl'>
                    <h2 className='font-bold'>Who we are</h2>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">
                        At AgriSun Ethiopia, we are dedicated to revolutionizing the agricultural landscape by harnessing the power of design, energy, agriculture, water, and software. Our mission is to provide affordable and sustainable solutions to small landholder farmers who lack access to national power grid electrification connection.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        We understand the challenges faced by farmers in remote areas, where traditional farming practices are hindered by limited access to electricity and water resources. That's why we specialize in offering innovative solar systems that empower farmers to thrive in an ever-changing world.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        Our core focus is on providing solar-powered solutions that address critical needs in the agricultural sector. We offer a range of services, including water well drilling, solar-powered water pump systems, water-saving irrigation systems, and value chain activities for rural communities. By integrating cutting-edge technology with tried-and-true farming techniques, we aim to improve farmers' livelihoods while reducing their reliance on fossil fuels.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        With our solar powered water pumping systems, farmers can increase crop yields and unlock the potential of their labor capital and small holding land, even in challenging climatic conditions. By harnessing the abundant energy of the sun, we enable farmers to access a reliable and sustainable source of power for their irrigation needs. This not only enhances productivity but also preserves precious water resources, ensuring a more efficient and eco-friendly farming approach.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia, we believe that sustainable agriculture is the key to a brighter future. We are committed to empowering small landholder farmers, helping them overcome the barriers that limit their potential. By providing affordable and innovative solar solutions, we strive to create a positive impact on the agricultural sector, fostering economic growth and environmental sustainability.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        Join us on this transformative journey as we work hand in hand with farmers, communities, and stakeholders to build a resilient and prosperous agricultural sector in Ethiopia. Together, let's harness the power of the sun to cultivate a sustainable future.
                    </p>
                </section>
                {morePosts.length > 0 && <Recents posts={morePosts} />}
                <section className='m-16 max-w-screen-xl mx-auto'>
                    <h2 className='mb-8 font-bold'>Our Team</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <TeamsCard
                            name='Yimam Kebede'
                            title={'CEO'}
                        />
                        <TeamsCard
                            name='Yimam Mohammed'
                            title={'Construction Division Head'}
                        />
                        <TeamsCard
                            name='Andualem Tesfaye'
                            title={'Energy Division Head'}
                        />
                        <TeamsCard
                            name='Ali Kebede'
                            title={'Water Division Head'}
                        />
                        <TeamsCard
                            name='Abey Yimam'
                            title={'Design Division Head'}
                        />
                        <TeamsCard
                            name='Anwar Khalid'
                            title={'Agriculture Division Head'}
                        />
                        <TeamsCard
                            name='Surafel Yimam'
                            title={'Software Division Head'}
                        />
                    </div>
                    <div className="spacer w-full relative h-6 md:h-12 spacer-divider">
                    </div>
                </section>
                <AboutUs />
                <Services />
                <OtherAreas />
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

const ServicesCard = ({ title, text, backgroundImage }) => {
    return (
        <>
            <div className='h-full lg:h-1/3 w-full mb-4 '>
                <div className="card bg-black rounded-3xl h-[450px] w-full mb-4">
                </div>

            </div>
            <style jsx>{
                `
              .card {
                  background-image:
                  linear-gradient(230.7deg,rgba(0,0,0,.105) 2.42%,rgba(0,0,0,.07) 24.45%,rgba(0,0,0,.21) 41.88%,rgba(0,0,0,.546) 76.81%),
                  url(${backgroundImage});
                  background-size: cover;
                  background-repeat: no-repeat;
              }
              `
            }
            </style>
        </>

    )
}

const RecentsCard = ({ date, link, type, title, backgroundImage }) => {
    return (
        <>
            <div className={`card bg-black h-60 lg:h-96 rounded-3xl sm:w-full w-full`}>
                <div className='card-interior p-8 mb-auto text-white drop-shadow-lg'>
                    <div className='flex flex-between justify-between '>
                        <p className="">
                            {date}
                        </p>
                        <a href={link}>
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                            </svg>
                        </a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white uppercase font-thin text-lg leading-6 block drop-shadow-lg'>
                            {type}
                        </h4>
                        <h3 className='font-bold text-2xl leading-7 drop-shadow-lg text-white'>
                            {title}
                        </h3>
                    </div>

                </div>
            </div>
            <style jsx>
                {
                    `
                  .card {
                      background-image:
                      linear-gradient(230.7deg,rgba(0,0,0,.105) 2.42%,rgba(0,0,0,.07) 24.45%,rgba(0,0,0,.21) 41.88%,rgba(0,0,0,.546) 76.81%),
                      url(${backgroundImage});
                      background-size: cover;
                      background-repeat: no-repeat;
                  }
              .card-interior {
                  display: flex;
                  height: 100%;
                  flex-direction: column;
                  justify-content: space-between;
              }
              `
                }
            </style>
        </>
    )
}

const TeamsCard = ({ name, title }) => {
    return (
        <>
            <div className='h-full lg:h-1/3 w-full mb-4 '>
                {/* <div className="card bg-black rounded-3xl h-[450px] w-full mb-4">
                </div> */}
                <h4 className='font-bold'>{name}</h4>
                <p>{title}</p>
            </div>
            <style jsx>{
                `
            .card {
                background-image:
                background-size: cover;
                background-repeat: no-repeat;
            }
            `
            }
            </style>
        </>
    )
}


export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'coverImage',
    ])


    return {
        props: { allPosts },
    }
}