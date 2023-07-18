import styles from "./form.module.css"

function Form(props) {
    return (
        <div id={styles.form}>
            <span >{props.spanName}</span>
            <input onChange={props.onInputChange}  placeholder={props.placeholder} onKeyDown={props.enter} type="text"></input>
        </div>
    );
  }

  export default Form
  