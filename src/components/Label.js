function Label(props) {
    return (
        <span className="label" label-data={props.text}>{props.text}</span>
    )
}

export default Label;