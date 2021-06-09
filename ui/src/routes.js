import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Chat, Home, Application, SettingsProfile } from './Pages';

export default function Routes() {


    const PrivateRoute = ({component: Component, ...rest}) => {
        return(
            <Route
                {...rest} render={props => (
                    localStorage.getItem('user')
                                    
                    
                    ? <Component {...props} />
                    
                    : <Redirect to="/" /> 
                )}
            />
        )
    }
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/chat" component={Chat}/>
                <PrivateRoute path="/developers" component={Application}/>
                <PrivateRoute path="/settings" component={SettingsProfile}/>
            </Switch>
        </BrowserRouter>
    )
}
