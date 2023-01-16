import './App.css';
import Button from "./Button";

function App() {
    let products = [
        {id: 1, name: "Apple", price: 1.99, emoji: "🍎"},
        {id: 2, name: "Orange", price: 1.49, emoji: "🍊"},
        {id: 3, name: "Banana", price: 0.99, emoji: "🍌"},
        {id: 4, name: "Grapes", price: 2.99, emoji: "🍇"},
    ];

    const productArticles = products.map(p =>
        <article key={p.id}>
            <h3>{p.emoji} {p.name}</h3>
            <h4>${p.price}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quibusdam!</p>
        </article>
    );

    return (
        <main className="container">
            <section/>
            <h1>Products</h1>
            {productArticles}
        </main>
    );
}

export default App;
