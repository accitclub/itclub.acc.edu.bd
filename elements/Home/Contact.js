import {FaCheck, FaLinkedin, FaMailBulk, FaPaperPlane, FaPhone} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Container, Content, Section} from "../../components/UI/Containers";
import {IconHeading, P, Paragraph, ResponsiveTextLeft} from "../../components/UI/Typography";
import {Button, Spinner} from "../../components/UI/Button";
import {Form, FormControl, Input, Label, TextArea} from "../../components/UI/form";
import {EMAIL} from "../../assets/data/SocialLinks";
import {motion} from "framer-motion";
import {CONTACT_ID, CONTACT_US_FORM_HEADER, CONTACT_US_FORM_PARAGRAPH, CONTACT_US_HEADER} from "../../assets/data";
import classNames from "classnames";

const ContactLinks = () => <div className={"grid grid-cols-3 gap-1 "}>
    <a name={"Send Email"} title={"Send Email"} href={"mailto:khanasfireza10@gmail.com"}
       className={"h-14 w-14 text-lg grid place-items-center bg-blue-500 text-gray-50"}>
        <FaMailBulk/>
    </a>

    <a name={"Call Phone"} title={"Call"} href={"tel:+8801753489310"}
       className={"h-14 w-14 text-lg grid place-items-center bg-blue-500 text-gray-50"}>
        <FaPhone/>
    </a>

    <a name={"LinkedIn"} title={"LinkedIn"} href={"#"} target={"_blank"}
       className={"h-14 w-14 text-lg grid place-items-center bg-blue-500 text-gray-50"} rel="noreferrer">
        <FaLinkedin/>
    </a>

</div>


export default function Contact() {
    const [data, setData] = useState({
        name: "", email: "", message: "", error: "", loading: false, sent: false,
    })

    const changeData = (newData) => {
        setData({...data, ...newData})
    }

    const onChange = (e) => {
        changeData({[e.target.name]: e.target.value, error: ""})
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!data.name || !data.message || !data.email || !validateEmail(data.email)) {
            setData({...data, 'error': "Invalid Form, please enter name, email and message properly"})
        } else {
            changeData({loading: true})
            fetch("/api/mail", {
                method: "POST", headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify(data), mode: 'no-cors', referrerPolicy: 'no-referrer',
            }).then(() => {
                changeData({
                    name: "", email: "", message: "", loading: false, sent: true
                })
                setTimeout(() => {
                    changeData({
                        name: "", email: "", message: "", loading: false, sent: true
                    })
                }, 5000)

            }).catch(() => {
                changeData({
                    loading: false,
                    error: "Unable to send message, please try again. " + "Or send mail to my email address",
                    name: "",
                    email: "",
                    message: "",
                    sent: false,
                })
            })
        }

    }

    useEffect(() => {


    }, [])

    return (<Section id={CONTACT_ID} className={"bg-gray-100"}>
        <Container className={"max-w-7xl"}>
            <ResponsiveTextLeft className={""}>
                <IconHeading className={"md:justify-start justify-center"} iconClassName={"bg-blue-500 text-white"}
                             prefix={<FaPhone/>}>
                    {CONTACT_US_HEADER}
                </IconHeading>
            </ResponsiveTextLeft>
            <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5,}}
                viewport={{once: true}}
                className={"grid md:grid-cols-5 grid-cols-1 mt-20 z-20  bg-gray-900 rounded-2xl z-20"}>
                <div className={"col-span-2 z-20 md:px-4 md:py-20 px-2 py-8 lg:w-9/12 md:w-full w-11/12 mx-auto "}>
                    <Content>
                        <h3 id={"contact_h"}
                            className={"text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 gradient-text"}>{CONTACT_US_FORM_HEADER}</h3>
                        <hr id={"contact_hr"}
                            className={"w-32 h-2 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-3"}/>
                    </Content>
                    <P id={"contact_text"} className={"md:mt-16 sm:mt-10 mt-10 text-lg font-normal text-gray-300"}>
                        {CONTACT_US_FORM_PARAGRAPH}
                        <br/>
                        Send message via this form or you can mail me at
                        <span className={" text-blue-500 ml-2 "}>{EMAIL}</span>
                    </P>
                    <Content id={"contact_btn"} className={"mt-16 "}>
                        <ContactLinks/>
                    </Content>

                </div>
                <div
                    className={"col-span-3 bg-white rounded-3xl border-[1rem] border-gray-900"}>
                    <Content
                        className={"rounded-2xl bg-opacity-70 lg:w-9/12 md:w-full w-11/12 m-auto h-full md:px-2 md:py-4 px-2 py-4"}>
                        <Form onSubmit={onSubmit} className={"mt-14 "}>
                            <FormControl className="relative contact_input">
                                <Label htmlFor="name" className={"text-gray-800 font-medium"}>Your Name</Label>
                                <Input value={data.name} onChange={onChange} id="name" name="name" type="text"
                                       required={true}
                                       className={classNames(
                                           "border text-gray-700 mt-4 autofill-transparent peer",
                                           "bg-gray-100 focus-within:border-emerald-500 transition-all",
                                           "duration-500 w-full h-12 active:outline-0 outline-0 px-2 focus:outline-0")}
                                       placeholder="Khan Asfi Reza"/>
                            </FormControl>

                            <FormControl className="relative mt-8 contact_input">
                                <Label htmlFor="email" className={"text-gray-800 font-medium"}>Your Email</Label>
                                <Input value={data.email} onChange={onChange} id="email" name="email" type="text"
                                       required={true}
                                       className={classNames(
                                           "border text-gray-700 mt-4 autofill-transparent peer",
                                           "bg-gray-100 focus-within:border-emerald-500 transition-all",
                                           "duration-500 w-full h-12 active:outline-0 outline-0 px-2 focus:outline-0")}
                                       placeholder="john@doe.com"/>
                            </FormControl>


                            <FormControl className=" mt-8  relative contact_input">
                                <Label htmlFor="message" className={"text-gray-800 font-medium"}>Your
                                    Message</Label>
                                <TextArea value={data.message} onChange={onChange} id="message" name={"message"}
                                          required={true}
                                          placeholder={"Hi! There"}
                                          className={classNames("border w-full active:outline-0 outline-0 text-gray-700 mt-4 autofill-transparent peer",
                                              "bg-gray-100 p-2 focus-within:border-emerald-500 transition-all", "resize-none h-28")}
                                />
                            </FormControl>
                            {<Paragraph className={"text-rose-500"}>{data.error}</Paragraph>}
                            {data.sent && <Paragraph className={"flex items-center text-emerald-500 text-xl"}>
                                        <span
                                            className={"p-2 mr-3 text-emerald-500 rounded-full grid place-items-center bg-white"}>
                                            <FaCheck/>
                                        </span>
                                <span>
                                            Thank you for your message ! We will get back to you soon
                                        </span>
                            </Paragraph>}

                            <Button type="submit"
                                    className="mt-10 ml-auto w-72 py-4 px-4 border-gray-900 text-gray-800 border-2 hover:bg-white bg-transparent hover:border-indigo-500 hover:text-indigo-500">
                                {data.loading && <Spinner/>}
                                Send <span className={"ml-2"}><FaPaperPlane/></span>
                            </Button>
                        </Form>
                    </Content>
                </div>
            </motion.div>
        </Container>

    </Section>)
}
