import Layout from '../../../components/layout'
import Recents from '../../../components/recents'
import AboutUs from '../../../components/about-us'
import Services from '../../../components/focus'
import OtherAreas from '../../../components/other-areas'
import MediaCard from '../../../components/media-card'
import Layout3 from '../../../components/CardLayouts/Layout3'

export default function Index({ allPosts }: any) {
    return (
        <>
            <Layout title={'About Us'}>
                <section className='my-8 w-full px-12 mx-auto max-w-screen-xl'>
                    <h2 className='font-bold'>Our Strategy</h2>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">Our strategy revolves around empowering small landholder farmers with affordable and sustainable solutions. We harness solar power to develop innovative technologies such as water pumps and irrigation systems.</p>
                    <h3 className="text-lg font-semibold mb-4">Mission</h3>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia, our mission is to transform the agricultural landscape by providing affordable and sustainable solutions to small landholder farmers. We are dedicated to empowering farmers, increasing productivity, and reducing reliance on fossil fuels.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        Through the power of solar energy and innovative technologies, we aim to improve farmers' livelihoods, enhance crop yields, and unlock the potential of their land. We strive to create a positive impact on the environment by promoting eco-friendly farming practices and preserving precious resources.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        By fostering partnerships, promoting education, and prioritizing scalability and accessibility, we envision a future where every farmer has access to reliable and sustainable agricultural solutions. Our mission is to contribute to a resilient and prosperous agricultural sector in Ethiopia, ensuring food security, economic growth, and environmental sustainability.
                    </p>
                    <h3 className="text-lg font-semibold mb-4">Vision</h3>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        At AgriSun Ethiopia, our vision is to create a future where sustainable agriculture is the cornerstone of thriving rural communities. We envision a world where small landholder farmers have access to affordable and innovative solar-powered solutions that enhance their productivity, improve livelihoods, and mitigate the impacts of climate change.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        We strive to be at the forefront of technological advancements in design, energy, agriculture, water, and software, driving innovation that revolutionizes farming practices. By harnessing the power of the sun, we aim to enable farmers to maximize their land's potential, increase crop yields, and reduce their dependence on fossil fuels.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        Our vision extends beyond individual farmers. We aspire to build strong partnerships and collaborations with government agencies, NGOs, research institutions, and local communities to create a holistic and inclusive agricultural ecosystem. Through knowledge sharing, capacity building, and sustainable practices, we aim to uplift rural communities, promote social equity, and foster environmental stewardship.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        Ultimately, our vision is to make a lasting impact on the agricultural sector in Ethiopia and beyond. By empowering farmers, embracing sustainability, and leveraging technological innovation, we aim to contribute to a future where agriculture is not only resilient and prosperous but also in harmony with nature, ensuring food security, economic growth, and a sustainable planet for generations to come.
                    </p>
                </section>
                {/* <MediaCard /> */}
                {/* <Recents /> */}
                {/* <Layout3
                    title={"Brochures and Reports"}
                /> */}
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
