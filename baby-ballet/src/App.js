import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./components/Context/UserContextProvider";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <UserContextProvider>
            <Root />
          </UserContextProvider>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
