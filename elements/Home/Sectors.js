import {Container, Content, Section} from "../../components/UI/Containers";
import {Wave} from "../../components/UI/Images";
import {Heading, HorizontalWatermark, P, ResponsiveTextLeft} from "../../components/UI/Typography";
import {
    SECTOR_CONTENT_HEADING,
    SECTOR_CONTENT_TEXT,
    SECTOR_ID,
    SECTOR_LIST,
    SECTOR_WATERMARK,
    TESTIMONIAL_ID
} from "../../assets/data";
import {AnchorButton} from "../../components/UI/Button";
import {motion} from "framer-motion";
import Image from "next/image";

export default function Sectors() {
    return (
        <Section id={SECTOR_ID}>
            <Wave className={"text-bgLight bg-lightYellow -mt-1"}/>
            <Content className={"overflow-hidden bg-lightYellow"}>
                <Container>
                    <Content className={"grid lg:grid-cols-2 lg:gap-20"}>
                        <Content className={"flex-[4] col-span-1"}>
                            <Content>
                                <motion.div className={"relative"}
                                            initial={{opacity: 0, x: -100}}
                                            whileInView={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5,}}
                                            viewport={{once: true}}
                                >
                                    <HorizontalWatermark className={"left-0"}>
                                        {SECTOR_WATERMARK}
                                    </HorizontalWatermark>
                                    <ResponsiveTextLeft className={"lg:px-4"}>
                                        <Heading>
                                            {SECTOR_CONTENT_HEADING}
                                        </Heading>
                                        <P className={"xl:mt-20 text-gray-700 lg:mt-20 md:mt-20 mt-10 ml-0 lg:max-w-xl font-medium"}>
                                            {SECTOR_CONTENT_TEXT}
                                        </P>
                                        <AnchorButton href={"#" + TESTIMONIAL_ID}
                                                      className={"bg-black md:mx-0 mx-auto text-white rounded-none w-56 mt-10 hover:bg-white hover:text-black transition-all duration-300"}>
                                            Learn More
                                        </AnchorButton>
                                    </ResponsiveTextLeft>
                                </motion.div>
                            </Content>
                        </Content>
                        <Content className={"h-full lg:mt-0 mt-16 col-span-1"}>
                            <motion.div className={"grid grid-cols-2 gap-20"}>
                                {SECTOR_LIST.map((each, key) => (
                                    <motion.div initial={{opacity: 0, y: 10, borderColor: "#fff"}}
                                                whileInView={{opacity: 1, y: 0, borderColor: ""}}
                                                key={key}
                                                transition={{delay: key * 0.2}}
                                                viewport={{once: true}}
                                    >
                                        <Content className={"text-xl"}>
                                            <Content className={"h-16 w-16 relative"}>
                                                <Image src={each.icon} alt={each.name}/>
                                            </Content>
                                            <P className={"xl:text-xl text-gray-900 font-semibold text-white lg:text-lg md:text-base sm:text-xl text-sm"}>{each.name}</P>
                                            <p className={"text-gray-600 text-base mt-4"}>
                                                {each.text}
                                            </p>
                                        </Content>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </Content>
                    </Content>
                </Container>
            </Content>
            <Wave className={"text-lightYellow bg-bgDark"}/>
        </Section>
    )
}