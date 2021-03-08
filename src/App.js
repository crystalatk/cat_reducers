import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cat from "./components/Cat";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cat />
      </div>
    </Provider>
  );
}

export default App;
