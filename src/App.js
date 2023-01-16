import './App.css';
import Counter from "./Counter";
import { products } from "./data";

function App() {

    const productArticles = products.map(p =>
        <article key={p.id}>
            <h3>{p.emoji} {p.name}</h3>
            <h4>${p.price}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quibusdam!</p>
            <Counter message="Number bought"/>
        </article>
    );

    return (
        <main className="container">
            <section/>
            <h1>📦️ Products</h1>
            <div className="grid">{productArticles}</div>
        </main>
    );
}

export default App;
