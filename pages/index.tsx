import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Recents from '../components/recents'
import Focus from '../components/focus'
import Hero from '../components/hero'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import OtherAreas from '../components/other-areas'
import AboutUs from '../components/about-us'
import ContactUs from '../components/contact-us'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Products from '../components/products'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts
  return (
    <>
      <Layout>

        <Container>
          {/* <Hero
           title={heroPost.title}
           coverImage={heroPost.coverImage}
           slug={heroPost.slug}
           excerpt={heroPost.excerpt}
            /> */}
          <section className='w-full mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl my-4 h-1/6'>
            <Carousel
              className="rounded-xl"
              autoplay={true}
              loop={true}
              autoplayDelay={3000}
            >

              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-solar.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Solar-Powered Water Pumping Systems
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-sm md:text-lg opacity-80"
                    >
                      Step into the future of agriculture with our cutting-edge Solar Powered Water Pumping Systems, offering eco-friendly and cost-effective solutions to meet your farm's water needs while reducing your carbon footprint.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <div className='btn btn-primary px-4 py-2'>
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-irrigation.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Irrigation Equipment & Accessories
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-sm md:text-lg opacity-80"
                    >
                      Discover the versatility and efficiency of our extensive range of Irrigation Equipment & Accessories, designed to enhance your farming practices and optimize resource utilization for sustainable agricultural success
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <div className='btn btn-primary px-4 py-2'>
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <img
                  src="/assets/home/hero-digging.png"
                  alt="image 1"
                  className=" w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Shallow-Depth Water Well Drilling Services
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-sm md:text-lg opacity-80"
                    >
                      Experience the transformative power of our Shallow Depth Water Well Drilling Rigs, designed to provide easy access to groundwater resources, ensuring a reliable and abundant water supply for your farming needs.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <div className='btn btn-primary px-4 py-2'>
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-backup.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Solar Powered Energy Backup Systems
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-sm md:text-lg opacity-80"
                    >
                      Ensure uninterrupted power for your home or business with our Solar Powered Energy Backup System, a reliable and sustainable solution to keep you powered up during outages and emergencies
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <div className='btn btn-primary px-4 py-2'>
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-installation.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Installation
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-sm md:text-lg opacity-80"
                    >
                      Experience the convenience of our professional Installing services, where we handle the intricate setup and configuration of our advanced agricultural equipment, ensuring seamless integration into your operations for improved efficiency and productivity
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <div className='btn btn-primary px-4 py-2'>
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-training.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Training
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-sm md:text-lg opacity-80"
                    >
                      "Explore our comprehensive Training services, designed to empower farmers and businesses with the knowledge and skills needed to optimize agricultural practices and make the most of our cutting-edge products, ensuring sustainable growth and success.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <div className='btn btn-primary px-4 py-2'>
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-manufacturing.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Manufacturing
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-sm md:text-lg opacity-80"
                    >
                      Discover the precision and innovation behind our Manufacturing services, producing a wide range of top-quality agricultural components and structures, such as solar panel mounting racks, reservoir mounting structures, inverter/controller safety boxes, water well safety cups, PV module mounting fencing, and various types of stands.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <div className='btn btn-primary px-4 py-2'>
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </Carousel>
          </section>
          {/* <AboutUs /> */}
          {morePosts.length > 0 && <Recents posts={morePosts} />}
          <Products />
          <Focus />
          <OtherAreas />

          {/* <ContactUs /> */}
          {/* <Intro /> */}
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
           */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>

    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'excerpt',
    'slug',
    'coverImage',
  ])


  return {
    props: { allPosts },
  }
}
