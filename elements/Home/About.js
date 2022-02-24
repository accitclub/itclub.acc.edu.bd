import {
    ABOUT_CONTENT_HEADING_1,
    ABOUT_CONTENT_HEADING_2,
    ABOUT_CONTENT_TEXT_1,
    ABOUT_CONTENT_TEXT_2,
    ABOUT_HEADING,
    ABOUT_ID,
    ABOUT_SUB_HEADING
} from "../../assets/data";
import AboutImage1 from "../../assets/images/about_image1.png";
import AboutImage2 from "../../assets/images/about_image2.png";
import AboutImage3 from "../../assets/images/about_image3.png";
import {
    CenterText,
    defaultTextMargin,
    Heading,
    P,
    SubHeading,
    Text,
    TitleHR,
    VerticalWatermark
} from "../../components/UI/Typography";
import {NextImage, Wave} from "../../components/UI/Images";
import {Center, Container, Content, GridResponsive, Relative, Section} from "../../components/UI/Containers";

export default function About() {
    return (
        <Section id={ABOUT_ID}>
            <Content>
                <Content className={"bg-bgLight"}>
                    <Container className={"grid gap-y-16"}>
                        <GridResponsive >
                            <Relative>
                                <VerticalWatermark>ABOUT</VerticalWatermark>
                                <Center className={"w-full h-full"}>
                                    <CenterText>
                                        <Heading className={"flex items-center"}>
                                            <Content className={"h-4 w-4 rounded-full bg-clrHeading"}/>
                                            <Content>{ABOUT_HEADING}</Content>
                                        </Heading>
                                        <hr className={"w-32 h-3 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2"}/>
                                        <SubHeading>
                                            {ABOUT_SUB_HEADING}
                                        </SubHeading>
                                    </CenterText>
                                </Center>
                            </Relative>
                            <Content>
                                <NextImage className={"mx-auto h-96"} src={AboutImage1}/>
                            </Content>
                        </GridResponsive>
                        <GridResponsive className={"md:mt-0 mt-10 lg:gap-x-10 md:gap-x-2"}>
                            <Content className={"md:order-1 order-2"}>
                                <NextImage className={"mx-auto h-96 my-auto"} src={AboutImage3}/>
                            </Content>
                            <Content className={"my-auto md:order-2 order-1 md:text-left text-center"}>
                                <Content>
                                    <Heading>
                                        {ABOUT_CONTENT_HEADING_1}
                                    </Heading>
                                    <Text className={'text-clrText'}>
                                        {ABOUT_CONTENT_TEXT_1}
                                    </Text>
                                </Content>
                            </Content>
                        </GridResponsive>
                        <GridResponsive className={"md:mt-0 mt-10 lg:gap-x-10 md:gap-x-2"}>
                            <Content className={"my-auto mx-auto  md:text-right text-center"}>
                                <Content>
                                    <Heading>
                                        {ABOUT_CONTENT_HEADING_2}
                                    </Heading>
                                    <Text>
                                        {ABOUT_CONTENT_TEXT_2}
                                    </Text>
                                    <Content className={"flex justify-between flex-wrap "+ defaultTextMargin()}>
                                        <Content className={"px-4 items-center text-center bg-[#48a15e] xl:w-40 xl:h-40 lg:w-32 lg:h-32 md:w-28 md:h-28 sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center"}>
                                            <P className={"text-gray-100 lg:text-lg"}>
                                                Members
                                            </P>
                                            <P className={"text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg"}>
                                                100+
                                            </P>
                                        </Content>

                                        <Content className={"px-4 items-center text-center  bg-[#5e48a1] xl:w-40 xl:h-40 lg:w-32 lg:h-32 md:w-28 md:h-28 sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center"}>
                                            <P className={"text-gray-100 lg:text-lg"}>
                                                Executive
                                            </P>
                                            <P className={"text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg"}>
                                                12+
                                            </P>
                                        </Content>

                                        <Content className={"px-4 items-center text-center  bg-[#a15e48] xl:w-40 xl:h-40 lg:w-32 lg:h-32 md:w-28 md:h-28 sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center"}>
                                            <P className={"text-gray-100 lg:text-lg"}>
                                                Fests
                                            </P>
                                            <P className={"text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg"}>
                                                10+
                                            </P>
                                        </Content>
                                    </Content>
                                </Content>
                            </Content>
                            <Content>
                                <NextImage className={"mx-auto h-96 my-auto"} src={AboutImage2} alt=""/>
                            </Content>
                        </GridResponsive>
                    </Container>
                </Content>
            </Content>
            <Wave className={"text-bgLight bg-white -mt-1"}/>
        </Section>
    )
}