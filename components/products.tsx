import Link from 'next/link'
import Image from 'next/image'

const exampleServices = [
    {
        link: '/assets/home/products-pump.png',
        text: "Our Solar Powered Water Pumping Systems harness the sun's energy to deliver a reliable and eco-friendly solution for meeting your farm's water requirements, ensuring sustainability and cost-efficiency.",
        title: 'Solar Powered Water Pumping Systems',
        backgroundImage: '/assets/home/products-pump.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: "Explore our wide range of Irrigation Equipment & Accessories, meticulously designed to enhance crop cultivation, optimize resource utilization, and boost agricultural productivity.",
        title: 'Irrigation Equipment & Accessories',
        backgroundImage: '/assets/home/products-irrigation.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: "Unearth the potential of your land with our Shallow Depth Water Well Drilling Rigs, providing easy access to groundwater resources for a consistent and abundant water supply, vital for successful farming.",
        title: 'Shallow Depth Water Well Digging Rigs',
        backgroundImage: '/assets/home/products-digging.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: "Stay powered and prepared with our Solar Powered Energy Backup System, ensuring uninterrupted electricity during outages and emergencies, promoting energy efficiency and self-reliance.",
        title: 'Solar Powered Energy Backup Systems',
        backgroundImage: '/assets/home/products-backup.png'
    }
]

const Focus = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <h2 className='mb-8 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl'>Products</h2>
                <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2">
                    {exampleServices.map(({ title, text, backgroundImage }) => {
                        return (
                            <ServicesCard
                                title={title}
                                text={text}
                                backgroundImage={backgroundImage}
                            />
                        )
                    })}
                </div>
            </section>
        </>

    )
}

const ServicesCard = ({ title, text, backgroundImage }) => {
    return (
        <>
            <div className='h-full lg:h-1/3 w-full mb-4 '>
                <div className="card  bg-blue-600/30 backdrop-brightness-75 rounded-3xl h-[450px] w-full mb-4">
                    {/* <Image
                        src={`/images/social.svg`}
                        className="mr-3"
                        width={30}
                        height={30}
                        alt={`${title}`}
                    /> */}
                </div>
                <div className=''>
                    <h3 className='font-bold text-2xl my-4'>
                        {title}
                    </h3>
                    <div className='pr-4'>
                        <p className='font-bold'>
                            {text}
                        </p>
                    </div>

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

export default Focus