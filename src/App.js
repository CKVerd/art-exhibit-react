import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
