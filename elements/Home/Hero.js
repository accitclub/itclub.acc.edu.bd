import HeroImage from "../../assets/images/hero.png";
import HeroCenterImage from "../../assets/images/herocenter.png";
import {ABOUT_ID, HERO_TEXT, HERO_TITLE_1, HERO_TITLE_2} from "../../assets/data";
import HeroComponent from "../HeroComponent";


export default function Hero() {
    return (
        <HeroComponent HeroImage={HeroImage}
                       HeroCenterImage={HeroCenterImage}
                       HeroText={HERO_TEXT} HeroTitle={HERO_TITLE_1}
                       HeroSecondaryTitle={HERO_TITLE_2}
                       CTA={"Learn More"}
                       Href={ABOUT_ID}/>
    )
}