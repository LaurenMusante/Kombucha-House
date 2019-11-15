import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/keglist' component={KegList} />
                <Route path='/newkegform' component={NewKegForm} />
            </Switch>

        </div>
    );
}

export default App;