import Image from 'next/image'

const exampleAreas = [
    {
        icon: '/images/environment.png',
        title: 'Environment',
        text: 'Promoting environmental stewardship through sustainable practices for a greener and healthier planet.'
    },
    {
        icon: '/images/finance.png',
        title: 'Finance',
        text: 'Empowering individuals and businesses with financial solutions that drive economic growth and prosperity.'
    },
    {
        icon: '/images/education.png',
        title: 'Education',
        text: 'Nurturing a lifelong love for learning through innovative educational programs and resources.'
    },
    {
        icon: '/images/social.png',
        title: 'Social Justice',
        text: 'Advocating for equality, fairness, and inclusivity to create a just and harmonious society.'
    }
]
const OtherAreas = () => {
    return (
        <section className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 '>
            <div className='flex flex-col lg:flex-row gap-12 '>
                <div className="w-full lg:w-1/2">
                    <h2 className='mb-8 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl'>Other impact areas</h2>
                    <div className="flex flex-col gap-6 font-semibold">
                        <p>Working on design, software, energy, agriculture, water, and construction not only brings direct benefits within their respective fields but also has significant impact areas in broader society. These impact areas include economic growth, job creation, environmental sustainability, and community development.</p>
                        <p>These industries contribute to economic growth by fostering innovation and creating new business opportunities. Design and software development drive the growth of creative industries, while energy and agriculture sectors generate employment and entrepreneurial opportunities. Construction stimulates economic activity through infrastructure development and urbanization. These industries attract investments, stimulate local economies, and contribute to the overall prosperity of communities.</p>
                        <p>The emphasis on environmental sustainability is a crucial aspect of these sectors. Energy solutions that focus on renewable sources reduce reliance on fossil fuels and mitigate climate change impacts. Sustainable agriculture practices prioritize soil conservation, water management, and biodiversity preservation. Water management systems ensure efficient use of water resources, promoting conservation. Construction with sustainable materials and green building practices reduces carbon footprint and enhances energy efficiency. By addressing environmental challenges, these industries play a vital role in creating a greener and more sustainable future.</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    {exampleAreas.map(({ icon, title, text }) => {
                        return (
                            <OtherAreasCard icon={icon} title={title} text={text} />
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

const OtherAreasCard = ({ icon, title, text }) => {
    return (
        <div className='border-b-2 py-5 border-green-500 '>
            <div className="flex align-middle justify-between">
                <div className='flex align-middle gap-4'>
                    <Image
                        src={`${icon}`}
                        className="mr-3"
                        width={48}
                        height={40}
                        alt={`${title}`}
                    />
                    <h4 className='font-bold'>{title}</h4>
                </div>
                <div className=''>
                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                    </svg>
                </div>
            </div>
            <p className='font-semibold'>{text}</p>
        </div>
    )
}
export default OtherAreas