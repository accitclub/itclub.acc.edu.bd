import {useRef} from "react";
import {Container, Section} from "../../components/UI/Containers";
import {Wave} from "../../components/UI/Images";
import {IconHeading, Paragraph, ResponsiveTextLeft} from "../../components/UI/Typography";
import {GallerySlides} from "../../components/UI/Slide";
import {FaImages} from "react-icons/fa";
import {GALLERY_HEADER, GALLERY_ID, GALLERY_SUB_TEXT, SLIDES} from "../../assets/data";
import {motion} from "framer-motion";

export default function Gallery() {
    const containerRef = useRef(null)

    return (
        <Section id={GALLERY_ID}>
            <Wave className={"text-bgDark bg-bgLight"}/>
            <motion.section className={"bg-bgLight"}>
                <Container className={"pb-0"}>
                    <ResponsiveTextLeft className={"py-0"}>
                        <IconHeading className={"md:justify-start justify-center"} prefix={<FaImages/>}>
                            {GALLERY_HEADER}
                        </IconHeading>
                        <Paragraph className={"xl:mt-4 lg:mt-4 md:mt-3 mt-3"}>
                            {GALLERY_SUB_TEXT}
                        </Paragraph>
                    </ResponsiveTextLeft>
                </Container>
                <motion.section initial={{opacity: 0, y: 100}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5,}}
                                viewport={{once: true}}
                                className={"md:py-10 py-4"}>
                    <div ref={containerRef}
                         className={"flex justify-center items-center relative overflow-hidden box-border md:container md:mx-auto py-10 px-5 rounded-2xl"}>
                        <GallerySlides slides={SLIDES} parentRef={containerRef}/>
                    </div>
                </motion.section>
            </motion.section>
        </Section>
    )
}