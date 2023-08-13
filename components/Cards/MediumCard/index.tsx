
const MediumCard = ({ date, link, type, title, backgroundImage }) => {
    return (
        <>
            <div className={`card bg-black h-60 lg:h-96 rounded-3xl sm:w-full w-full`}>
                <div className='card-interior p-8 mb-auto text-white drop-shadow-lg'>
                    <div className='flex flex-between justify-between '>
                        <p className="">
                            {date}
                        </p>
                        <a href={link}>
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                            </svg>
                        </a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white uppercase font-thin text-lg leading-6 block drop-shadow-lg'>
                            {type}
                        </h4>
                        <h3 className='font-bold text-2xl leading-7 drop-shadow-lg text-white'>
                            {title}
                        </h3>
                    </div>

                </div>
            </div>
            <style jsx>
                {
                    `
                    .card {
                        background-image:
                        linear-gradient(230.7deg,rgba(0,0,0,.105) 2.42%,rgba(0,0,0,.07) 24.45%,rgba(0,0,0,.21) 41.88%,rgba(0,0,0,.546) 76.81%),
                        url(${backgroundImage});
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                .card-interior {
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                }
                `
                }
            </style>
        </>
    )
}


export default MediumCard