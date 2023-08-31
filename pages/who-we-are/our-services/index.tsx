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
                    <h2 className='font-bold'>Our Services</h2>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto my-8'>
                    <h3 className="text-lg font-semibold mb-4">Mounting Racks</h3>
                    <div className="flex gap-4">
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Solar Panel Mounting Racks
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Securely install solar panels with our durable and adjustable mounting racks.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reservoir Mounting Racks</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience unmatched stability and durability with our Agni-Voltaic rack systems.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agni-Voltaic System Racks</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Effortlessly mount and position reservoirs with our reliable mounting rack solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto my-8'>
                    <h3 className="text-lg font-semibold mb-4">Power Backup System Boxes</h3>
                    <div className="flex gap-4">
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inverter Boxes</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Protect and optimize your inverter performance with our reliable inverter boxes.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Controller Boxes</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ensure efficient and safe operation of your system with our controller boxes.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Power Backup Boxes</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience uninterrupted power supply with our reliable and versatile power backup boxes.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='px-12 max-w-screen-xl mx-auto my-8'>
                    <h3 className="text-lg font-semibold mb-4">Other</h3>
                    <div className="flex gap-4">
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Water Well Safety Cups</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Efficiently drill shallow water wells with our versatile tractor-mounted drilling rig.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PV Module Fencing</h5>
                                </a>    
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Unleash the power of our tractor-mounted drilling rig for quick and reliable results.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sprinkler Tripod and Other Stands</h5>
                                </a>    
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Unleash the power of our tractor-mounted drilling rig for quick and reliable results.</p>
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
