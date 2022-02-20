import classNames from "classnames";
import {FaArrowAltCircleUp} from "react-icons/fa";

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
        <button  {...props} className={classNames("w-32 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10", className)}>
            {children}
        </button>
    )
}

export function Spinner (){
    return(
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                    strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
    )
}

export function ToTopButton({className, href}){
    return(
        <a href={href} className={"fixed bottom-16 right-2 text-3xl  bg-sky-500 text-white text-center rounded-full p-2 transition-all "+className}>
            <FaArrowAltCircleUp/>
        </a>
    )
}