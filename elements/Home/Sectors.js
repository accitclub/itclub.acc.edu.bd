import {Center, Container, Content, Section} from "../../components/UI/Containers";
import {Wave} from "../../components/UI/Images";
import {CenterText, Heading, HorizontalWatermark, P, ResponsiveTextLeft, Text} from "../../components/UI/Typography";
import {
    SECTOR_CONTENT_HEADING,
    SECTOR_CONTENT_TEXT,
    SECTOR_ID,
    SECTOR_LIST,
    SECTOR_WATERMARK,
    TESTIMONIAL_ID
} from "../../assets/data";
import classNames from "classnames";
import {AnchorButton} from "../../components/UI/Button";
import {motion} from "framer-motion";

export default function Sectors() {
    return (
        <Section id={SECTOR_ID}>
            <Content className={"overflow-hidden bg-white"}>
                <Container>
                    <Content className={"grid lg:grid-cols-2"}>
                        <Center className={"flex-[4]"}>
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
                                    <ResponsiveTextLeft className={"px-4"}>
                                        <Heading>
                                            {SECTOR_CONTENT_HEADING}
                                        </Heading>
                                        <Text className={"xl:mt-20 lg:mt-20 md:mt-20 mt-10"}>
                                            {SECTOR_CONTENT_TEXT}
                                        </Text>
                                        <AnchorButton href={"#" + TESTIMONIAL_ID}
                                                      className={"lg:flex hidden w-56 xl:mt-20 bg-emerald-500 lg:mt-20 md:mt-20 text-white mt-10 md:mr-auto md:mx-0 mx-auto"}>
                                            Learn More
                                        </AnchorButton>
                                    </ResponsiveTextLeft>
                                </motion.div>
                            </Content>
                        </Center>
                        <Content className={"h-full lg:ml-auto lg:mt-0 mt-16 "}>
                            <motion.div
                                className={"grid lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 sm:gap-x-8 gap-x-4 gap-y-8 md:justify-items-end justify-items-center"}>
                                {SECTOR_LIST.map((each, key) => (
                                    <motion.div initial={{opacity: 0, y: 10, borderColor: "#fff"}}
                                                whileInView={{opacity: 1, y: 0, borderColor: ""}}
                                                key={key}
                                                transition={{delay: key * 0.2}}
                                                viewport={{once: true}}
                                                className={classNames("border-8 rounded-full",
                                                    key % 3 === 0 ? "border-emerald-100" : key % 3 === 1 ? "border-indigo-100" : "border-orange-100",
                                                    "grid place-items-center xl:h-60 xl:w-60 lg:h-56 lg:w-56 md:h-52 ",
                                                    "md:w-52 sm:h-48 sm:w-48 xs:h-40 xs:w-40 h-40 w-40 md:m-3 mx-auto")}>
                                        <Content className={classNames("w-full h-full grid place-items-center",
                                            "border-4 rounded-full border-indigo-500",
                                            key % 3 === 0 ? "border-emerald-400" : key % 3 === 1 ? "border-indigo-400" : "border-orange-400"
                                        )}>
                                            <Content
                                                className={classNames("w-full h-full grid place-items-center relative",
                                                    "border-8 rounded-full",
                                                    key % 3 === 0 ? "border-emerald-100" : key % 3 === 1 ? "border-indigo-100" : "border-orange-100",
                                                )}>
                                                <CenterText className={"text-xl"}>
                                                    <Center
                                                        className={classNames("xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl", key % 3 === 0 ? "text-emerald-400" : key % 3 === 1 ? "text-blue-400" : "text-yellow-300")}>
                                                        {each.icon}
                                                    </Center>
                                                    <P className={"xl:text-xl text-gray-600 font-semibold text-white lg:text-lg md:text-base sm:text-xl text-sm"}>{each.name}</P>
                                                </CenterText>
                                                <span
                                                    className={"absolute px-4 w-20 py-4 rounded-full bg-white -bottom-6"}/>
                                            </Content>
                                        </Content>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </Content>
                    </Content>
                </Container>
            </Content>
            <Wave className={"text-white bg-bgDark"}/>
        </Section>
    )
}