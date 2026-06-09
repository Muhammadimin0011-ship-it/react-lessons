import './Button.css'

function Button(props) {
    return <button className={props.color === "red" ? "button--red" : "button"}> {props.title}</button>
}



export default Button   