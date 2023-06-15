

function Tweet (props) {
    return (
        <div>
            <span>Name: {props.name} </span>
            <span>Username: {props.username} </span>
            <span>Date: {props.date} </span>
            <p>Msg: {props.message} </p>
        </div>
    )
}