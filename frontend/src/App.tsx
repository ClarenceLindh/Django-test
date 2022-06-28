import PostProduct from "./components/PostProduct/PostProduct";
import ListProducts from "./components/ListProducts/ListProducts";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Some Store</h1>
      </header>
      <PostProduct />
      <ListProducts />
    </div>
  );
}

export default App;
