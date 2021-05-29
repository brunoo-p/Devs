import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Application, SettingsProfile } from './Pages';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/developers" component={Application}/>
                <Route path="/settings" component={SettingsProfile}/>
            </Switch>
        </BrowserRouter>
    )
}
