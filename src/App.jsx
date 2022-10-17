import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Menu";

import Cabecalho from "./layout/Cabecalho";
import Home from "./pages/Home";
import ClassicRock from "./pages/ClassicRock";
import HeavyMetal from "./pages/HeavyMetal";

import "./estilo.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <main>
          <Menu />
          <section>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/classicrock">
                <ClassicRock />
              </Route>
              <Route path="/heavymetal">
                <HeavyMetal />
              </Route>
            </Switch>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
