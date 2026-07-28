function Button(props) {
    const { variant, children } = props;

    if (variant === "text") {
        return <button style={{backgroundColor: "white", color: "blue", outline: "none", border: "none"}}>{children}</button>
    } else if(variant === "conteiner") {
        return <button style={{backgroundColor: "blue", color: "white", outline: "none", border: "none"}}>{children}</button>
    }else{
        return <button style={{backgroundColor: "white", color: "blue", border: "1px solid", borderColor: "blue"}}>{children}</button>
    }
}

export default Button