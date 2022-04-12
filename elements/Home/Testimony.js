import {Column, Content, FlexColumn, FlexRow, GridResponsive, Section} from "../../components/UI/Containers";
import {NextImage} from "../../components/UI/Images";
import {IconHeading, Paragraph, ResponsiveTextLeft, Text} from "../../components/UI/Typography";
import {FaCheckCircle, FaQuoteLeft, FaQuoteRight, FaUserFriends} from "react-icons/fa";
import {
    TESTIMONIAL_CONTENT_HEADING,
    TESTIMONIAL_CONTENT_TEXT,
    TESTIMONIAL_ID,
    TESTIMONIAL_LIST_TEXT,
    TESTIMONIALS
} from "../../assets/data";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";

export default function Testimony() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        let timeOut = setTimeout(() => {
            if (currentSlide < TESTIMONIALS.length - 1) {
                setCurrentSlide(currentSlide + 1);
            } else {
                setCurrentSlide(0);
            }
        }, 5000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [currentSlide])

    return (
        <Section id={TESTIMONIAL_ID} className={"bg-bgDark -mt-2"}>
            <Content className={"container mx-auto py-16"}>
                <ResponsiveTextLeft className={"lg:text-left text-center"}>
                    <IconHeading className={"md:justify-start justify-center"} prefix={<FaUserFriends/>}>
                        {TESTIMONIAL_CONTENT_HEADING}
                    </IconHeading>
                </ResponsiveTextLeft>
                <GridResponsive className={"lg:grid-cols-2 md:grid-cols-1 mt-32 gap-32"}>
                    <motion.div initial={{opacity: 0, x: -100}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5,}}
                                viewport={{once: true}}
                    >
                        <Content className={"flex flex-row overflow-hidden"}>
                            <AnimatePresence exitBeforeEnter>
                                {TESTIMONIALS.map((item, key) => (
                                    key === currentSlide &&
                                    <motion.div
                                        initial={{opacity: 0, x: -100, scale: 0.9}}
                                        animate={{opacity: 1, x: 0, scale: 1}}
                                        exit={{opacity: 0, x: 100, scale: 0.9}}
                                        transition={{duration: 0.35}}
                                        key={key} className={"flex-full"}>
                                        <Content className={"bg-bgLight rounded-3xl w-[95%] mx-auto"}>
                                            <Content className={"sm:py-10 p-4 sm:px-8"}>
                                                <FlexRow className={"mb-10"}>
                                                    <Content className={"relative mr-4"}>
                                                        <Content
                                                            className={"rounded-full absolute h-full w-full -top-4 -left-4 bg-opacity-50 bg-emerald-400"}>

                                                        </Content>
                                                        <Content
                                                            className={"h-24 w-24  overflow-hidden bg-gray-200 rounded-full"}>
                                                            <NextImage src={item.image}/>
                                                        </Content>
                                                    </Content>
                                                    <Content>
                                                        <p className={"text-left text-gray-900 font-medium  text-lg mt-2"}>{item.name}</p>
                                                        <p className={"text-left text-gray-500 font-medium  text-md mt-1"}>{item.designation}</p>
                                                    </Content>
                                                </FlexRow>
                                                <span className={"text-6xl text-yellow-400"}>
                                                    <FaQuoteLeft/>
                                                </span>
                                                <Paragraph
                                                    className={"lg:text-lg md:text-lg text-md lg:my-10 md:my-10 sm:my-10 my-8"}>
                                                    {item.text}
                                                </Paragraph>
                                                <span
                                                    className={"text-6xl flex flex-row-reverse text-right text-yellow-400"}>
                                                    <FaQuoteRight/>
                                                </span>
                                            </Content>

                                        </Content>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </Content>
                    </motion.div>
                    <Column className={"flex flex-col"}>
                        <motion.div initial={{opacity: 0, y: 10}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5,}}
                                    viewport={{once: true}}>
                            <Text
                                className={"xl:mt-0 lg:mt-0 md:mt-0 mt-10"}>
                                {
                                    TESTIMONIAL_CONTENT_TEXT
                                }
                            </Text>
                        </motion.div>

                        <FlexColumn className={"justify-between lg:mt-5 md:mt-6 mt-5 flex-1"}>
                            {
                                TESTIMONIAL_LIST_TEXT.map((each, key) => (
                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, delay: key * 0.2}}
                                        viewport={{once: true}}
                                        key={key} className={"sm:max-w-xl lg:mx-0 sm:mx-auto lg:mt-10 mt-10"}>
                                        <h3 className={"flex items-center text-2xl font-semibold text-clrHeading"}>
                                        <span
                                            className={"h-8 w-8 rounded-full grid place-items-center bg-emerald-500 text-white mr-3"}>
                                            <FaCheckCircle/>
                                        </span>
                                            {each.title}
                                        </h3>
                                        <Paragraph>
                                            {each.text}
                                        </Paragraph>
                                    </motion.div>
                                ))
                            }
                        </FlexColumn>
                    </Column>
                </GridResponsive>
            </Content>
        </Section>
    )
}