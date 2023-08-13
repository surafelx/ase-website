const AboutUs = () => {
    return (
        <>
            <section className='mb-24 bg-primary-color lg:h-[640px] flex  rounded-2xl px-8 w-full  mx-auto'>
                <div className="mx-auto align-middle my-auto lg:px-56 w-full p-4 py-6 lg:py-8">
                    <h2 className="text-white font-bold mb-8">About Us</h2>
                    <div className="rte rte-white rte-lg mb-8 flex">
                        <p className="text-white font-medium">
                            AgriSun Ethiopia pioneers affordable and sustainable solar systems for small landholder farmers. They offer water well drilling, solar-powered water pumps, water-saving irrigation systems, and value chain activities. Their goal is to enhance farmers' livelihoods, reduce reliance on fossil fuels, and increase crop yields by providing innovative solar solutions. Join the sun-powered revolution for a sustainable future.
                        </p>
                        <div className="hidden lg:flex w-4/5"></div>
                    </div>
                    <button className="btn btn-white justify-center py-2 px-3 mb-0">
                        Read More
                    </button>
                </div>
            </section>
        </>

    )
}

export default AboutUs