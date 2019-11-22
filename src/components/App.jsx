import React from 'react';
import Header from './Header';
import './Header.css';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterKegList: []
        };
        this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    }
    handleAddingNewKeg(newKeg){
//newKeg is the argument that contains the information from our form.. 
        var newMasterKegList = this.state.masterKegList.slice();
        newMasterKegList.push(newKeg);
        this.setState({ masterKegList: newMasterKegList });
    }
    render(){
        return (
            <div className='test'>
                <Switch>
                    <Route exact path='/' component={Header} />
                    <Route path='/keglist' render={() => <KegList kegList={this.state.masterKegList} />} />
                    <Route path='/newkegform' render={() => <NewKegForm onNewKegCreation={this.handleAddingNewKeg} />} />
                {/* <Route path='/editkeg' component={EditKeg} /> */}
            </Switch>
        </div>
    );
  }
}

export default App;