import Link from 'next/link'
import Image from 'next/image'

const exampleServices = [
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Professional Installation services to ensure seamless integration of our products.',
        title: 'Installation',
        backgroundImage: '/assets/home/services-installation.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Empowering Training programs to equip you with essential skills and knowledge.',
        title: 'Training',
        backgroundImage: '/assets/home/services-training.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Innovative Manufacturing of top-quality agricultural components and structures.',
        title: 'Manufacturing',
        backgroundImage: '/assets/home/services-manufacturing.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Expert Shallow Water Well Depth Digging for accessible groundwater resources.',
        title: 'Shallow Water Well Digging',
        backgroundImage: '/assets/home/services-digging.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Insightful Consulting for informed decision-making in agriculture.',
        title: 'Consulting',
        backgroundImage: '/assets/home/services-consulting.png'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Tailored Custom Services designed to meet your unique agricultural needs and objectives.',
        title: 'Other Custom Services',
        backgroundImage: '/assets/home/services-custom.png'
    }
]

const Focus = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <h2 className='mb-8 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl'>Services</h2>
                <div className="flex flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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