import React from 'react';
import Leads from '../Leads/Leads';
import Prospects from '../Prospects/Prospects';

import {
    Switch,
    Route
  } from "react-router-dom";

  import './Main.scss';


function Main() {
    return (
        <div className="Main">
             <Switch>
                <Route exact path="/">
                    <Leads/>
                </Route>
                <Route path="/leads">
                    <Leads/>
                </Route>
                <Route path="/prospects">
                    <Prospects/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;