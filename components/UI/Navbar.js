import {Disclosure, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {useEffect, useState, Fragment} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {HERO_ID, NAVIGATION as navigation} from "../../assets/data";
import Logo from "./Images";
import {ToTopButton} from "./Button";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [navBg, setNavBg] = useState(false);
    const [scrollTopBtn, setScrollTopBtn] = useState("invisible");
    useEffect(()=>{
        document.onscroll = function (){
            setNavBg(document.scrollingElement.scrollTop > 50)
            setScrollTopBtn(document.scrollingElement.scrollTop > 300 ? "visible": "invisible")
        }
    }, [])
    return (
        <>
            <ToTopButton className={scrollTopBtn} href={"#"+HERO_ID}/>
            <Disclosure as="nav" className={classNames("transition-all bg-bgDark fixed w-screen z-50", navBg ? "lg:bg-bgDark": "lg:bg-transparent")}>
                {({open}) => (
                    <>
                        <div className="container mx-auto ">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center lg:justify-between justify-center md:items-stretch ">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Logo/> <span className={classNames("ml-2 font-medium text-clrHeading", !navBg ? 'lg:text-white' : 'lg:text-clrHeading')}>ACCITC</span>
                                    </div>
                                    <div className="hidden md:block sm:ml-6">
                                            <div className="flex space-x-4">
                                                <AnimatePresence>
                                                {navigation.map((item, key) => (
                                                    <motion.a
                                                        initial={{opacity: 0, y: 10}}
                                                        whileInView={{opacity: 1, y: 0}}
                                                        transition={{delay: key * 0.2}}
                                                        viewport={{ once: true }}
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            navBg ? "lg:text-gray-800 hover:bg-blue-500 hover:text-white" : "lg:text-gray-300 hover:bg-white hover:text-sky-500",
                                                            '',
                                                            'px-3 py-2 rounded-md text-lg font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </motion.a>
                                                ))}
                                                </AnimatePresence>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <Transition enterFrom={"transform -translate-y-20 duration-500"} leaveFrom={"opacity-1"} leaveTo={"opacity-0"} show={open} as={Fragment}>
                            <Disclosure.Panel className="md:hidden transition-all">
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                                                    'block px-3 py-2 rounded-md text-md font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>

                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>
    )
}