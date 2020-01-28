import React from "react";
import "./App.css";
import Header from './component/Header';
import Home from "./component/Home";
import FormValidation from './component/FormVaidation';
import SortableDemo from './component/SortableDemo';
import PrintConfirmation from './component/PrintConfirmation';
import DocumentsDetails from './component/DocumentForm/DocumentDetails';
import Login from './component/LoginForm/Login';
import Login2 from './component/LoginForm/Login2';
import CpmponentParent from './component/ContextAPI/CpmponentParent';
import ApiView from './component/ReduxExample/Component/ApiView';
import TodoList from './component/TodoList/TodoList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form-validation" component={FormValidation} />
          <Route path="/sortable-demo" component={SortableDemo} />
          <Route path="/printconfirmation" component={PrintConfirmation} />
          <Route path="/documentsdetails" component={DocumentsDetails} />
          <Route path="/login" component={Login} />
          <Route path="/login2" component={Login2} />
          <Route path="/contextapi" component={CpmponentParent} />
          <Route path="/apiview" component={ApiView} />
          <Route path="/todo" component={TodoList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
