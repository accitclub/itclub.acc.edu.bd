import {Column, Container, Content, FlexRow, Grid, Section} from "../../components/UI/Containers";
import {Heading, Paragraph} from "../../components/UI/Typography";
import {FaFacebook, FaLinkedin, FaStar} from "react-icons/fa";
import {NextImage} from "../../components/UI/Images";
import ShishirSir from "../../assets/images/shishirsir.jpg";

export const MemberCard = ({image, name, text, fb, linkedin}) => {
    return(
        <Content>
            <Content className={"md:h-48 md:w-48 h-32 w-32 overflow-hidden rounded-full mx-auto"}>
                <NextImage src={image}/>
            </Content>
            <Paragraph className={"text-center font-semibold lg:text-xl text-lg text-clrHeading"}>
                {name}
            </Paragraph>
            <Paragraph className={"text-center lg:mt-1 mt-1"}>
                {text}
            </Paragraph>
            <FlexRow className={"justify-center lg:mt-2 mt-2"}>
                {
                    fb && <a href={fb} className={"bg-transparent text-2xl text-blue-500 hover:text-blue-600 mx-3"}>
                        <FaFacebook/>
                    </a>
                }
                {
                    linkedin && <a href={linkedin} className={"bg-transparent text-2xl text-indigo-500 hover:text-indigo-600 mx-3"}>
                        <FaLinkedin/>
                    </a>
                }
            </FlexRow>
        </Content>
    )
}


export default function PanelMembers(){
    return(
        <Section>
            <Container >
                <Heading className={"flex text-green-500 items-center justify-center"}>
                    <FaStar/>
                    Panel Members
                </Heading>
                <Paragraph className={"text-center lg:mt-1 mt-1"}>
                    Meet our talented panel executive members
                </Paragraph>
                <Grid className={"mt-16 grid-cols-1 gap-y-10"}>
                    <Column className={"grid place-items-center"}>
                        <MemberCard name={"Shafkat Shishir"}
                                    text={"Moderator, ACC IT Club"}
                                    image={ShishirSir}
                                    fb={"http://"}
                                    linkedin={""}
                        />
                    </Column>
                    <Column>
                        <Heading className={"lg:text-4xl text-center mb-16"}>
                            Panel {"'20-21"}
                        </Heading>
                        <Grid className={"md:grid-cols-3 grid-cols-2 gap-y-16 gap-x-10"}>
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                            <MemberCard name={"Shafkat Shishir"}
                                        text={"Moderator, ACC IT Club"}
                                        image={ShishirSir}
                                        fb={"http://"}
                                        linkedin={""}
                            />
                        </Grid>
                    </Column>
                </Grid>
            </Container>
        </Section>
    )
}