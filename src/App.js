import './App.css';
import Button from "./Button";

function App() {
    const user = "Mahmoud";
    const job = "Software Developer";
    // generate a random number between 0 and 1
    const randomNumber = Math.random();
    const condition = randomNumber > 0.5;
    let content;
    if (condition) {
        content = <p>Condition is true</p>;
    } else {
        content = <p>Condition is false</p>;
    }
    return (
        <main className="container">
            {condition ? (<h1>Hello</h1>) : (<h2>Goodbye</h2>)}
            {content}
        </main>
    );
}

export default App;
