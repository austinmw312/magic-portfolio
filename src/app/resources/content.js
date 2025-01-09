import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Austin',
    lastName:  'Weideman',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Sacramento, CA',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    // {
    //     name: 'GitHub',
    //     icon: 'github',
    //     link: 'https://github.com/once-ui-system/nextjs-starter',
    // },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/austin-weideman-0ba5b7159/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:austinweideman@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Engineer, builder, creator</>,
    subline: <>I'm Austin, a software engineer at <InlineCode>Yo Mama's</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/austin-weideman'
    },
    intro: {
        display: false,
        title: 'Introduction',
        description: <></>
    },
    projects: {
        display: true,
        title: 'Featured Projects',
        list: [
            {
                title: 'RAG Chatbot',
                achievements: [
                    <>Full-stack AI chat application enabling document-based conversations</>,
                    <>Supports 20+ document types including PDFs, Word, and Excel</>,
                    <>Built with LangChain, LangGraph, Supabase, PGVector, OpenAI, LlamaParse, Next.js</>
                ],
                link: 'https://rag-chatbot-pearl.vercel.app/',
                images: [
                    // {
                    //     src: '/images/projects/rag-chatbot.jpg',
                    //     alt: 'RAG Chatbot Interface',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                title: 'Reddit Sentiment Analysis Platform',
                achievements: [
                    <>AI-powered platform that analyzes Reddit posts by sentiment categories</>,
                    <>Helps users identify business opportunities through pain points and solution requests</>,
                    <>Built with Next.js, TypeScript, Tailwind, Supabase, and OpenAI</>
                ],
                link: 'https://reddit-analytics-platform-ten.vercel.app/',
                images: []
            },
            {
                title: 'Guitar Visualizer',
                achievements: [
                    <>Interactive tool for visualizing guitar notes, scales, and chords</>,
                    <>Personal project born from need as a guitarist</>,
                    <>Built with HTML, JavaScript, and CSS</>
                ],
                link: 'https://guitarvispro.com/',
                images: []
            }
        ]
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Weideman Group',
                timeframe: 'January 2024 - Present',
                role: 'Account Executive',
                achievements: [
                    <>Lead consultant for software and technology clients at the Weideman Group, a family business and Top 5 ranked government affairs firm in California.</>,
                    <>Manage projects for 12 large accounts, including McKinsey & Company, Lucid Motors, Autodesk, Nuro, Netsmart, and Intuitive Surgical.</>,
                    <>Lead advisor on emerging artificial intelligence legislation and regulation.</>,
                    <>Conducted lobbying efforts to block legislation that would have hindered operations for an $8 billion technology client.</>,
                    <>Secured buy-in from 18 organizations for an out-of-state client entering the California market.</>
                ],
                images: []
            },
            {
                company: 'Vitu',
                timeframe: 'Summer 2022',
                role: 'Software Engineer Intern',
                achievements: [
                    <>Led a team of interns to integrate AI-powered text extraction into a nationwide car dealership software.</>,
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Stanford University',
                description: <>Bachelor of Science in Symbolic Systems, concentration in Mathematical Foundations</>,
            },
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

export { person, social, newsletter, home, about, blog, work };