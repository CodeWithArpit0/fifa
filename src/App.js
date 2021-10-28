import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
  