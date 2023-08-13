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

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>

        <Container>
          <Hero
           title={heroPost.title}
           coverImage={heroPost.coverImage}
           slug={heroPost.slug}
           excerpt={heroPost.excerpt}
            />
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
