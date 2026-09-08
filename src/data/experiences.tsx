import React from "react"
import CIPContent from "./cip.mdx"
import CS198Content from "./cs198.mdx"

export type ExperienceType = {
    dates: string,
    role: React.ReactNode | string,
    org: React.ReactNode | string,
    moreInfo?: React.ReactNode,
    description?: React.ReactNode | string
} 

export const experiences: ExperienceType[] = [
    {
        dates: 'September 2025 - present',
        role: <a href="https://computing.mit.edu/cross-cutting/social-and-ethical-responsibilities-of-computing/serc-scholars-program/">SERC Scholar</a>,
        org: "MIT Schwarzman College of Computing",
        description: "Participated in a yearlong working group on art in the age of AI, through MIT's Social and Ethical Responsibilities of Computing (SERC) initiative.",
    },
    {
        dates: 'January 2026 - present',
        role: 'Member',
        org: <a href="https://aialignment.mit.edu/">MIT AI Alignment</a>,
        description: "MIT student group on AI safety and alignment.",
    },
    {
        dates: 'January 2026',
        role: 'Research resident',
        org: <a href="https://www.media.mit.edu/posts/research-at-scale-2026/">Research@Scale</a>,
        description: "1-month research residency in Shenzhen, China, focused on manufacturing and hardware prototyping.",
    },
    {
        dates: 'September 2024 - June 2025',
        role: <>Student co-lead, <a href="https://ambiguous-collaborators.github.io/">Ambiguous Collaboration Working Group</a></>,
        org: <a href="https://hai.stanford.edu/research/student-affinity-groups">Stanford HAI Student Affinity Groups</a>,
        description: "Co-led the Ambiguous Collaboration Working Group, a Stanford HAI student group interested in interaction design, audiovisual performance, and computational aesthetics.",
    },
    {
        dates: 'March 2024 - June 2025',
        role: 'Coordinator',
        org: <a href="https://www.linkedin.com/posts/foothill-collegeccc-and-stanford-have-teamed-ugcPost-7338712264230825985-Jq7L/">California Community Colleges x Stanford Digital Education</a>,
        description: "Invited panelist at the 2024 California Community Colleges Futures Summit, to speak on the development of CS 49, a hybrid course for California Community College students which adapts the Code in Place curriculum. Coordinating between Stanford and CCC faculty, developing course materials, and managing student success. ",
    },
    {
        dates: 'March 2020 - June 2025',
        org: <a href="https://codeinplace.stanford.edu/">Code in Place</a>,
        role: 'Course Admin, Director of Head TAs, Developer, and more...',
        description: "Code in Place is a free, human-centered offering of the first half of CS106A, Stanford's intro Python course, which has served around 30k students worldwide. Please 'See more', as I've done a lot of work for this course!",
        moreInfo: <CIPContent/>
    },
    {   dates: 'January - June 2024',
        role: 'Research Assistant',
        org: <a href="https://ethicsinsociety.stanford.edu/">Stanford McCoy Center for Ethics in Society</a>,
        description: 'Designed curriculum for a new interdisciplinary Stanford course on critical making with AI entitled "AI and Art: Ethics and Aesthetics in the Making" under professors Shane Denson, Camille Utterback, and Miguel Novelo',
    },
    {   
        dates: 'June 2022 - September 2023',
        role: 'Learning designer',
        org: <a href='https://www.9dots.org/'>9 Dots</a>,
        description: "Designed lesson plans for game-based learning and professional development resources for public school teachers at Title 1 elementary schools in LA County, serving 300+ teachers at 24+ partner schools, reaching 8,000+ students. Developed teacher training curriculum to support teachers in teaching CS without prior CS experience.",
    },
    {
        dates: '2020 - 2021',
        role: 'Section Leader',
        org: <a href='https://cs198.stanford.edu/cs198/'>Stanford Computer Science</a>,
        description: "Led Stanford students in weekly discussion sections for Stanford’s Programming Methodologies course; worked closely with faculty to ensure course accessibility for visually impaired students; wrote a tool to support student learning of image processing techniques.",
        moreInfo: <CS198Content/>
    },
    // {
    //     dates: 'March - June 2023',
    //     org: <a href='https://law.stanford.edu/education/only-at-sls/law-policy-lab/practicums-2022-2023/governance-and-regulation-of-emerging-technologies-809a/'>Policy Lab</a>,
    //     role: 'Contributor',
    //     description: "Authored 27 page report (available on request) on the impact of generative AI on education for Stanford Law School Policy Lab on Governance and Regulation of Emerging Technologies. The report will be synthesized with other reports to inform policy recommendations regarding generative AI.",
    // },
    {
        dates: 'June - September 2021',
        org: <a href='https://morphogen.io/'>Morphogen</a>,
        role: 'Machine Learning Intern',
        description: "Aided in upcoming redesign of Artbreeder, an in-browser GAN application, by producing machine learning pipeline for visualizing and summarizing latent space of trained image models",
    },
    {
        dates: 'January - March 2021',
        org: <a href='https://www.teus.media/'>Teus Media</a>,
        role: 'ML Research and Development',
        description: "Employed deep learning methods to build voice conversion / anonymization pipeline for protection of at-risk subjects in documentary films",
    },
    {
        dates: 'March - August 2021',
        org: <a href='https://rashaadnewsome.com/'>Rashaad Newsome Studio</a>,
        role: 'AI Research and Development',
        description: "Used text generation models in novel pipeline for poetry generation which incorporates human feedback, in collaboration with poets Dazié Grego and Alok Vaid-Menon",
    },
    {
        dates: 'June - August 2020',
        org: 'Knowhere News',
        role: 'Software Engineering Intern',
        description: "Built, trained, and tuned models to predict the intuitive newsworthiness of event clusters and tips, using non-text and text features extracted from event cluster / tip metadata; built web service to integrate newsworthiness models into pipeline and deployed both models into production to streamline content management system for more efficient, unbiased story selection; created responsible data visualizations for an editorial project on COVID-19 statistics",
    },
    {
        dates: 'November 2018 - June 2019',
        org: <a href="https://stanforddaily.com/">Stanford Daily</a>,
        role: 'Graphics Managing Editor',
        description: <p>Directed 10 graphic artists in producing three 36-page magazines for print publication: <a href='(https://issuu.com/stanforddailymagazine/docs/mag_4_issuu2'>Issue 4</a>, <a href='https://issuu.com/stanforddailymagazine/docs/mag_5_issuu'>Issue 5</a>, and <a href='https://drive.google.com/file/d/1uuyYQ8CWSB_WdbEP0ALFJ46pzHeepPBX/view?usp=sharing'>Issue 6</a>. Oversaw deadlines and printing process; coordinated communication between managing editors and staffers.</p>,
    },
]