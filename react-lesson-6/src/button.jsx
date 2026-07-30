import "./button.css";
function Button(props) {
    const {variant, size, children} = props

    return <button className={size}>{children}</button>
}

export default Button