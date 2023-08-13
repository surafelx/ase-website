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
                    <h2 className='font-bold'>Gallery</h2>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy. Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy.</p>
                </section>
                <MediaCard />
                {/* <Recents /> */}
                <Layout3
                    title={"Brochures and Reports"}
                />
            </Layout>
            <style jsx>
                {`
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
