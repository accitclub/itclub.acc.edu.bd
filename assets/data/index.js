// All IDS
import {FaArtstation, FaBrain, FaCode, FaMobile, FaProjectDiagram, FaVideo} from "react-icons/fa";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";
import Image5 from "../images/image5.jpg";
import Image6 from "../images/image6.jpg";
import Image7 from "../images/image7.jpg";

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
export const ABOUT_CONTENT_TEXT_1 = "\"ACC IT CLUB\" is a student body that inspire and empower students of Adamjee Cantonment College to be involved in IT related tasks and knowledge sharing. This also applies to expand their knowledge about Information and Technology. This club will also have been organizing many IT related events in Adamjee Cantonment College and has participated to different IT related programs to other institutions for expressing these motives more clearly and also imparting inspiration and knowledge along with potential of IT."

export const ABOUT_CONTENT_HEADING_2 = "What We Do"
export const ABOUT_CONTENT_TEXT_2 = "This club will also organize many IT related events in Adamjee Cantonment College for expressing these motives more clearly and also imparting inspiration and knowledge along with potential of IT. It will also make use of the potential Adamjee Cantonment College students have in IT related fields."

// Sector Section Content

export const SECTOR_CONTENT_HEADING = "Sector"
export const SECTOR_WATERMARK = "SECTORS"
export const SECTOR_CONTENT_TEXT = "This club will also organize many IT related events in Adamjee Cantonment College for expressing these motives more clearly and also imparting inspiration and knowledge along with potential of IT. It will also make use of the potential Adamjee Cantonment College students have in IT related fields."

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
        title: "One",
        image: Image1.src
    },
    {
        title: "Two",
        description: "",
        image: Image2.src
    },
    {
        title: "Three",
        description: "",
        image: Image3.src
    },
    {
        title: "Four",
        description: "",
        image: Image4.src
    },
    {
        title: "Five",
        description: "",
        image: Image5.src
    },
    {
        title: "Five",
        description: "",
        image: Image6.src
    },
    {
        title: "Five",
        description: "",
        image: Image7.src
    },
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