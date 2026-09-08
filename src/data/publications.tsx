export type PublicationType= {
    title: React.ReactNode | string,
    authors: string[],
    conference: string,
    image?: React.ReactNode,
    url?: string,
    award?: string,
} 

export const publications = [
    {
        "title": "On the Importance of Tool Selection in the Creative Process: Figure Drawing as a Research Site",
        "authors": ["Miranda Li", "Ziv Epstein", "Cynthia Breazeal"],
        "conference": "CHI 2026 Herding Cats workshop",
        "url": "https://herding-cats-ws.github.io/2026/papers/p06.pdf"
    },
    {
        "title": "Fostering And Understanding Diverse Interpersonal Connections in a Massive Online CS1 Course",
        "authors": ["Miranda Li", "Ali Malik", "Chris Piech"],
        "conference": "SIGCSE TS 2025",
        "url": "connections_SIGCSE25.pdf"
    },
    {
        "title": "Assessing Political Bias using Crowdsourced Pairwise Comparisons",
        "authors": ["Miranda Li", "Tzu-Sheng Kuo", "Mcardle Hankin", "Andrew Ying", "Cathy Wang"],
        "conference": "HCOMP 2020 Work-in-Progress",
        "award": "Best Work-in-Progress Award",
        "url": "https://www.humancomputation.com/2020/assets/2020/wip_demos/HCOMP_2020_paper_80.pdf"
    }
]