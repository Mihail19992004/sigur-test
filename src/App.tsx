import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import StepOne from "./pages/StepOne";
import Result from "./pages/Result";
import { StepTwo } from "./pages/StepTwo";
import { StepThree } from "./pages/StepThree";

function App() {
  return (
    <>
      {/*Роутинг страниц*/}
      <Header />
      <Router>
        <Switch>
          {/*Роут на первый шаг*/}
          <Route exact path="/" component={StepOne} />
          {/*Роут на второй шаг*/}
          <Route exact path="/step2" component={StepTwo} />
          {/*Роут на третий шаг*/}
          <Route exact path="/step3" component={StepThree} />
          {/*Роут на страницу с результатом*/}
          <Route exact path="/final" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
