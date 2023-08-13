import Link from 'next/link'
import Index from '../pages'

const exampleRecents = [
    {
        date: '2020-11-02',
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        type: 'BLOG',
        title: 'Building Investment Ready Business Cases for Impact',
        backgroundImage: 'https://a.storyblok.com/f/191310/5bdc032cbd/dfcd-landscapes.jpg'
    },
    {
        date: '2020-11-03',
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        type: 'BLOG',
        title: 'Building Investment Ready Business Cases for Impact',
        backgroundImage: 'https://a.storyblok.com/f/191310/5bdc032cbd/dfcd-landscapes.jpg'
    },
    {
        date: '2020-11-04',
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        type: 'BLOG',
        title: 'Building Investment Ready Business Cases for Impact',
        backgroundImage: 'https://a.storyblok.com/f/191310/5bdc032cbd/dfcd-landscapes.jpg'
    },
    {
        date: '2020-11-05',
        link: 'https://www.snv.org/update/beyond-formality-how-embracing-informal-markets-can-drive-inclusive-economic-growth',
        type: 'BLOG',
        title: 'Building Investment Ready Business Cases for Impact',
        backgroundImage: 'https://a.storyblok.com/f/191310/5bdc032cbd/dfcd-landscapes.jpg'
    }
]
const Recents = ({ posts }) => {
    return (
        <>
            <section className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-84">
                <h2 className='mb-8 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl'>Recent Activities</h2>
                <div className="flex flex-col gap-4">

                    <div className="flex h-1/2 md:flex-row flex-col w-full gap-4">
                        {posts.slice(0, 2).map((post, index) => (
                            <RecentsCard
                                index={index}
                                key={post.slug}
                                direction={'left'}
                                type={post.excerpt}
                                title={post.title}
                                backgroundImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                slug={post.slug}
                            />
                        ))}
                    </div>
                    <div className="flex h-1/2 md:flex-row flex-col w-full gap-4">
                        {posts.slice(2, 5).map((post, index) => (
                            <RecentsCard
                                index={index}
                                key={post.slug}
                                direction={'right'}
                                type={post.excerpt}
                                title={post.title}
                                backgroundImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                slug={post.slug}
                            />
                        ))}

                    </div>
                </div>
                {/* <div className='
                mt-8 flex justify-center'>
                    <button className="btn btn-secondary justify-center py-3 px-5 mb-0">
                        See all our activities
                    </button>
                </div> */}
                <div className="spacer w-full relative h-6 md:h-12 spacer-divider">

                </div>
            </section>
            <style jsx>
                {
                    `
                   

                .spacer {
                    border-color: green;
                    border-bottom-width: 1px;
                }
                `
                }
            </style>
        </>

    )
}

const RecentsCard = ({ index, date, type, title, direction, backgroundImage, author, slug }) => {
    return (
        <>
            <div className={`card bg-black h-60 lg:h-96 rounded-3xl sm:w-full md:w-1/2 ${index == 0 && direction == 'right' ? "lg:w-2/5" : "lg:w-3/5"}`}>
                <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                    className=""
                >
                    <div className='card-interior p-8 mb-auto text-white drop-shadow-lg'>
                        <div className='flex flex-between justify-between '>
                            <p className="">
                                {date}
                            </p>
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                                </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-white font-thin text-lg leading-6 block drop-shadow-lg'>
                                {type}
                            </h4>
                            <h3 className='font-bold lg:text-2xl leading-7 drop-shadow-lg text-white'>
                                {title}
                            </h3>
                            <h5 className='font-bold lg:text-2xl leading-7 drop-shadow-lg text-white'>
                                {author}
                            </h5>
                        </div>
                    </div>
                </Link >
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

export default Recents