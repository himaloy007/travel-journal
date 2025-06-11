export default function Input(props){
    return(
        <div className="input-box">
            <label htmlFor={props.for} className="label">{props.enter}</label><br />
            <input
                type={props.type}
                className={props.for}
                id="input-field"
                required
                value={props.type !== "file" ? props.value : undefined}
                onChange={props.onChange}
                name={props.name}
            /><br />
        </div>
    )
}