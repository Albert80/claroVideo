import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import ListMovies from './components/ListMovies';
import Detail from './components/Detail';


const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/mexico/gen_scifi' />
            </Route>
            <Route
                name="gen_scifi"
                exact
                path="/mexico/gen_scifi"
                component={ListMovies} />
            <Route
                name="details"
                exact
                path="/mexico/vcard/gen_scifi/:title/:id"
                component={Detail} />
        </Switch>
    </div>
);

export default BaseRouter;