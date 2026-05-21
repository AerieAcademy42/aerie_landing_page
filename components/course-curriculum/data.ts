
interface WeekContent {
    id: string;
    week: number;
    title: string;
    topics: string[]
    img?: string;
    videoUrl?: string;
}

export interface CourseCurriculumProps {
    weeks: WeekContent[];
}

export const CoursesData = [
    {
        id: '1',
        week: 1,
        title: 'Basics of Rhino',
        topics: [
            'Introduction to Computational Design & Rhino Workflow',
            'Understanding Rhino Interface, Navigation & Modelling Tools',
            'Working with NURBS Geometry, Surfaces & Continuity',
            '2D Drafting to 3D Form Creation Techniques',
            'Rendering, Visualization & Live Design Exercises',
        ],
        videoUrl: "",
    },

    {
        id: '2',
        week: 2,
        title: 'Fundamentals of Grasshopper',
        topics: [
            'Introduction to Grasshopper Interface & Data Flow',
            'Working with Components, Wires, Parameters & Sliders',
            'Lists, Series, Range & Mathematical Operations',
            'Generating Geometry using Point → Curve → Surface Logic',
            'Dispatch, Cull Patterns & Basic Transformations',
        ],
    },

    {
        id: '3',
        week: 3,
        title: 'Data Trees – The Core of Grasshopper',
        topics: [
            'Understanding Data Trees & Tree Structures',
            'Working with Graft, Flatten, Simplify & Path Mapper',
            'Visualising and Managing Complex Geometry Data',
            'Curve Parameters & Surface Evaluation in GH',
            'Geometry Transformations using Move, Rotate & Mirror',
        ],
        videoUrl: "/course-curiculum/data-tree.mp4",

    },

    {
        id: '4',
        week: 4,
        title: 'Attractor Logic & Domains',
        topics: [
            'Introduction to Domains & Remap Numbers',
            'Using Attractor Points for Parametric Control',
            'Controlling Relationships Between Parameters',
            'Creating Responsive Geometry using Attractor Logic',
            'Live Online Review of Weeks 1–4 Workflow',
        ],
    },

    {
        id: '5',
        week: 5,
        title: 'Panelisation Systems & Variation',
        topics: [
            'UV Surface Division & Parametric Panelisation',
            'Working with Triangular, Diamond & Hexagonal Panels',
            'Controlling Panel Density & Surface Distribution',
            'Attractor-Based Aperture & Panel Depth Variations',
            'Solar Shading Logic & Multi-Attractor Systems',
        ],
    },

    {
        id: '6',
        week: 6,
        title: 'Optimization and Generative Design',
        topics: [
            'Introduction to Optimization in Computational Design',
            'Generative Design Workflow using Galapagos',
            'Exploring Form Variations through Evolutionary Logic',
            'Performance-Based Design Iterations',
            'Creating Optimized Architectural Solutions',
        ],
    },

    {
        id: '7',
        week: 7,
        title: 'Architectural Structure Designs',
        topics: [
            'Translating GH Geometry into Buildable Structures',
            'Structural Grids, Floor Plates & Core Placement',
            'Parametric Openings & Responsive Facade Concepts',
            'Designing Orientation-Based Architectural Systems',
            'Integrating Structure with Computational Workflow',
        ],
    },

    {
        id: '8',
        week: 8,
        title: 'Mid-Course Online Review',
        topics: [
            'Presentation of Student Computational Models',
            'Workflow Review & Peer Feedback Sessions',
            'Refining Grasshopper Definitions & Logic',
            'Discussion on Design Process & Optimization',
            'Project Direction & Troubleshooting Guidance',
        ],
    },

    {
        id: '9',
        week: 9,
        title: 'Parametric Massing from Site Constraints',
        topics: [
            'Generating Massing using Site Constraints',
            'Using FAR, Solar Access & View Corridors',
            'Creating Multiple Massing Options in Grasshopper',
            'Comparing Design Variations using Sliders',
            'Developing Responsive Urban Massing Systems',
        ],
        videoUrl: "parametric.mp4",
    },

    {
        id: '10',
        week: 10,
        title: 'Facade System Design for Your Building',
        topics: [
            'Applying Parametric Facade Systems to Buildings',
            'Facade Aperture Control based on Orientation',
            'Integrating Interior Program with Facade Logic',
            'Facade-to-Massing Relationship Development',
            'Material Assignment & Live Rendering Workflow',
        ],
    },

    {
        id: '11',
        week: 11,
        title: 'Rendering, Visualisation & Documentation',
        topics: [
            'Rendering Workflow using Enscape / D5 Render',
            'Creating Presentation-Ready Visualisations',
            'Extracting Plans & Sections from GH Models',
            'Rhino Make2D Documentation Workflow',
            'Exporting Drawings & Layouts for Presentation',
        ],
    },

    {
        id: '12',
        week: 12,
        title: 'Final Project Presentation',
        topics: [
            'Final Computational Design Project Submission',
            'Presentation of Drawings, Models & Renderings',
            'One-on-One Instructor Review Sessions',
            'Project Troubleshooting & Final Refinements',
            'Portfolio-Ready Documentation & Presentation',
        ],
    },
];