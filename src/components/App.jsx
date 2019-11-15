import React from 'react';
import Header from './Header';
import './Header.css'
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className='test'>
            <Switch>
                <Route exact path='/' component={Header} />
                <Route exact path='/keglist' component={KegList} />
                <Route path='/newkegform' component={NewKegForm} />
            </Switch>
        </div>
    );
}

export default App;