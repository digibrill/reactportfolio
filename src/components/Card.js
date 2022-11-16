export default function Card(props) {
    return(
        <div className="card">
            <img src={`./images/${props.img}`} />
            <div className="card--text">
                <span className="client--title">{props.title}</span>
                <span className="client--tech">{props.tech}</span>
                <span className="client--details">{props.details}</span>
            </div>
        </div>
    )
}
