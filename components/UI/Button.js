import classNames from "classnames";
import {FaArrowAltCircleUp, FaSpinner} from "react-icons/fa";

export function AnchorButton({children, className, href="#", ...props}){
    return(
        <div className="rounded-md">
            <a href={href} {...props} className={classNames("w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-primary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10", className)}>
                {children}
            </a>
        </div>
    )
}

export function Button({className, children, ...props}){
    return(
        <button  {...props} className={classNames("w-32 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium  text-white bg-primary transition hover:bg-sky-700 hover:transform hover:-translate-y-1 active:translate-y-1 md:py-3 md:text-lg md:px-10", className)}>
            {children}
        </button>
    )
}

export function Spinner (){
    return(
        <span className={"animate-spin mr-2"}>
            <FaSpinner/>
        </span>
    )
}

export function ToTopButton({className, href}){
    return(
        <a href={href} className={"fixed bottom-16 right-2 text-3xl  bg-sky-500 text-white text-center rounded-full p-2 transition-all "+className}>
            <FaArrowAltCircleUp/>
        </a>
    )
}