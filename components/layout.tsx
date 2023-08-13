import Footer from './footer'
import Navbar from './navbar'
import Meta from './meta'
import Head from 'next/head'

type Props = {
  preview?: boolean
  children: React.ReactNode
  title?: string
}

const Layout = ({ title, preview, children }: Props) => {
  return (
    <>
      <Head>
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"  />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"  rel="stylesheet" />
            <title>{`${title ? (`${title} | ASE`) : ('AgriSun Ethiopia')}`}</title>
          </>

        </Head>
    <Navbar />
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
