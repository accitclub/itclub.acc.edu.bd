import HeroImage from "../../assets/images/hero.png";
import {HERO_ID, HERO_TEXT, HERO_TITLE_1, HERO_TITLE_2} from "../../assets/data";
import {Content, FlexRow, Main, Relative, Section} from "../../components/UI/Containers";
import {Img, NextImage, Wave} from "../../components/UI/Images";
import {Heading, ResponsiveTextLeft, Text} from "../../components/UI/Typography";
import {AnchorButton} from "../../components/UI/Button";

export default function Hero() {
    return (
        <Main id={HERO_ID} className={"h-min-screen"}>
            <Section >
                <Content className={"bg-bgDark"}>
                    <Relative className="overflow-hidden lg:container lg:mx-auto lg:block grid">
                        <Relative className="relative overflow-hidden max-w-7xl mx-auto order-2">
                            <Relative className="relative z-10 lg:max-w-3xl xl:max-w-3xl lg:w-7/12">
                                <Content className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-32">
                                    <ResponsiveTextLeft overwriteClass={true} className="lg:text-left text-center pb-8 lg:pb-32 md:pb-0">
                                        <Heading className={""}>
                                            <>

                                                <span className="block xl:inline">{HERO_TITLE_1}</span>{' '}
                                                <span className="block text-primary xl:inline">{HERO_TITLE_2}</span>
                                            </>
                                        </Heading>
                                        <Text>
                                            {HERO_TEXT}
                                        </Text>
                                        <FlexRow className="mt-5 sm:mt-10 md:mt-16 xl:mt-20 justify-center lg:justify-start">
                                            <AnchorButton>
                                                Learn More
                                            </AnchorButton>
                                        </FlexRow>
                                    </ResponsiveTextLeft>
                                </Content>
                            </Relative>
                        </Relative>
                        <Content className="lg:absolute lg:inset-y-0 lg:right-0 xl:w-1/2 lg:w-3/6  overflow-visible order-1">
                            <NextImage className="lg:w-full overflow-visible"
                                 src={HeroImage}
                            />
                        </Content>
                    </Relative>
                </Content>
            </Section>
            <Wave className={"bg-bgLight text-bgDark"}/>
        </Main>
    )
}