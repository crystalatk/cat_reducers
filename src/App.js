import { Provider } from "react-redux";
import { store } from "./redux/store";
import Input from "./containers/InputContainer";
import CatList from "./containers/CatListContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Input />
        <CatList />
      </div>
    </Provider>
  );
}

export default App;
