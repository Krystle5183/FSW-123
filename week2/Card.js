function Card(props) {
    
    

    return (
        <div style = {props.style} className = 'box'>
            {props.title}<br></br>
            {props.subtitle}<br></br>
            {props.desc}
        </div>
    );
}

export default Card;