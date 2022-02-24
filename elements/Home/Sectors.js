import {
    Center,
    Container,
    Content,
    FlexRow,
    FlexRowResponsive,
    Relative,
    Section
} from "../../components/UI/Containers";
import {Wave} from "../../components/UI/Images";
import {
    CenterText,
    Heading,
    HorizontalWatermark, P,
    Paragraph,
    ResponsiveTextLeft,
    Text
} from "../../components/UI/Typography";
import {
    SECTOR_CONTENT_HEADING,
    SECTOR_CONTENT_TEXT,
    SECTOR_WATERMARK,
    SECTOR_LIST,
    SECTOR_ID,
    TESTIMONIAL_ID
} from "../../assets/data";
import {FaArtstation, FaBrain, FaCode, FaMobile, FaProjectDiagram, FaVideo} from "react-icons/fa";
import classNames from "classnames";
import {AnchorButton, Button} from "../../components/UI/Button";

// {

// }

export default function Sectors() {
    return (
        <Section id={SECTOR_ID}>
            <Content className={"overflow-hidden bg-white"}>
                <Container>
                    <FlexRow className={"justify-between md:flex-row flex-col"}>
                        <Center className={"flex-[4]"}>
                            <Content>
                                <Relative>
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
                                        <AnchorButton href={"#"+TESTIMONIAL_ID} className={"w-56 xl:mt-20 bg-green-600 lg:mt-20 md:mt-20 text-white mt-10 md:mr-auto md:mx-0 mx-auto"}>
                                            Learn More
                                        </AnchorButton>
                                    </ResponsiveTextLeft>
                                </Relative>
                            </Content>
                        </Center>
                        <Content className={"h-full flex-[3] md:ml-auto md:mt-0 mt-16 "}>
                            <FlexRowResponsive
                                className={"h-full grid grid-cols-3 sm:gap-4 gap-1 md:flex-grow md:flex-wrap md:justify-end  md:transform md:rotate-12"}>
                                {SECTOR_LIST.map((each, key) => (
                                    <Center key={key}
                                            className={"bg-slate-900  xl:h-56 xl:w-56 lg:h-44 lg:w-44 md:h-32 md:w-32 sm:h-44 sm:w-full xs:h-32 xs:w-full sxs:h-28 sxs:w-full h-24 w-full  md:m-3 mx-auto"}>
                                        <CenterText className={"text-xl"}>
                                            <Center
                                                className={classNames("xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl", key % 3 === 0 ? "text-emerald-400" : key % 3 === 1 ?  "text-blue-400" : "text-yellow-300")}>
                                                {each.icon}
                                            </Center>
                                            <P className={"xl:text-xl text-white font-semibold text-white lg:text-lg md:text-base sm:text-xl text-sm"}>{each.name}</P>

                                        </CenterText>
                                    </Center>
                                ))}
                            </FlexRowResponsive>
                        </Content>
                    </FlexRow>
                </Container>
            </Content>
            <Wave className={"text-white bg-bgDark"}/>
        </Section>
    )
}