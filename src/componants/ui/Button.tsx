import { ReactNode } from "react"

interface IProps{
children:ReactNode;
className:string
}
const Button = ({children,className,...rest}: IProps) => {
    return (

      
            <button className={`${className}  p-2 w-full rounded-md text-white`} {...rest}>{children}</button>
       
    )
}

export default Button