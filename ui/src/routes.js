import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Application } from './Pages';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/developers" component={Application}/>
            </Switch>
        </BrowserRouter>
    )
}
