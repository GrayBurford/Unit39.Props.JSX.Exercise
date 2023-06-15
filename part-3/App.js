
function App () {
    return (
        <div>
            <Person 
                name="Lennart"
                age={39}
                hobbies={["climbing", "teaching", "coaching"]}
            />
            <Person 
                name="Xiao Ming"
                age={2}
                hobbies={["Meowing", "chomping", "upside-downing"]}
            />
            <Person 
                name="TracyGasiewicz"
                age={64}
                hobbies={["traveling", "drinking", "pilates"]}
            />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))