import Link from 'next/link'
import Image from 'next/image'

const exampleServices = [
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Innovative solutions that blend functionality and aesthetics for a sustainable future.',
        title: 'Design',
        backgroundImage: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Harnessing the power of renewable resources to fuel a greener tomorrow.',
        title: 'Energy',
        backgroundImage: 'https://images.pexels.com/photos/4148472/pexels-photo-4148472.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Building the foundations for sustainable infrastructure that withstands the test of time.',
        title: 'Construction',
        backgroundImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Empowering farmers with sustainable practices to cultivate bountiful harvests and livelihoods.',
        title: 'Agriculture',
        backgroundImage: 'https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Unlocking the potential of water resources with efficient and eco-friendly solutions.',
        title: 'Water',
        backgroundImage: 'https://images.pexels.com/photos/14783299/pexels-photo-14783299.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        text: 'Cutting-edge software solutions to optimize operations and enhance productivity.',
        title: 'Software',
        backgroundImage: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                        <p className=''>
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