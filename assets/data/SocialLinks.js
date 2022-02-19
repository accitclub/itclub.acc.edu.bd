import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGoogle} from "react-icons/fa";
export const EMAIL = "itclub@acc.edu.bd"
export const SocialLinksJSXList = [

    {
        "name": "Linkedin",
        "icon": <FaLinkedin/>,
        "link": "",
        "className": "text-purple-500",
    },
    {
        "name": "Google",
        "icon": <FaGoogle/>,
        "link": "mailto:"+EMAIL,
        "className": "text-yellow-400",
    },
    {
        "name": "Youtube",
        "icon": <FaYoutube/>,
        "link": "",
        "className": "text-red-600",
    },
    {
        "name": "Facebook",
        "icon": <FaFacebook/>,
        "link": "",
        "className": "text-blue-500"
    },
    {
        "name": "Instagram",
        "icon": <FaInstagram/>,
        "link": "",
        "className": "text-pink-600"
    },

]