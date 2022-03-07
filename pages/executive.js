import Navbar from "../components/UI/Navbar";
import Footer from "../elements/Home/Footer";
import HTMLHead from "../components/HTMLHead";
import HeroComponent from "../elements/HeroComponent";
import HeroImage from "../assets/images/hero.png";
import HeroCenterImage from "../assets/images/herocenter.png";
import {ABOUT_ID, HERO_TEXT, HERO_TITLE_1, HERO_TITLE_2} from "../assets/data";

export default function Executive() {
    return (
        <>
            <HTMLHead/>
            <Navbar/>
            <main className={"lg:pt-0 pt-10"}>
                <HeroComponent HeroImage={HeroImage} HeroCenterImage={HeroCenterImage}
                               HeroText={"ACC IT Club has a talented and very special panel. Meet our panel members"}
                               HeroTitle={HERO_TITLE_1 + " IT Club"}
                               HeroSecondaryTitle={"Panel Members"}
                               Href={""}
                               CTA={"Learn more"}/>
            </main>
            <Footer/>
        </>
    )
}