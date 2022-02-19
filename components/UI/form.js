export function Form({children, ...props}){
    return(
        <form {...props}>
            {children}
        </form>
    )
}

export function FormControl({children, ...props}){
    return(
        <div {...props}>
            {children}
        </div>
    )
}

export function Input({...props}){
    return(
        <input {...props}/>
    )
}

export function TextArea({...props}){
    return(
        <textarea {...props}/>
    )
}

export function Label({children, ...props}){
    return(
        <label {...props}>
            {children}
        </label>
    )
}