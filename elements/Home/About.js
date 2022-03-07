import {
    ABOUT_CONTENT_HEADING_1,
    ABOUT_CONTENT_HEADING_2,
    ABOUT_CONTENT_TEXT_1,
    ABOUT_CONTENT_TEXT_2,
    ABOUT_HEADING,
    ABOUT_ID,
    ABOUT_SUB_HEADING
} from "../../assets/data";
import AboutImage2 from "../../assets/images/about_image2.png";
import AboutImage3 from "../../assets/images/about_image3.png";
import {defaultTextMargin, Heading, P, Paragraph, SubHeading, Text} from "../../components/UI/Typography";
import {NextImage, Wave} from "../../components/UI/Images";
import {Center, Container, Content, Section} from "../../components/UI/Containers";
import Roadmap from "./Roadmap";
import classNames from "classnames";
import {xLeftPresentMotion, xRightPresentMotion, yPresentMotion} from "../../components/motion";

export const Stats = [
    {
        name: "Members",
        number: "100+",
        color1: "border-emerald-200",
        color2: "border-emerald-500"
    },
    {
        name: "Executive",
        number: "12+",
        color1: "border-orange-200",
        color2: "border-orange-500"
    },
    {
        name: "Fests",
        number: "12+",
        color1: "border-indigo-200",
        color2: "border-indigo-500"
    },
]

export default function About() {
    return (
        <Section id={ABOUT_ID}>
            <Content>
                <Content className={"bg-bgLight lg:py-10"}>
                    <Container className={"grid lg:gap-y-16 gap-y-10"}>
                        <Center className={"pb-10"}>
                            <Heading className={"flex items-center"}>
                                <Content className={"h-4 w-4 rounded-full bg-clrHeading"}/>
                                <Content>{ABOUT_HEADING}</Content>
                            </Heading>
                            <hr className={"w-32 h-3 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2"}/>
                            <SubHeading>
                                {ABOUT_SUB_HEADING}
                            </SubHeading>
                        </Center>
                        <Content className={"grid lg:grid-cols-2 md:mt-0 mt-10 md:gap-x-28 gap-y-10"}>
                            <Content {...xLeftPresentMotion(0.2)}>
                                <Content className={"md:order-1 order-2 lg:w-full md:w-9/12 lg:mx-0 mx-auto"}>
                                    <NextImage className={"mx-auto h-96 my-auto"} src={AboutImage3}/>
                                </Content>
                            </Content>
                            <Content className={"mt-auto md:order-2 order-1 "}>
                                <Content className={"lg:text-left text-center"}
                                         {...xRightPresentMotion(0.2)}>
                                    <Heading className={"xl:text-5xl lg:text-4xl md:text-4xl text-4xl"}>
                                        {ABOUT_CONTENT_HEADING_1}
                                    </Heading>
                                    <Text className={'text-clrText'}>
                                        {ABOUT_CONTENT_TEXT_1}
                                    </Text>
                                </Content>
                            </Content>
                        </Content>
                        <Content className={"grid lg:grid-cols-2 md:mt-0 mt-10 md:gap-x-28 gap-y-10"}>
                            <Content {...xLeftPresentMotion(0.2)}
                                     className={"lg:order-1 order-2 flex"}>
                                <Content className={"mt-auto mx-auto lg:text-right text-center"}>
                                    <Heading className={"xl:text-5xl lg:text-4xl md:text-4xl text-4xl"}>
                                        {ABOUT_CONTENT_HEADING_2}
                                    </Heading>
                                    <Paragraph
                                        className={"mt-3 max-w-xl lg:mr-0 lg:ml-auto mx-auto sm:mt-10 md:mt-10 md:mt-16 xl:mt-20"}>
                                        {ABOUT_CONTENT_TEXT_2}
                                    </Paragraph>
                                    <Content className={"flex justify-center flex-wrap " + defaultTextMargin()}>
                                        {
                                            Stats.map((each, key) => (
                                                <Content key={key}
                                                         {...yPresentMotion(0.3 * key)}
                                                         className={classNames("items-center mx-5 border-[6px] rounded-full", each.color1,
                                                             "text-center lg:w-44 lg:h-44 ",
                                                             " relative md:w-44 md:h-44 w-36 h-36 flex flex-col lg:mt-0 mt-10",
                                                             "justify-center")}>
                                                    <Content
                                                        className={classNames("w-full h-full rounded-full border-4", each.color2)}>
                                                        <Content
                                                            className={classNames("w-full h-full rounded-full flex flex-col justify-center border-[6px]", each.color1)}>
                                                            <P className={"text-black font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg"}>
                                                                {each.number}
                                                            </P>
                                                            <p className={"z-20 text-gray-500 mt-0 font-medium text-lg"}>
                                                                {each.name}
                                                            </p>
                                                            <p className={"absolute z-10 text-sm px-6 py-6 -bottom-5 left-1/2 transform bg-bgLight -translate-x-1/2 px-3 lg:text-lg"}>
                                                            </p>
                                                        </Content>
                                                    </Content>
                                                </Content>
                                            ))
                                        }
                                    </Content>
                                </Content>
                            </Content>
                            <Content className={"lg:order-2 order-1 lg:w-full md:w-9/12 lg:mx-0 mx-auto"}>
                                <NextImage {...xRightPresentMotion(0.2)} className={"mx-auto h-96 my-auto "}
                                           src={AboutImage2} alt=""/>
                            </Content>
                        </Content>
                        <Roadmap/>
                    </Container>
                </Content>
            </Content>
            <Wave className={"text-bgLight bg-white -mt-1"}/>
        </Section>
    )
}