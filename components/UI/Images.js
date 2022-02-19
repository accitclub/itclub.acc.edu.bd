import logo from "../../assets/images/logo.png"
import Image from "next/image";

export function NextImage({...props}){
    return(
        <Image {...props} alt="Web Image"/>
    )
}


export function Img({...props}){
    return(
        <img {...props} alt="Web Image"/>
    )
}

export function Wave({fill,className, ...props}){
    return(
        <svg className={"block fill-current "+className}
             fill={fill}
             viewBox="0 0 1366 149.29">
            <path d="M 0 53 L 45.53 74.3 C 91.07 96 182.13 138 273.2 133 S 455.33 74 546.4 63.7 C 637.47 53 728.53 85 819.6 111.7 c 91.07 26.3 182.13 48.3 273.2 32 c 91.07 -15.7 182.13 -69.7 227.67 -96 L 1366 21 V 0 L 0 0 Z"/>
        </svg>
    )
}

export default function Logo(){
    return(
        <div className={"h-12 w-12 rounded-full bg-white overflow-hidden grid place-items-center"}>
            <Img src={logo.src} className={'w-full object-cover'}/>
        </div>
    )
}