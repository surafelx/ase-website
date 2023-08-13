import Layout from '../../components/layout'
import React from "react"


export default function Index({ allPosts }: any) {

    return (
        <>
            <Layout title={'Our Work'}>
                <section className='mt-8 max-w-screen-xl mx-auto lg:px-12'>
                    <h2 className='font-bold mb-8'>Our Work So Far</h2>
                    <p>SNV's international impact spans more than 20 countries across Africa and Asia, building on 60 years of experience in those countries. We are one team of over 1,600 colleagues, the vast majority of whom come from the contexts where we work. Together, we are committed to effective and efficient stewardship of resources and maximising positive, lasting impacts.</p>
                </section>
                <section className='mt-8 h-[900px] max-w-screen-xl mx-auto lg:px-12'>
                    {/* <SimpleMap /> */}
                    {/* <MapChart /> */}
                </section>
            </Layout>
        </>
    )
}
