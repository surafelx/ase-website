import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
const MediaCard = () => {
    return (
        <section className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div>
                <ReactPlayer
                    className="flex w-full h-full justify-center mx-auto"
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    controls={true}
                    width="100%"
                    height="800px"
                />
            </div>
            <div className='px-12 mt-8 max-w-screen-xl mx-auto'>
                <p className="mb-4 text-gray-500 dark:text-gray-400 font-semibold">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
            </div>

        </section>
    )
}

export default MediaCard