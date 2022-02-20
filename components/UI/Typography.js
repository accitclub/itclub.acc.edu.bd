import classNames from "classnames";

export function Heading({children, className, prefix, ...props}){
    return(
        <h2 className={classNames("text-4xl tracking-tight font-extrabold text-clrHeading sm:text-5xl md:text-6xl", className)} {...props}>
            {prefix}
            {children}
        </h2>
    )
}

export function IconHeading({children, className,iconClassName, prefix, ...props}){
    return(
        <h2 className={classNames("flex items-center text-4xl tracking-tight font-extrabold text-clrHeading sm:text-5xl md:text-6xl", className)} {...props}>
            <span className={classNames("text-2xl mr-1 p-3 rounded-full bg-white grid place-items-center", iconClassName)}>
                {prefix}
            </span>
            <span>
                {children}
            </span>
        </h2>
    )
}

export function SubHeading({children, className, prefix, ...props}){
    return(
        <p className={"text-clrText"} {...props}>
            {children}
        </p>
    )
}

export function defaultTextMargin(){
    return "mt-3 lg:mx-0 sm:mt-10 sm:mx-auto md:mt-10 md:mt-16 xl:mt-20"
}
export function P({children, className, prefix,  ...props}){
    return(
        <p {...props} className={classNames('mt-4 sm:mt-4', className)}>
            {prefix}
            {children}
        </p>
    )
}

export function Text({children, className, prefix, overrideColor,  ...props}){
    // More Margin Top
    return(
        <p {...props} className={classNames("text-base sm:text-lg sm:max-w-xl md:text-xl", defaultTextMargin(), !overrideColor && 'overrideColor', className)}>
            {prefix}
            {children}
        </p>
    )
}


export function Paragraph({children, className, prefix,  ...props}){
    // Less Margin Top
    return(
        <P {...props} className={classNames("text-base text-clrText sm:text-lg md:text-xl", 'mt-4 sm:mt-4', className)}>
            {prefix}
            {children}
        </P>
    )
}



export function CenterText({children, className, prefix,  ...props}){
    return(
        <div className={classNames("text-center", className,)} {...props}>
            {prefix}
            {children}
        </div>
    )
}

export function ResponsiveTextLeft({children, className, prefix, overwriteClass,  ...props}){
    return(
        <div className={classNames(!overwriteClass && "text-center md:text-left", className)} {...props}>
            {children}
        </div>
    )
}

export function ResponsiveTextRight({children, className, prefix,  ...props}){
    return(
        <div className={classNames("text-center md:text-right", className)} {...props}>
            {children}
        </div>
    )
}

export function VerticalWatermark({children, className, prefix,  ...props}){
    return(
        <div {...props} className={classNames("overflow-hidden top-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:right-8 absolute lg:text-8xl text-9xl font-bold transform lg:rotate-90 opacity-10 text-clrText", className)}>
            {children}
        </div>
    )
}

export function HorizontalWatermark({children, className, prefix,  ...props}){
    return(
        <div {...props} className={classNames("overflow-hidden top-0 lg:right-8 absolute lg:text-8xl text-9xl font-bold transform  opacity-10 text-clrText", className)}>
            {children}
        </div>
    )
}

export function TitleHR({className,}){
    return(
       <div className={"flex my-2"}>
           <hr className={"w-6 mr-2 border-none h-3 rounded-2xl bg-primary"}/>
           <hr className={"w-20 mr-2 border-none h-3 rounded-2xl bg-primary"}/>
           <hr className={"w-16 border-none h-3 rounded-2xl bg-primary"}/>
       </div>
    )
}