import Link from 'next/link'

const exampleAreas = [
    {
        icon: './images/environment.png',
        title: 'Environment',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit sed leo gravida congue. Nulla consequat tellus lorem, ac mollis elit feugiat hendrerit.'
    },
    {
        icon: './images/finance.png',
        title: 'Finance',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit sed leo gravida congue. Nulla consequat tellus lorem, ac mollis elit feugiat hendrerit.'
    },
    {
        icon: './images/education.png',
        title: 'Education',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit sed leo gravida congue. Nulla consequat tellus lorem, ac mollis elit feugiat hendrerit.'
    },
    {
        icon: './images/social.png',
        title: 'Social Justice',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit sed leo gravida congue. Nulla consequat tellus lorem, ac mollis elit feugiat hendrerit.'
    }
]
const LargeList = ({posts}) => {
    
    return (
        <section className='max-w-screen-xl mx-auto'>
            <div className="flex justify-between mx-8">
                <div>Showing X Publications</div>
                <div className="flex gap-4">
                    <button className="btn btn-secondary px-2 py-2">

                        <svg className="w-[15px] h-[15px] mr-2 text-primary-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg> Latest
                    </button>
                    <button className="btn btn-secondary px-2 py-2">
                        <svg className="w-[15px] h-[15px] mr-2 text-primary-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 1v12m0 0 4-4m-4 4L1 9" />
                        </svg>
                        Oldest
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-4'>
                {posts.map((post) => (
                    <Link
                        as={`/posts/${post.slug}`}
                        href="/posts/[slug]"
                        className="hover:underline"
                    >
                        <LargeListWithImageCard
                            icon={'./images/environment.png'}
                            text={'Hello'}
                            title={post.title}
                        />
                    </Link >
                ))}

                {/* <LargeListWithImageCard
                    icon='./images/environment.png'
                    text='Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'
                    title='Shaping resilience'
                />
                <LargeListWithImageCard
                    icon='./images/environment.png'
                    text='Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'
                    title='Shaping resilience'
                />
                <LargeListWithImageCard
                    icon='./images/environment.png'
                    text='Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'
                    title='Shaping resilience'
                /> */}
            </div>
            <div className="">
                <nav className="w-full flex mx-auto max-w-screen-xl">
                    <ul className="flex items-center mx-auto -space-x-px h-10 text-base">
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-white font-medium border border-blue-300 bg-primary-color hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="spacer w-full relative h-6 md:h-12 spacer-divider">
            </div>
        </section>
    )
}


const LargeListWithImageCard = ({ icon, title, text }) => {
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default LargeList