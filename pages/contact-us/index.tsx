import Layout from '../../components/layout'


export default function Index({ allPosts }: any) {

    return (
        <>
            <Layout title={'Contact Us'}>
                <section className='my-8 flex flex-col max-w-screen-xl px-4 lg:px-24 mx-auto'>
                    <h2 className='font-bold mb-8'>
                        Contact Us
                    </h2>
                    <div className='flex flex-row gap-24 justify-between'>
                        <div className='w-full flex flex-col  justify-around'>
                            <div className='text-bottom-border-primary-color py-5'>
                                <h3 className='font-semibold mb-2'>
                                    Main Office Address
                                </h3>
                                <p>Hayhaulet Nigat Business Center</p>
                                <p>Floor 11 Office No. 04 </p>
                            </div>
                            <div className='text-bottom-border-primary-color py-5'>

                                <h3 className='font-semibold mb-2'>
                                    Phone No.
                                </h3>
                                <p>+251941970026</p>
                            </div>
                            <div className='text-bottom-border-primary-color py-5'>
                                <h3 className='font-semibold mb-2'>Email</h3>
                                <p>info@agrisunethiopiaplc.com</p>
                            </div>
                        </div>

                        <div className='w-full'>

                            <form className='flex flex-col gap-4'>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                            </svg>
                                        </div>
                                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name." />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                            </svg>
                                        </div>
                                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address." />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your service</label>
                                  
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Design</option>
                                        <option>Energy</option>
                                        <option>Construction</option>
                                        <option>Agriculture</option>
                                        <option>Water</option>
                                        <option>Software</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div>

                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                                </div>
                                <div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I would like to receive updates <a href="#" className="text-primary-color hover:underline dark:text-blue-500">from AgriSun Ethiopia.</a></label>
                                    </div>
                                    <button type="submit" className="text-white bg-primary-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send us a Message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>

            </Layout>
        </>
    )
}
