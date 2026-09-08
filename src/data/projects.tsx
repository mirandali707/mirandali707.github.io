import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export type ProjectType = {
    title: React.ReactNode | string,
    image?: React.ReactNode,
    url?: string,
    award?: string,
} 

export const projects = [
    {
        title: "Labububot",
        image: <StaticImage
            src="../images/art/bunny_1.jpeg"
            alt="A hanging painted bunny in a grove."
            placeholder="blurred"
            layout="constrained"
        />,
        url: "https://www.media.mit.edu/projects/labububot/overview/",
        award: "ICSR 2026 Grand Challenge Finalist",
    },
    {
        title: "Bug or artistic feature? Scaling assessment and feedback of creative student-authored graphics programs",
        url: "CS_229_Final_Report.pdf",
        award: "CS229: Machine Learning (fall 2023) Best Project Award"
    },
]