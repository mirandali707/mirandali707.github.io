// import React from 'react'
import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import portalGIF from "../images/portal.gif"
import tinyddrGIF from "../images/tinyddr.gif"

export type ProjectType = {
    title: React.ReactNode | string,
    description: React.ReactNode | string,
    image?: React.ReactNode,
    url?: string,
    award?: string,
} 

export const projects = [
    {
        title: "Labububot",
        description: "Labububot (they/them) is a deliberately monstrous, 12-headed spherical robot which challenges the norms of social robot design.",
        image: <StaticImage
            src="../images/labububot.jpg"
            alt="A furry, spherical Labubu robot."
            placeholder="blurred"
            layout="constrained"
        />,
        url: "https://www.media.mit.edu/projects/labububot/overview/",
        award: "ICSR 2026 Grand Challenge Finalist",
    },
    {
        title: "Tiny DDR",
        description: "World's tiniest Dance Dance Revolution machine.",
        image: <img src={tinyddrGIF} alt="A tiny Dance Dance Revolution machine." />,
        url: "https://fab.cba.mit.edu/classes/863.25/people/MirandaLi/pages/tiny_ddr.html",
    },
    {
        title: "A PORTAL (Arbitrary PantOgRaph of Time And Light)",
        description: "2 draw-wire encoders make a flexible, cyborg pantograph for encoding physical gestures digitally.",
        image: <img src={portalGIF} alt="A physical drawing of a heart is encoded into a web UI." />,
        url: "https://docs.google.com/presentation/d/1z46_Pv9Ch0bHi4bm5otlHNW4-C8iDeEUrpPJ8zOh6mI/edit?slide=id.g3913e3ab1a6_0_69#slide=id.g3913e3ab1a6_0_69",
    },
    {
        title: "Bug or artistic feature? Scaling assessment and feedback of creative student-authored graphics programs",
        description: "Final project for Stanford CS229: Machine Learning (fall 2023), taught by Andrew Ng",
        url: "CS_229_Final_Report.pdf",
        award: "Best Project Award"
    },
    {
        title: <a href='https://mirandali707.github.io/nonsense_newspapers/'>Nonsense Newspapers</a>,
        description: "Trained a GAN on historical newspaper front pages and authored digital + physical zine.",
        url: "https://mirandali707.github.io/nonsense_newspapers/",
        image: <StaticImage
            src="../images/5_gen_96.jpg"
            alt="An AI-generated newspaper, vaguely spooky looking, with columns and headlines that are all nonsense."
            placeholder="blurred"
            layout="constrained"
        />
    },
]