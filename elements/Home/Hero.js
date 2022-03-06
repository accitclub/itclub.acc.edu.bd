import HeroImage from "../../assets/images/hero.png";
import {ABOUT_ID, HERO_ID, HERO_TEXT, HERO_TITLE_1, HERO_TITLE_2} from "../../assets/data";
import {Center, Content, FlexRow, Main, Relative, Section} from "../../components/UI/Containers";
import {NextImage, Wave} from "../../components/UI/Images";
import {Heading, Text} from "../../components/UI/Typography";
import {AnchorButton} from "../../components/UI/Button";
import {motion} from "framer-motion";
import {Particle} from "../../components/Particles";


export default function Hero() {
    return (
        <Main id={HERO_ID} className={"relative"}>
            <Particle/>
            <Section>
                <Content className={`bg-gradient-to-b from-cyan-500 to-blue-500`}>
                    <Relative className="overflow-hidden max-w-7xl lg:container lg:mx-auto grid">
                        <Relative className="relative overflow-hidden max-w-7xl mx-auto order-2">
                            <Content className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 ">
                                <Center overwriteClass={true}
                                        className="lg:text-left text-center pb-8 lg:pb-32 md:pb-0">
                                    <motion.div initial={{opacity: 0, y: 2}}
                                                whileInView={{opacity: 1, y: 0}}
                                                transition={{delay: 0.7}}
                                                viewport={{ once: true }}>
                                        <Heading className={"text-center"}>
                                            <>
                                                <span className="block xl:inline text-darkBlue">{HERO_TITLE_1}</span>{' '}
                                                <span >{}</span>
                                            </>
                                        </Heading>
                                        <Heading className="block text-center text-white ">
                                            <span className={"text-white text-center"}>{HERO_TITLE_2}</span>
                                        </Heading>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0, y: 2}}
                                                whileInView={{opacity: 1, y: 0}}
                                                transition={{delay: 0.9}}
                                                viewport={{ once: true }}>
                                        <Text overrideColor={true}
                                              className={"text-center text-gray-50 font-normal xl:mt-10 lg:mt-10 md:mt-10"}>
                                            {HERO_TEXT}
                                        </Text>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0, y: 2}}
                                                whileInView={{opacity: 1, y: 0}}
                                                transition={{delay: 1.1}}
                                                viewport={{ once: true }}>
                                        <FlexRow className="mt-5 sm:mt-10 justify-center lg:justify-start">
                                            <AnchorButton draggable={false}
                                                          className={"group hover:-translate-y-1 bg-white text-sky-700 hover:bg-sky-400 hover:text-white xl:text-xl relative font-medium rounded-full transition-all duration-200"}
                                                          href={"#" + ABOUT_ID}>
                                                Learn More
                                                <span
                                                    className={"ml-2 h-4 w-4 rounded-full group-hover:bg-white bg-sky-500 animate-pulse "}>

                                                </span>
                                            </AnchorButton>
                                        </FlexRow>
                                    </motion.div>
                                </Center>
                            </Content>
                        </Relative>
                        <Content className="overflow-visible lg:w-6/12 w-9/12 order-1 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8 ">
                            <motion.div initial={{opacity: 0, y: 5}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{delay: 0.5}}
                                        viewport={{ once: true }}>
                                <NextImage className="w-full overflow-visible" src={HeroImage}/>
                            </motion.div>
                        </Content>
                    </Relative>
                </Content>
            </Section>
            <Wave className={"-mt-5 bg-bgLight text-blue-500"}/>
        </Main>
    )
}