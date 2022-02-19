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
import {CenterText, Heading, SubHeading, Text, TitleHR, VerticalWatermark} from "../../components/UI/Typography";
import {Image, Wave} from "../../components/UI/Images";
import {Center, Container, Content, GridResponsive, Relative, Section} from "../../components/UI/Containers";

export default function About() {
    return (
        <Section id={ABOUT_ID}>
            <Content>
                <Content className={"bg-bgLight"}>
                    <Container>
                        <GridResponsive>
                            <Relative>
                                <VerticalWatermark>ABOUT</VerticalWatermark>
                                <Center className={"w-full h-full"}>
                                    <CenterText>
                                        <Heading className={"flex items-center"}>
                                            <Content className={"h-4 w-4 rounded-full bg-clrHeading"}/>
                                            <Content>{ABOUT_HEADING}</Content>
                                        </Heading>
                                        <TitleHR/>
                                        <SubHeading>
                                            {ABOUT_SUB_HEADING}
                                        </SubHeading>
                                    </CenterText>
                                </Center>
                            </Relative>
                            <Content>
                                <Image className={"mx-auto h-96"} src={AboutImage1.src}/>
                            </Content>
                        </GridResponsive>
                        <GridResponsive className={"md:mt-0 mt-10"}>
                            <Content className={"md:order-1 order-2"}>
                                <Image className={"mx-auto h-96 my-auto"} src={AboutImage3.src}/>
                            </Content>
                            <Content className={"my-auto md:order-2 order-1 md:text-left text-center"}>
                                <Content>
                                    <Heading>
                                        {ABOUT_CONTENT_HEADING_1}
                                    </Heading>
                                    <Text>
                                        {ABOUT_CONTENT_TEXT_1}
                                    </Text>
                                </Content>
                            </Content>
                        </GridResponsive>
                        <GridResponsive className={"md:mt-0 mt-10"}>
                            <Content className={"my-auto mx-auto  md:text-right text-center"}>
                                <Content>
                                    <Heading>
                                        {ABOUT_CONTENT_HEADING_2}
                                    </Heading>
                                    <Text>
                                        {ABOUT_CONTENT_TEXT_2}
                                    </Text>
                                </Content>
                            </Content>
                            <Content>
                                <Image className={"mx-auto h-96 my-auto"} src={AboutImage2.src} alt=""/>
                            </Content>
                        </GridResponsive>
                    </Container>
                </Content>
            </Content>
            <Wave className={"text-bgLight -mt-1"}/>
        </Section>
    )
}