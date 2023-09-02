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
          <section className='w-full mx-auto max-w-screen-xl my-4 h-1/6'>
            <Carousel
              className="rounded-xl"
              autoplay={true}
              loop={true}
              autoplayDelay={3000}
            >

              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                      Solar-Powered Water Pumping Systems
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      Step into the future of agriculture with our cutting-edge Solar Powered Water Pumping Systems, offering eco-friendly and cost-effective solutions to meet your farm's water needs while reducing your carbon footprint.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="lg" color="white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                      Irrigation Equipment & Accessories
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      Discover the versatility and efficiency of our extensive range of Irrigation Equipment & Accessories, designed to enhance your farming practices and optimize resource utilization for sustainable agricultural success
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="lg" color="white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                      Shallow-Depth Water Well Drilling Services
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      Experience the transformative power of our Shallow Depth Water Well Drilling Rigs, designed to provide easy access to groundwater resources, ensuring a reliable and abundant water supply for your farming needs.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="lg" color="white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                      Solar Powered Energy Backup Systems
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      Ensure uninterrupted power for your home or business with our Solar Powered Energy Backup System, a reliable and sustainable solution to keep you powered up during outages and emergencies
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="lg" color="white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>



            </Carousel>
          </section>
          {morePosts.length > 0 && <Recents posts={morePosts} />}
          <Focus />
          <OtherAreas />
          <AboutUs />
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
