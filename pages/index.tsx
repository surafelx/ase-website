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
import Link from 'next/link'

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
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                  <div className="w-3/4 absolute bottom-5 left-5 md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Solar-Powered Water Pumping Systems
                    </Typography>

                    <Link
                      as={`/products/solar-powered-water-pumping-systems`}
                      href="/products/solar-powered-water-pumping-systems"
                      className=""
                    >

                      <div className="flex gap-2">
                        <div className='btn btn-primary px-4 py-2'>
                          Read More
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-irrigation.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                  <div className="w-3/4 absolute bottom-5 left-5 md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Irrigation Equipment & Accessories
                    </Typography>

                    <Link
                      as={`/products/irrigation-equipment-accessories`}
                      href="/products/irrigation-equipment-accessories"
                      className=""
                    >

                      <div className="flex gap-2">
                        <div className='btn btn-primary px-4 py-2'>
                          Read More
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <img
                  src="/assets/home/hero-digging.png"
                  alt="image 1"
                  className=" w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                  <div className="w-3/4 absolute bottom-5 left-5 md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Shallow-Depth Water Well Drilling Services
                    </Typography>

                    <Link
                      as={`/products/shallow-depth-water-well-drilling-rigs`}
                      href="/products/shallow-depth-water-well-drilling-rigs"
                      className=""
                    >

                      <div className="flex gap-2">
                        <div className='btn btn-primary px-4 py-2'>
                          Read More
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-backup.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                  <div className="w-3/4 absolute bottom-5 left-5 md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Solar Powered Energy Backup Systems
                    </Typography>

                    <Link
                      as={`/products/solar-powered-energy-backup-system`}
                      href="/products/solar-powered-energy-backup-system"
                      className=""
                    >

                      <div className="flex gap-2">
                        <div className='btn btn-primary px-4 py-2'>
                          Read More
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-installation.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                  <div className="w-3/4 absolute bottom-5 left-5 md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Installation
                    </Typography>

                    <Link
                      as={`/sevices/installation`}
                      href="/sevices/installation"
                      className=""
                    >

                      <div className="flex gap-2">
                        <div className='btn btn-primary px-4 py-2'>
                          Read More
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-training.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                  <div className="w-3/4 absolute bottom-5 left-5 md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Training
                    </Typography>

                    <Link
                      as={`/services/training`}
                      href="/services/training"
                      className=""
                    >

                      <div className="flex gap-2">
                        <div className='btn btn-primary px-4 py-2'>
                          Read More
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="/assets/home/hero-manufacturing.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                  <div className="w-3/4 absolute bottom-5 left-5 md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-lg font-bold md:text-4xl lg:text-5xl"
                    >
                      Manufacturing
                    </Typography>
                    <Link
                      as={`/services/manufacturing`}
                      href="/services/manufacturing"
                      className=""
                    >

                      <div className="flex gap-2">
                        <div className='btn btn-primary px-4 py-2'>
                          Read More
                        </div>
                      </div>
                    </Link>
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
