// All IDS
import {FaArtstation, FaBrain, FaCode, FaMobile, FaProjectDiagram, FaVideo} from "react-icons/fa";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";
import Image5 from "../images/image5.jpg";
import Image6 from "../images/image6.jpg";
import Image7 from "../images/image7.jpg";
import ShishirSir from "../images/shishirsir.jpg";
import Turjoe from "../images/turjoe.jpg";

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
export const ABOUT_SUB_HEADING = "Learn About Adamjee Cantonment College IT Club"

export const ABOUT_CONTENT_HEADING_1 = "Who Are We?"
export const ABOUT_CONTENT_TEXT_1 = "\"ACC IT CLUB\" is a student body that inspire and empower students of Adamjee Cantonment College " +
    "to be involved in IT related tasks and knowledge sharing. This also applies to expand their knowledge about Information and Technology. " +
    "This club will also have been organizing many IT related events in Adamjee Cantonment College and has participated to " +
    "different IT related programs to other institutions for expressing these motives more clearly."

export const ABOUT_CONTENT_HEADING_2 = " Accomplishments and sectors"
export const ABOUT_CONTENT_TEXT_2 = "We have organized more than 10 Fests and many inter college and intra college contests, " +
    "including gaming, programming and many more. Our club has active members and we have 12+ Highly Talented Executives " +
    "who runs this club with excellence"


export const RoadMapList = [
    {
        title: "The Beginning",
        id: 1,
        year: 2015,
        text: "The journey of this valorous club began with the help of our senior teachers, " + "and honourable principal. From that day, ACCIT Club has showed their excellence in many different sectors"
    }, {
        title: "1st IT Carnival",
        id: 2,
        year: 2016,
        text: "We launched first IT Carnival, and we had many competition segments, including, Gaming, IT Quiz, Programming, Project Display, IT Olympiads and many more, A lots of participants were present"
    }, {
        title: "2nd Intra Gaming Tournament",
        id: 3,
        year: 2018,
        text: "Gaming Sector is one of the most hyped sector of our club and we were able to launch a very competitive and fun gaming tournament, a lot of cyber athletes joined this tournament. "
    },
    {
        title: "Inter Cant Techno Frenzy",
        id: 4,
        year: 2019,
        text: "We hosted a Tech Fest for the Cantonment School and Colleges, despite being a fest for a small group of people, we were able to get participants more than we expected, and we were able to host it successfully"
    },
]

// Sector Section Content

export const SECTOR_CONTENT_HEADING = "Sector"
export const SECTOR_WATERMARK = "SECTORS"
export const SECTOR_CONTENT_TEXT = "Our club has different working sections, where our ultimate goal is to find out " +
    "talents based on these particular sectors. We divide our workflow based on these sections, as different students might have " +
    "different field of choice, after dividing the workflow in various sectors, we try to arrange sessions, workshops and contests based on these " +
    "sectors."

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
export const TESTIMONIAL_CONTENT_TEXT = "ACC IT Club is one of the most active clubs of Adamjee Cantonment College. We work our best for the betterment of students and help them learn more about tech"

export const TESTIMONIALS = [
    {
        name: "Shafkar Shishir",
        designation: "Lecturer, ICT",
        text: "Information Tecnology is the vital part of current world, we cannot survive without thinking of it. ACC IT Club is working to encourage youngsters to learn more about technology and use it for their betterment. I am very lucky to be the moderator of this club, students working for these club are very passionate.",
        image: ShishirSir
    },
    {
        name: "Shahriar Mahmood",
        designation: "Founder ACCITC",
        text: "Information Technology is here to stay for a long time. Also shaping the foreseeable future. Clubs like ACC IT Club encourages young generation to tap into the knowledge and experience that was otherwise never possible to be motivated to achieve in this age. It has helped me in my personal life and wish it will benefit my future torch bearers as well.",
        image: Turjoe
    },
]

export const TESTIMONIAL_LIST_TEXT = [
    {
        title: "Friendly and warm environment",
        text: "We are friendly to everyone and we provide a beautiful environment for the students who want to learn more about technology and improve themselves",
    },
    {
        title: "Betterment in both career and student life",
        text: "We try our best to teach some useful technological skill so that a student can do better in both career and his/her student life.",
    },
    {
        title: "Teach and learn",
        text: "We encourage students who are skilled in a particular field to teach other students who might get benefited from that. ",
    },
]


// Gallery Section Content


export const GALLERY_HEADER = "Gallery"
export const GALLERY_SUB_TEXT = "Welcome To Our Gallery"

export const SLIDES = [
    {
        title: "",
        image: Image1.src
    },
    {
        title: "",
        description: "",
        image: Image2.src
    },
    {
        title: "",
        description: "",
        image: Image3.src
    },
    {
        title: "",
        description: "",
        image: Image4.src
    },
    {
        title: "",
        description: "",
        image: Image5.src
    },
    {
        title: "",
        description: "",
        image: Image6.src
    },
    {
        title: "",
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
export const FOOTER_TEXT = "Excel your IT Skills with us"


export const CONTACTS = [
    "Phone Number: +12345566",
    "Mail: itc@acc.edu.bd",
    "Address: Adamjee Cantonment College, Dhaka Cantonment, Dhaka"
]