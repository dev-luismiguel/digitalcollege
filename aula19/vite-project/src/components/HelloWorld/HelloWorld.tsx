import { HelloWorldProps } from "./HelloWorld.props"

export const HelloWorld = ({ 
    nome,
    sobrenome,
    children
}: HelloWorldProps) => {
    
    return (
        <div>
            <h1>Hello, {`${nome} ${sobrenome ?? ""}`} </h1>
            {children}
        </div>
        
    )
}
