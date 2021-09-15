import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { Header } from "./components/Header";
import StepTwo from "./pages/StepTwo";
import StepOne from "./pages/StepOne";
import StepThree from "./pages/StepThree";
import Result from "./pages/Result";

function App() {
  return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={StepOne} />
            <Route path="/step2" component={StepTwo} />
            <Route path="/step3" component={StepThree} />
            <Route path="/final" component={Result} />
          </Switch>
        </Router>
      </>
  );
}

export default App;