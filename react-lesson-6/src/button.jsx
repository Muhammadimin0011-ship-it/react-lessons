import "./button.css";
function Button(props) {
    const {size, children} = props

    return <button className={size}>{children}</button>
}

export default Button