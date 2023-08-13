import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')


const servicesDirectory = join(process.cwd(), '_services')


export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}


export function getServicesSlugs() {
  return fs.readdirSync(servicesDirectory)
}


export const getServiceBySlug = (slug: string,  fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(servicesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

const services = [
  {
    heroImage: 'design',
    slug: 'design',
    title: 'Design',
    mainParagraph: 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy. Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy.',
    subParagraphs: ['Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.',
    'Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'],
    services: [
      {
        text: 'Creativity',
        icon: ''
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
  },
  {
    heroImage: 'design',
    slug: 'construction',
    title: 'Design',
    mainParagraph: 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy. Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy.',
    subParagraphs: ['Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.',
    'Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'],
    services: [
      {
        text: 'Creativity',
        icon: ''
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
]

export function getAllServices(fields: string[] = []) {
  return services
}

