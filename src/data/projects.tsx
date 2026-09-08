// import React from 'react'
import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import portalGIF from "../images/portal.gif"
import tinyddrGIF from "../images/tinyddr.gif"

export type CustomLink = {
    text: string,
    url: string
}

export type ProjectType = {
    title: React.ReactNode | string,
    description: React.ReactNode | string,
    image?: React.ReactNode,
    links?: CustomLink[],
    award?: string,
} 

export const projects = [
    {
        title: "Labububot",
        description: "Labububot (they/them) is a monstrous, modestly Internet-famous 12-headed spherical dodecahedron robot which challenges the norms of social robot design. (with Jake Read, Dimitar Dimitrov)",
        image: <StaticImage
            src="../images/labububot.jpg"
            alt="A furry, spherical Labubu robot."
            placeholder="blurred"
            layout="constrained"
        />,
        links: [
            {text: "overview", url: "https://www.media.mit.edu/projects/labububot/overview/"},
            {text: "report", url: "https://github.com/mirandali707/labububot/blob/main/Labububot_ICSR_GrandChallenge.pdf"},
            {text: "video", url: "https://www.youtube.com/watch?v=Ve6ZYrgxqZw"},
            {text: "repo", url: "https://github.com/mirandali707/labububot"},
            {text: "DesignBoom", url: "https://www.designboom.com/technology/meet-labububot-mit-rolling-franken-robot-twelve-labubu-heads/"},
            {text: "The Verge", url: "https://www.theverge.com/tech/926875/mit-media-lab-labububot-robot-labubu"},
            // {text: "ICSR", url: "https://icsr2026.uk/competition-finalists/"}
        ],
        award: "ICSR 2026 Grand Challenge Finalist",
    },
    {
        title: "Tiny DDR",
        description: "World's tiniest Dance Dance Revolution machine.",
        image: <img src={tinyddrGIF} alt="A tiny Dance Dance Revolution machine." />,
        links: [
            {text: "overview", url: "https://fab.cba.mit.edu/classes/863.25/people/MirandaLi/pages/tiny_ddr.html"},
            {text: "pcb prototype", url: "https://fab.cba.mit.edu/classes/863.25/people/MirandaLi/pages/week6.html"}
        ]
    },
    {
        title: "A PORTAL (Arbitrary PantOgRaph of Time And Light)",
        description: "2 draw-wire encoders make a flexible, cyborg pantograph for encoding physical gestures digitally.",
        image: <img src={portalGIF} alt="A physical drawing of a heart is encoded into a web UI." />,
        links: [
            {text: "overview", url: "/portal"},
            {text: "presentation", url: "https://docs.google.com/presentation/d/1z46_Pv9Ch0bHi4bm5otlHNW4-C8iDeEUrpPJ8zOh6mI/edit?usp=sharing"},
            {text: "making of, part 1", url: "https://fab.cba.mit.edu/classes/863.25/people/MirandaLi/pages/week12.html"},
            {text: "making of, part 2", url: "https://fab.cba.mit.edu/classes/863.25/people/MirandaLi/pages/week13.html"}
        ],
    },
    // {
    //     title: "Bug or artistic feature? Scaling assessment and feedback of creative student-authored graphics programs",
    //     description: "Final project for Stanford CS229: Machine Learning (fall 2023), taught by Andrew Ng",
    //     links: [
    //         {text: "report", url: "CS_229_Final_Report.pdf"}
    //     ],
    //     award: "Best Project Award"
    // },
    {
        title: "Nonsense Newspapers",
        description: "Trained a GAN on historical newspaper front pages and authored digital + physical zine.",
        links: [
            {text: "overview", url: "https://mirandali707.github.io/nonsense_newspapers/"},
            {text: "report", url: "https://mirandali707.github.io/nonsense_newspapers/CS230_Final_Report.pdf"},
            {text: "digital zine", url: "https://mirandali707.github.io/nonsense_newspapers/zine.html"}
        ],
        image: <StaticImage
            src="../images/5_gen_96.jpg"
            alt="An AI-generated newspaper, vaguely spooky looking, with columns and headlines that are all nonsense."
            placeholder="blurred"
            layout="constrained"
        />
    },
]