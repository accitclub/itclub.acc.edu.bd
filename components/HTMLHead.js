import Head from "next/head";
import {SeoMetaTags} from "../assets/data/SeoData";

export default function HTMLHead(){
    return(
        <Head>
            <title>ACCITC</title>
            <meta name="description" content="ACCITC" />
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="shortcut icon" href="/favicon.ico" />
            {
                SeoMetaTags.map((each, i) =>
                    (
                        <meta key={i} name={each.name} content={each.content} property={each.property}/>
                    )
                )
            }
        </Head>
    )
}