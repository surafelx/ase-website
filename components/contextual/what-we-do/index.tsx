import Layout from '../../../components/layout'
import Link from 'next/link'

export default function Index({
    title,
    mainParagraph,
    subParagraphs,
    services,
    recents,
    otherAreas,
    teamMembers }: any) {
    return (
        <>
            <Layout title={title}>
                <section className='w-full mx-auto max-w-screen-xl h-[500px]'>
                    <div className='my-4'>Home {'>'} What We Do {'>'} {`${title}`}</div>
                    <div className='h-full w-full  justify-center flex'>
                        <div className='bg-black rounded-l-2xl w-3/5'>L</div>
                        <div className='bg-primary-color rounded-r-2xl w-2/5'>
                            H
                        </div>
                    </div>
                    <div className='bg-black w-'></div>

                </section>
                <section className='mt-16 mb-8 px-12 max-w-screen-xl mx-auto'>
                    <p className="mb-4 text-lg text-gray-500 md:text-xl font-semibold dark:text-gray-400">{`${mainParagraph}`}</p>
                    {subParagraphs.map((paragraph) =>
                        <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">{`${paragraph}`}</p>
                    )}

                </section>
                {/* <section className='m-16 max-w-screen-xl mx-auto'>
                    <h2 className='mb-8 font-bold'>Our {`${title}`} Approach</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {services.map(({ title, text, backgroundImage }) =>
                            <ServicesCard
                                title={title}
                                text={text}
                                backgroundImage={backgroundImage}
                            />
                        )}
                    </div>
                </section>
                <section className='m-16 max-w-screen-xl mx-auto'>
                    <h2 className='mb-8 font-bold'>{`${title}`} news and stories</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {recents.map(({ date, link, type, title, text, backgroundImage }) =>
                            <RecentsCard
                                date={date}
                                link={link}
                                type={type}
                                title={title}
                                backgroundImage={backgroundImage}
                            />
                        )}
                    </div>
                    <div className='
                mt-8 flex justify-center'>
                        <Link href="/news-and-stories">
                            <button className="btn btn-secondary justify-center py-3 px-5 mb-0">
                                See all our activities
                            </button>
                        </Link>

                    </div>
                </section>
                <section className='m-16 max-w-screen-xl mx-auto'>
                    <h2 className='mb-8 font-bold '>Design resources</h2>
                    <div className='flex flex-col gap-4'>
                        {otherAreas.map(({ icon, text, title }) =>
                            <OtherAreasCard
                                icon={icon}
                                text={text}
                                title={title}
                            />
                        )}
                    </div>
                    <div className='
                mt-8 flex justify-center'>
                        <Link href="/services">
                            <button className="btn btn-secondary justify-center py-3 px-5 mb-0">
                                See all our services
                            </button>
                        </Link>
                    </div>
                    <div className="spacer w-full relative h-6 md:h-12 spacer-divider">
                    </div>
                </section>
                <section className='m-16 max-w-screen-xl mx-auto'>
                    <h2 className='mb-8 font-bold'>{`${title}`} Team</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {teamMembers.map(({ name, title, imageLink }) => {
                            <TeamsCard
                                name={name}
                                title={title}
                                
                            />
                        })}
                    </div>
                    <div className="spacer w-full relative h-6 md:h-12 spacer-divider">
                    </div>
                </section> */}
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

const OtherAreasCard = ({ icon, title, text }) => {
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
                            <div>Download</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const ServicesCard = ({ title, text, backgroundImage }) => {
    return (
        <>
            <div className='h-full lg:h-1/3 w-full mb-4 '>
                <div className="card bg-black rounded-3xl h-[450px] w-full mb-4">
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

const RecentsCard = ({ date, link, type, title, backgroundImage }) => {
    return (
        <>
            <div className={`card bg-black h-60 lg:h-96 rounded-3xl sm:w-full w-full`}>
                <div className='card-interior p-8 mb-auto text-white drop-shadow-lg'>
                    <div className='flex flex-between justify-between '>
                        <p className="">
                            {date}
                        </p>
                        <a href={link}>
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                            </svg>
                        </a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white uppercase font-thin text-lg leading-6 block drop-shadow-lg'>
                            {type}
                        </h4>
                        <h3 className='font-bold text-2xl leading-7 drop-shadow-lg text-white'>
                            {title}
                        </h3>
                    </div>

                </div>
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

const TeamsCard = ({ name, title }) => {
    return (
        <>
            <div className='h-full lg:h-1/3 w-full mb-4 '>
                <div className="card bg-black rounded-3xl h-[450px] w-full mb-4">
                </div>
                <h4>{name}</h4>
                <p>{title}</p>
            </div>
            <style jsx>{
                `
            .card {
                background-image:
                background-size: cover;
                background-repeat: no-repeat;
            }
            `
            }
            </style>
        </>
    )
}