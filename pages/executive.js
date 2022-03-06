import {Main, Section} from "../components/UI/Containers";
import Navbar from "../components/UI/Navbar";
import Footer from "../elements/Home/Footer";
import HTMLHead from "../components/HTMLHead";
import Hero from "../elements/Executive/ExecutiveHero";

export default function Executive(){
    return(
        <>
            <HTMLHead/>
            <Navbar/>
            <main className={"lg:pt-0 pt-10"}>
               <Hero/>
            </main>
            <Footer/>
        </>
    )
}