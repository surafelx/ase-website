import Link from 'next/link'

const Hero = (
  {
    title,
    coverImage,
    excerpt,
    slug,
  }
) => {
  return (
    <>
      <section className="h-[500px] lg:h-[680px] px-[20px] flex flex-col justify-end">

        <div className="hero mx-auto rounded-2xl justify-end flex flex-col h-full bg-black w-full max-w-screen-xl lg:p-24 p-4 py-6">
          <h1 className="text-white font-extrabold drop-shadow-lg text-xl lg:text-5xl mb-4">{`${title}`}</h1>
          <p className="max-md:drop-shadow-lg text-lg sm:text-xl font-thin animated-subtitle mb-4 leading-5 lg:leading-6 text-white">{`${excerpt}`}</p>
          <div className='
                flex'>
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              <button className="btn btn-primary justify-center py-2 px-3 mb-0">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <style jsx>
        {
          `
            .hero {
              background-image:
              linear-gradient(230.7deg,rgba(0,0,0,.105) 2.42%,rgba(0,0,0,.07) 24.45%,rgba(0,0,0,.21) 41.88%,rgba(0,0,0,.546) 76.81%),
              url(${coverImage});
              background-size: cover;
              background-repeat: no-repeat;
          }
            `
        }
      </style>
    </>


  )
}

export default Hero