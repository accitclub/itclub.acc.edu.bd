import {Heading, P, SubHeading} from "../../components/UI/Typography";
import {Absolute, Content, FlexRow, Grid} from "../../components/UI/Containers";
import classNames from "classnames";
import {FaStar} from "react-icons/fa";

const DashedLine = ({className, text, lineAlign="left"}) => (
    <Content className={"grid place-items-center relative "+className}>
        <Content className={"h-full border-2 border-gray-300 border-dashed"}>
        </Content>
        <Absolute className={"h-24 z-30 grid place-items-center w-24 bg-white border-8 border-sky-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"}>
            <P className={"sm:mt-0 mt-0 text-xl"}>
                {text}
            </P>
        </Absolute>
        <Absolute className={classNames("top-1/2 z-20",
            "transform -translate-y-1/2 w-1/2 border-2 border-gray-300 right-0 border-dashed",
            lineAlign === "left" ? "md:left-0" : "md:right-0"
            )}>
            <Absolute className={classNames("w-10 h-10 -right-5 rounded-full z-20 border-sky-500 border-8 bg-bgLight top-1/2transform -translate-y-1/2",
                    lineAlign === "left" ? " md:-left-5" : "md:-right-5"
                )}>
            </Absolute>
        </Absolute>
    </Content>
)

export const RoadMapContent = ({title, id, text, className}) => (
    <Content className={"md:py-0 py-4 "+className}>
        <Content className={"md:p-8 p-6 bg-white drop-shadow "}>
            <FlexRow className={"justify-between items-center"}>
                <Heading  className={"flex items-center xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl"}>
                <span className={"mr-2"}>
                    <FaStar/>
                </span>
                    {title}
                </Heading>
                <P className={"mt-0 sm:mt-0 text-3xl font-extrabold text-gray-300"}>
                    {id}
                </P>
            </FlexRow>
            <P className={"mt-4"}>
                {text}
            </P>
        </Content>
    </Content>
)

export default function Roadmap(){
    return(
        <Content className={"mt-14"}>
            <SubHeading>ROADMAP</SubHeading>
            <Heading>
                Our Journey
            </Heading>
            <Grid className={"mt-14 md:grid-cols-3 grid-cols-3"}>
                <DashedLine text={"2016"} className={"md:row-start-1 md:col-start-2"}/>
                <RoadMapContent className={"md:col-start-1 md:row-start-1 md:col-span-1 col-span-2"} title={"The Beginning"} id={1} text={"The journey of this valorous club began with the help of our senior teachers, " +
                    "and honourable principal. From that day, ACCIT Club has showed their excellence in many different sectors"}/>

                <DashedLine text={"2017"} className={"md:row-start-2 md:col-start-2"} lineAlign={"right"}/>
                <RoadMapContent title={"The Beginning"}
                                id={2}
                                className={"md:row-start-2 md:col-start-3 md:col-span-1 col-span-2"}
                                text={"The journey of this valorous club began with the help of our senior teachers, " +
                    "and honourable principal. From that day, ACCIT Club has showed their excellence in many different sectors"}/>

                <DashedLine className={"md:row-start-3 md:col-start-2"} text={"2018"}/>
                <RoadMapContent title={"The Beginning"}
                                id={2}
                                className={"md:row-start-3 md:col-span-1 col-span-2"}
                                text={"The journey of this valorous club began with the help of our senior teachers, " +
                                    "and honourable principal. From that day, ACCIT Club has showed their excellence in many different sectors"}/>

                <DashedLine className={"md:row-start-4 md:col-start-2"} text={"2019"} lineAlign={"right"}/>
                <RoadMapContent title={"The Beginning"}
                                id={2}
                                className={"md:row-start-4 md:col-start-3 md:col-span-1 col-span-2"}
                                text={"The journey of this valorous club began with the help of our senior teachers, " +
                                    "and honourable principal. From that day, ACCIT Club has showed their excellence in many different sectors"}/>

            </Grid>
        </Content>
    )
}