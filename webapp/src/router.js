import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Jump from './jump';
import Func from './func';
import Event from './event';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/jump" component={Jump}/>
            <Route exact path="/func" component={Func}/>
            <Route exact path="/event" component={Event}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;