import {Heading, P, SubHeading} from "../../components/UI/Typography";
import {Absolute, Content, FlexRow, Grid} from "../../components/UI/Containers";
import classNames from "classnames";
import {FaStar} from "react-icons/fa";
import {motion} from "framer-motion";
import {RoadMapList} from "../../assets/data";

const DashedLine = ({
                        className, text, horizontalLineProps, circleProps, lineAlign = "left", ...props
                    }) => (<motion.div className={"flex flex-col items-center relative " + className}>
        <motion.div {...props} className={"h-full border-2 border-gray-300 border-dashed"}>
        </motion.div>
        <Absolute
            className={"sm:h-24 h-20 w-20 sm:w-24 h-20 w-20 z-30 grid place-items-center  bg-white border-8 border-indigo-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"}>
            <P className={"sm:mt-0 mt-0 sm:text-xl text-sm"}>
                {text}
            </P>
        </Absolute>
        <motion.div {...horizontalLineProps}
                    className={classNames("absolute transform text-right top-1/2 z-20", "transform -translate-y-1/2 w-1/2 border-2 border-gray-300 right-0 border-dashed", lineAlign === "left" ? "md:left-0" : "md:right-0")}>
            <motion.div {...circleProps}
                        className={classNames("sm:block hidden absolute w-10 h-10 -right-5 rounded-full z-20 border-indigo-400 border-8 bg-bgLight top-1/2transform -translate-y-1/2", lineAlign === "left" ? " md:-left-5" : "md:-right-5")}>
            </motion.div>
        </motion.div>
    </motion.div>)

export const RoadMapContent = ({title, id, text, className, ...props}) => (
    <motion.div {...props} className={"md:py-0 py-4 " + className}>
        <Content className={"md:p-8 p-6 bg-white drop-shadow "}>
            <FlexRow className={"justify-between items-center"}>
                <Heading className={"flex items-center xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl"}>
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
    </motion.div>)

const horizontalLineProps = (delay) => {
    return {initial: {width: 0},
        whileInView: {width: ""},
        transition: {duration: 0.1, delay: delay},
        viewport: {once: true}}
}

const circleProps = (delay) => {
    return {initial: {opacity: 0},
        whileInView: {opacity: 1},
        transition: {duration: 0.1, delay: delay},
        viewport: {once: true}}
}


export default function Roadmap() {
    return (<Content className={"mt-14"}>
            <SubHeading>ROADMAP</SubHeading>
            <Heading>
                Our Journey
            </Heading>
            <Content className={"mt-16"}/>
            {RoadMapList.map((each, key) => (
                <Grid key={key} className={"md:grid-cols-3 grid-cols-3"}>
                    <DashedLine initial={{height: 0}}
                                whileInView={{height: "100%"}}
                                transition={{duration: 0.2, delay: key * 0.3}}
                                viewport={{once: true}}
                                lineAlign={each.id % 2 === 0 ? "right" : "left"}
                                horizontalLineProps={horizontalLineProps(key * 0.3)}
                                circleProps={circleProps(key * 0.3)}
                                text={each.year}
                                className={"md:col-start-2 col-start-1 row-start-1"}/>
                    <RoadMapContent className={
                        classNames("md:col-span-1 col-span-2 col-start-2 row-start-1", each.id % 2 === 0 ?
                            "md:col-start-3" : "md:col-start-1")}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.2, delay: key * 0.3}}
                                    viewport={{once: true}}
                                    title={each.title}
                                    id={each.id}
                                    text={each.text}/>
                </Grid>))}

        </Content>)
}