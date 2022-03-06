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
        <Main id={HERO_ID} className={"relative hero-main"}>
            <Particle/>
            <Section className={"hero-bg hero-main"}>

            </Section>
        </Main>
    )
}