// All IDS
import {FaArtstation, FaBrain, FaCode, FaMobile, FaProjectDiagram, FaVideo} from "react-icons/fa";

export const HERO_ID = "hero";
export const ABOUT_ID = "about";
export const SECTOR_ID = "sector";
export const TESTIMONIAL_ID = "testimonial";
export const GALLERY_ID = "gallery";
export const CONTACT_ID = "contactus";

const getId = (id) => `#${id}`

// Navigation
export const NAVIGATION = [
    {name: 'Home', href: getId(HERO_ID), current: false},
    {name: 'About', href: getId(ABOUT_ID), current: false},
    {name: 'Sectors', href: getId(SECTOR_ID), current: false},
    {name: 'Testimonial', href: getId(TESTIMONIAL_ID), current: false},
    {name: 'Gallery', href: getId(GALLERY_ID), current: false},
    {name: 'Contact', href: getId(CONTACT_ID), current: false}
]

// Hero Section Contents
export const HERO_TITLE_1 = "Adamjee Cantonment College"
export const HERO_TITLE_2 = "IT CLUB"
export const HERO_TEXT = "“ACC IT CLUB” is a Club to inspire and empower students of Adamjee Cantonment College to be involved in IT related tasks and knowledge sharing. "

// About Section Contents
export const ABOUT_HEADING = "About Us"
export const ABOUT_SUB_HEADING = "Some beautiful text for a small title"

export const ABOUT_CONTENT_HEADING_1 = "What We Do"
export const ABOUT_CONTENT_TEXT_1 = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

export const ABOUT_CONTENT_HEADING_2 = "What We Do"
export const ABOUT_CONTENT_TEXT_2 = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

// Sector Section Content

export const SECTOR_CONTENT_HEADING = "Sector"
export const SECTOR_WATERMARK = "SECTORS"
export const SECTOR_CONTENT_TEXT = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

export const SECTOR_LIST = [
    {
        id: 1,
        name: "Programming",
        icon: <FaCode/>
    },
    {
        id: 2,
        name: "Graphics Design",
        icon: <FaArtstation/>
    },
    {
        id: 3,
        name: "Video Edit",
        icon: <FaVideo/>
    },
    {
        id: 4,
        name: "Web & App",
        icon: <FaMobile/>
    },
    {
        id: 5,
        name: "Project Display",
        icon: <FaProjectDiagram/>
    },
    {
        id: 5,
        name: "Olympiad",
        icon: <FaBrain/>
    },
]

// Testimonial Section Content
export const TESTIMONIAL_CONTENT_HEADING = "Testimonial"
export const TESTIMONIAL_CONTENT_TEXT = "Sir said that our club is very skillful and talented, we waste no time on such activities that can harm ourselves, it is the most polite club he has ever seen. Proud of it"

export const TESTIMONIALS = [
    {
        name: "Shafkar Shishir, Lecturer ICT",
        text: "Sir said that our club is very skillful and talented, we waste no time on such activities that can harm ourselves, it is the most polite club he has ever seen. Proud of it",
        image: ""
    },
    {
        name: "Principal, Lecturer ICT",
        text: "Sir said that our club is very skillful and talented, we waste no time on such activities that can harm ourselves, it is the most polite club he has ever seen. Proud of it",
        image: ""
    },
]

export const TESTIMONIAL_LIST_TEXT = [
    {
        title: "Some Title ",
        text: "Sir said that our club is very skillful and talented, we waste no time on such activities that can harm ourselves, it is the most polite club he has ever seen. Proud of it",
    },
    {
        title: "Some Title ",
        text: "Sir said that our club is very skillful and talented, we waste no time on such activities that can harm ourselves, it is the most polite club he has ever seen. Proud of it",
    },
    {
        title: "Some Title ",
        text: "Sir said that our club is very skillful and talented, we waste no time on such activities that can harm ourselves, it is the most polite club he has ever seen. Proud of it",
    },
]


// Gallery Section Content


export const GALLERY_HEADER = "Gallery"
export const GALLERY_SUB_TEXT = "Welcome To Our Gallery"

export const SLIDES = [
    {
        title: "Machu Picchu",
        subtitle: "Peru",
        description: "Adventure is never far away",
        image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Chamonix",
        subtitle: "France",
        description: "Let your dreams come true",
        image: "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mimisa Rocks",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Four",
        subtitle: "Australia",
        description: "A piece of heaven",
        image: "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Five",
        subtitle: "Australia",
        description: "A piece of heaven",
        image: "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
];


// Contact Us Section

export const CONTACT_US_HEADER = "Contact Us"
export const CONTACT_US_FORM_HEADER = "Send Messages"
export const CONTACT_US_FORM_PARAGRAPH = "Send me a feedback about my website and projects, for any collaboration, feel free to reach out to me, I would be happy to get connected."


// Footer Us Section - ✓
export const FOOTER_HEADER = <>Adamjee Cantonment College <br/> IT CLUB</>
export const FOOTER_TEXT = "Our little motto"


export const CONTACTS = [
    "Phone Number: +12345566",
    "Mail: itc@acc.edu.bd",
    "Address: Dhaka Cantonment, Dhaka"
]