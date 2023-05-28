const Button=({text,type,onClick})=>{
    return(
        <button className={type} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;