export interface Mentor {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
    company?: string;
}

export const mentorsData: Mentor[] = [
    {
        id: 1,
        name: " Ar. Parul Sharma",
        role: "IIT Kharagpur",
        image: "/mentors/mentor1.png",
        description:
            "An award-winning computational designer, specializes in generative design, algorithmic processes, and advanced fabrication, with global recognition.",
        company: "AECOM",
    },
    {
        id: 2,
        name: " Ar. Naitik Sharma",
        role: "Computational Designer",
        image: "/mentors/mentor2.png",
        description:
            "Specialist in parametric design and computational geometry, bringing innovative approaches to complex design challenges.",
    },
    {
        id: 3,
        name: "Bharat",
        role: " GATE All India Rank 1",
        image: "/mentors/mentor3.jpeg",
        description:
            "Expert in algorithmic design systems and digital fabrication, with extensive experience in large-scale projects.",
    },
    {
        id: 4,
        name: "Ar Riya Varshney",
        role: "Manit Bhopal",
        image: "/mentors/mentor4.jpeg",
        description:
            "Pioneers design technology innovation with a focus on practical applications and sustainable solutions.",
    },
    {
        id: 5,
        name: "Sidhant Asati",
        role: "IIT Kharagpur",
        image: "/mentors/mentor5.jpeg",
        description:
            "Leads architectural design strategies combining technology, sustainability, and user-centered approaches.",
    },
    {
        id: 6,
        name: "Ar Ruchika Sharma",
        role: "CEPT",
        image: "/mentors/mentor6.jpeg",
        description:
            "Focused on bridging design and product strategy, creating solutions that impact user experiences globally.",
    },
    {
        id: 7,
        name: "Ar Kanishk Sharma",
        role: "IIT Kharagpur",
        image: "/mentors/mentor7.jpeg",
        description:
            "Focused on bridging design and product strategy, creating solutions that impact user experiences globally.",
    },
];
