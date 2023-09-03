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
                    <h2 className='font-bold'>Our Experience</h2>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">Agri-Sun Ethiopia is staffed by individuals with proven expertise in the solar energy industry and a high level of commitment to help small landholder farmers increase their crop yields and improve their livelihoods through sustainable and affordable solar energy solutions. The company’s major shareholder and General Manager (Ato Yimam Kebede) , has been working in the solar technology industry for the past four years, specializing in assembly of solar generators, selection and installation of solar water pumping systems, maintenance, calculation of solar photovoltaic power sizing, and water well drilling for small farmers.</p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        Yimam also assisted several projects in the area of water requirement analysis and water source identification for farmers, provided appropriate water well drilling services, helped with proper selection of solar pumps, implemented water saving technologies, installation of solar water systems and was involved in an urban farming greenhouse modern seedling propagation project.
                    </p>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">
                        Yimam has been serving as Operations Manager, Technicians Team Leader and Chief Technician in the solar energy industry and eventually as the General Manager of Agri-Sun Ethiopia which is engaged in the renewable energy sector. He installed more than 300 small and medium size submersible and surface pumps in over 50 project sites across the country.
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
