import classNames from "classnames";
import {motion} from "framer-motion";

export function Container({children, className, ...props}){
    return(
        <div className={classNames("container mx-auto py-16", className)} {...props}>
            {children}
        </div>
    )
}

export function Grid({children, className, ...props}){
    return(
        <div className={classNames("grid", className)} {...props}>
            {children}
        </div>
    )
}

export function GridResponsive({children, className, cols, ...props}){
    return(
        <Grid className={classNames(`gap-5`, cols ? "md:grid-cols-"+cols : "md:grid-cols-2",  className)} {...props}>
            {children}
        </Grid>

    )
}

export function Row({children, className, ...props}){
    return(
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export function Column({children, className, ...props}){
    return(
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export function FlexRow({children, className, ...props}){
    return(
        <div className={classNames("flex flex-row", className)} {...props}>
            {children}
        </div>
    )
}

export function FlexRowResponsive({children, className, ...props}){
    return(
        <div className={classNames("md:flex md:flex-row", className)} {...props}>
            {children}
        </div>
    )
}

export function FlexColumn({children, className, ...props}){
    return(
        <div className={classNames("flex flex-col", className)} {...props}>
            {children}
        </div>
    )
}

export function Center({children, className, ...props}){
    return(
        <div className={classNames("grid place-items-center", className)} {...props}>
            {children}
        </div>
    )
}

export function Relative({children, className, ...props}){
    return(
        <div className={classNames("relative overflow-hidden", className)} {...props}>
            {children}
        </div>
    )
}

export function Absolute({children, className, ...props}){
    return(
        <div className={classNames("absolute", className)} {...props}>
            {children}
        </div>
    )
}

export function Section({children, className,  ...props}){
    return(
        <section className={className} {...props}>
            {children}

        </section>
    )
}

export function Main({children, ...props}){
    return(
        <main {...props}>
            {children}
        </main>
    )
}

export function Content({children, ...props}){
    return(
        <motion.div  {...props}>
            {children}
        </motion.div>
    )
}

