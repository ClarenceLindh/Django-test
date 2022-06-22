// import Products from './components/products';
// import AddProduct from "./components/AddProduct";
import Products from "./features/products/Products";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products n priceZz</h1>
      </header>
      {/* <AddProduct /> */}
      <Products />
    </div>
  );
}

export default App;
