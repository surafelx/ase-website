const ContactUs = () => {
    return (
        <section className='rounded-2xl w-full mx-auto pt-4'>
            <div className='flex gap-12 p-4 lg:px-36 md:px-40 lg:px-56 py-12 flex-col lg:flex-row h-full lg:h-1/3 w-full'>
                <div className="bg-red-500 lg:w-1/2 rounded-3xl h-[280px] w-full lg:w-1/2">
                </div>
                <div className='md:px-4 lg:w-1/2 flex flex-col gap-8 align-middle my-auto h-full justify-center'>
                    <h2 className='font-bold text-xl lg:text-5xl'>
                        Inspired to make a difference?
                    </h2>
                    <div className=''>
                        <p className="font-semibold">

                            At SNV, we're always seeking new partnerships and collaborations to achieve our shared mission. Whether you're interested in learning more about our activities or exploring collaboration opportunities, get in touch with us to learn more.
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-primary justify-center py-2 px-3 mb-0">
                            Read More
                        </button>
                    </div>

                </div>
            </div>
            <div className="w-full flex justify-center py-4 text-white bg-gray-500 rounded-b-2xl">
                Share
            </div>
        </section>
    )
}

export default ContactUs