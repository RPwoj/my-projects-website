function ButtonLink(props) {
    return (
        <a href={props.url} className="btn" link-type={props.linkType} target="_blank">{props.text}</a>
    ) 
}

export default ButtonLink;