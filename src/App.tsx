import { Provider } from "react-redux";
import People from "./components/People/People";
import { store } from "./store/store";
import 'antd/dist/antd.css';
import AppController from "./components/AppController/AppController";

function App() {
  return (
    <Provider store={store}>
      <AppController />
    </Provider>
  );
}

export default App;
