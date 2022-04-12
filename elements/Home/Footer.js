import {Column, Container, Content, GridResponsive} from "../../components/UI/Containers";
import {Heading, Paragraph, ResponsiveTextLeft} from "../../components/UI/Typography";
import classNames from "classnames";
import {SocialLinksJSXList} from "../../assets/data/SocialLinks";
import {CONTACTS, FOOTER_HEADER, FOOTER_TEXT, NAVIGATION} from "../../assets/data";

export default function Footer() {
    return (
        <footer className={"bg-gradient-to-br from-gradientLightBlue to-gradientBlue"}>

            <Container>
                <GridResponsive className={"lg:grid-cols-3"}>
                    <Column>
                        <ResponsiveTextLeft>
                            <Heading className={"xl:text-2xl lg:text-2xl md:text-2xl text-2xl text-clrWhite "}>
                                {FOOTER_HEADER}
                            </Heading>
                            <Paragraph className={"text-clrGray"}>
                                {FOOTER_TEXT}
                            </Paragraph>
                            <Content className={"flex mt-4 flex-row md:justify-start justify-center flex-wrap"}>
                                {SocialLinksJSXList.map((item, key) =>
                                    <a key={key} name={item.name} title={item.name} href={item.link}
                                       className={classNames("h-8 w-8 hover:bg-sky-100 bg-gray-100 rounded-full grid place-items-center md:mr-4 md:mx-0 mx-auto md:text-3x text-lg ", item.className)}>
                                        {item.icon}
                                    </a>
                                )}
                            </Content>
                        </ResponsiveTextLeft>
                    </Column>
                    <Column className={"justify-self-center"}>
                        <h2 className={"text-2xl text-clrWhite font-medium md:text-left text-center"}>Quick Links</h2>
                        <Content className={"flex md:flex-col flex-row md:justify-start justify-center mt-4 flex-wrap"}>

                            {
                                NAVIGATION.map((each, key) => (
                                    <a key={key} href={each.href}
                                       className={"text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 hover:text-green-200"}>
                                        {each.name}
                                    </a>
                                ))
                            }
                        </Content>
                    </Column>
                    <Column className={"md:justify-self-end justify-self-center"}>
                        <h2 className={"text-2xl text-clrWhite md:text-left text-center"}>Contact</h2>
                        <Content className={"flex flex-col  md:justify-start justify-center mt-4"}>

                            {
                                CONTACTS.map((each, key) => (
                                    <p key={key}
                                       className={"md:text-left text-center text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 "}>
                                        {each}
                                    </p>
                                ))
                            }
                        </Content>
                    </Column>
                </GridResponsive>
            </Container>
        </footer>
    )
}