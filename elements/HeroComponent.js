import {HERO_ID} from "../assets/data";
import {Column, Content, Main, Section} from "../components/UI/Containers";
import {NextImage} from "../components/UI/Images";
import {Heading, Paragraph} from "../components/UI/Typography";
import {AnchorButton} from "../components/UI/Button";
import {Particle} from "../components/Particles";
import classNames from "classnames";
import {motion} from "framer-motion";
import {yPresentMotion} from "../components/motion";


export default function HeroComponent({
                                          HeroImage,
                                          HeroCenterImage,
                                          HeroTitle,
                                          HeroSecondaryTitle,
                                          HeroText,
                                          CTA,
                                          Href
                                      }) {
    return (
        <Main id={HERO_ID} className={"relative hero-main"}>
            <Particle/>
            <Section className={"bg-gradient-to-br from-gradientLightBlue to-gradientBlue hero-main"}>
                <Section className={"container mx-auto xl:py-32 lg:py-24 py-16 xl:px-0 lg:px-2"}>
                    <Content
                        className={"sm:grid 2xl:grid-cols-2 xl:grid-cols-5 lg:grid-cols-7 auto-rows-max grid-cols-1 lg:grid-rows-1 grid-rows-2"}>
                        <Column className={"2xl:col-span-1 xl:col-span-2 lg:col-span-3 relative lg:order-2 order-1"}>
                            <Content
                                className={"sm:absolute z-10 lg:right-0 2xl:-top-20 xl:-top-16 lg:-top-2 2xl:w-[80vw] xl:w-[80vw] lg:w-[89vw] w-full mx-auto"}>
                                <Content className={"lg:visible lg:block hidden w-full invisible mx-auto"}>
                                    <NextImage {...yPresentMotion(0.3)} priority src={HeroImage}/>
                                </Content>
                                <Content className={"lg:invisible lg:hidden block visible w-full mx-auto"}>
                                    <NextImage {...yPresentMotion(0.3)} priority src={HeroCenterImage}/>
                                </Content>
                            </Content>
                        </Column>
                        <motion.div
                            className={"2xl:col-span-1 xl:col-span-3 lg:col-span-4 lg:order-1 lg:text-left text-center order-2 lg:mt-24 sm:-mt-1 -mt-2 z-20"}>
                            <Heading {...yPresentMotion(0)}
                                     className={"2xl:text-7xl xl:text-6xl lg:text-5xl text-clrWhite"}>
                                {HeroTitle}
                            </Heading>
                            <Heading{...yPresentMotion(0.3)}
                                    className={"2xl:text-7xl xl:text-6xl mt-2 lg:text-5xl text-emerald-300"}>
                                {HeroSecondaryTitle}
                            </Heading>
                            <Paragraph {...yPresentMotion(0.6)}
                                       className={"text-clrGray 2xl:text-xl xl:text-lg lg:text-md xl:max-w-xl lg:max-w-md mr-auto lg:mt-10"}>
                                {HeroText}
                            </Paragraph>
                            <AnchorButton {...yPresentMotion(0.9)}
                                          draggable={false}
                                          className={classNames("group w-56 mt-10 block lg:mx-0 mx-auto hover:-translate-y-1 ",
                                              "border-2 border-green-400 text-emerald-300 hover:bg-emerald-500 ",
                                              "hover:text-white bg-transparent xl:text-xl relative ",
                                              "font-medium rounded-full transition-all duration-200")}
                                          href={"#" + Href}>
                                {CTA}
                                <span
                                    className={"ml-2 h-4 w-4 rounded-full group-hover:bg-white bg-green-500 animate-pulse "}>
                                </span>
                            </AnchorButton>
                        </motion.div>

                    </Content>
                </Section>
            </Section>
        </Main>
    )
}