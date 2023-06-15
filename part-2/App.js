
function App () {
    return (
        <div>
            <Tweet 
                username="GrayB"
                name="Gray" 
                date="Aug. 1st"
                message="The quick brown fox jumps over the lazy dog."
            />
            <Tweet 
                username="TinaW"
                name="Tina" 
                date="Mar 31st"
                message="BACH"
            />
            <Tweet 
                username="MingMing"
                name="Xiao Ming" 
                date="Feb. 29th"
                message="MEOWWWWWW"
            />
            <Tweet 
                username="Bensley"
                name="BenBen" 
                date="July 28th"
                message="Feed me"
            />

        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
