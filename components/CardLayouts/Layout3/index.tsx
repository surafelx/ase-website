import MediumCard from "../../Cards/MediumCard";

export default function Index({ title }: any) {
    return (
        <>
            <section className='mx-auto max-w-screen-xl mx-auto mb-8'>
                <h2 className='mb-8 font-bold'>{title}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <MediumCard
                        date='2021-11-02'
                        link='https://google.com'
                        type='BLOG'
                        title='Shaping resilience'
                        backgroundImage={'./images/logo.png'}
                    />
                    <MediumCard
                        date='2021-11-02'
                        link='https://google.com'
                        type='BLOG'
                        title='Shaping resilience'
                        backgroundImage={'./images/logo.png'}
                    />
                    <MediumCard
                        date='2021-11-02'
                        link='https://google.com'
                        type='BLOG'
                        title='Shaping resilience'
                        backgroundImage={'./images/logo.png'}
                    />
                    <MediumCard
                        date='2021-11-02'
                        link='https://google.com'
                        type='BLOG'
                        title='Shaping resilience'
                        backgroundImage={'./images/logo.png'}
                    />
                    <MediumCard
                        date='2021-11-02'
                        link='https://google.com'
                        type='BLOG'
                        title='Shaping resilience'
                        backgroundImage={'./images/logo.png'}
                    />
                    <MediumCard
                        date='2021-11-02'
                        link='https://google.com'
                        type='BLOG'
                        title='Shaping resilience'
                        backgroundImage={'./images/logo.png'}
                    />
                </div>
                <div className='
                  mt-8 flex justify-center'>
                    <button className="btn btn-secondary justify-center py-3 px-5 mb-0">
                        See all our activities
                    </button>
                </div>
            </section>

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