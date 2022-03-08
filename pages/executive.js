import Navbar from "../components/UI/Navbar";
import Footer from "../elements/Home/Footer";
import HTMLHead from "../components/HTMLHead";
import ExecutiveHero from "../elements/Executive/ExecutiveHero";
import PanelMembers from "../elements/Executive/Members";

export default function Executive() {
    return (
        <>
            <HTMLHead/>
            <Navbar/>
            <main className={"lg:pt-0 pt-10"}>
                <ExecutiveHero/>
                <PanelMembers/>
            </main>
            <Footer/>
        </>
    )
}