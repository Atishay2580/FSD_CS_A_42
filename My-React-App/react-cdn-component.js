const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent);

function Greeting({name,age}) {
    return (
        <h1>Hello {name}! you are {age} years old</h1>
    )
}

Greeting.defaultProps = {
    name: "user",
    age: 18
}

const App = () => {
    return (
        <div>
            <Greeting name="Atishay"  age={21} />
            <ul>
                <li>CSE</li>
                <li>ECE</li>
                <li>CS</li>
            </ul>
        </div>
    )
}

root.render(<App />)