import Person from "./Person";
import Product from "./Product";
function App() {
  return (
    <div>
      <Person name="leko" age={12} interests="racing" />
      <Product name="apple" price={3} type="fruit" />
    </div>
  );
}
export default App;
