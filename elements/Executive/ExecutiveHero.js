import HeroImage from "../../assets/images/exe_hero.png";
import {HERO_TITLE_1} from "../../assets/data";
import HeroCenterImage from "../../assets/images/exe_hero_center.png";
import HeroComponent from "../HeroComponent";


export default function ExecutiveHero() {
    return (
        <HeroComponent HeroImage={HeroImage} HeroCenterImage={HeroCenterImage}
                       HeroText={"ACC IT Club has a talented and very special panel. Meet our panel members"}
                       HeroTitle={HERO_TITLE_1 + " IT Club"}
                       HeroSecondaryTitle={"Panel Members"}
                       Href={""}
                       CTA={"Learn more"}/>
    )
}