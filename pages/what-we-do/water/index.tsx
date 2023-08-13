import Layout from '../../../components/layout'
import WhatWeDo from '../../../components/contextual/what-we-do'

const designService = {
  heroImage: 'design',
  title: 'Design',
  mainParagraph: 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy. Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy.',
  subParagraphs: ['Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.',
    'Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'],
  services: [
    {
      title: 'Creativity',
      text: '',
      backgroundImage: ''
    }
  ],
  recents: [
    {
      image: '',
      link: 'https://www.google.com',
      type: 'Blog',
      title: 'Shaping Resilience',
      date: '2021-11-02'
    }
  ],
  otherAreas: [
    {
      title: 'Shaping resilience',
      text: 'Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.',
      link: 'Download',
      imageLink: ''
    }
  ],
  teamMembers: [
    {
      name: 'Surafel Yimam',
      title: 'Design CEO',
      imageLink: ''
    }
  ]
}
export default function Index() {
  const {
    title,
    mainParagraph,
    subParagraphs,
    services,
    recents,
    otherAreas,
    teamMembers } = designService
  return (
    <>
      <WhatWeDo
        title={title}
        mainParagraph={mainParagraph}
        subParagraphs={subParagraphs}
        services={services}
        recents={recents}
        otherAreas={otherAreas}
        teamMembers={teamMembers}
      />
    </>
  )
}
