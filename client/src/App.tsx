import "./App.css";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div>
      <h1>Item management</h1>
      <ItemForm />
      <ItemList />
    </div>
  );
}

export default App;
