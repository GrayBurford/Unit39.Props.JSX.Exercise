
function App () {
    return (
        <div>
            <FirstComponent />
            <FirstComponent />
            <FirstComponent />
            <NamedComponent name='Gray' />
            <NamedComponent name='Tina' />
            <NamedComponent name='Bensley' />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
