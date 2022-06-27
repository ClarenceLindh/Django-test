import PostProduct from "./features/products/PostProduct";
import Products from "./features/products/Products";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Some Store</h1>
      </header>
      <PostProduct />
      <Products />
    </div>
  );
}

export default App;
