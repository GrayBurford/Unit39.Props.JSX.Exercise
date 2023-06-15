

function Person (props) {
    let vote;
    props.age >= 18 ? vote="please go vote!" : vote="you must be 18";

    let slice;
    props.name.length > 8 ? slice = props.name.slice(0,8) : slice = props.name;

    return (
        <div>
            <p>Learn some information about this person: {slice} is {props.age} years old.</p>
            <h3>{vote}</h3>
            <ul>
                {props.hobbies.map(hobby => (
                    <li>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}