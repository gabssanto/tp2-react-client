import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inbox from './pages/Inbox';
import Login from './pages/Login';
import Register from './pages/Register';
import Sent from './pages/Sent';
import Write from './pages/Write';
import Mail from "./pages/Mail";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/inbox' exact component={Inbox} />
        <Route path='/inbox/:id' exact component={Mail} />
        <Route path='/' exact component={Login} />
        <Route path='/sent' exact component={Sent} />
        <Route path='/write' exact component={Write} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
