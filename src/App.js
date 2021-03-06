import React from 'react';
import {connect} from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './ErrorBoundry';

import {setSearchField} from './actions';

const mapStateToProps = state =>{
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }

    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        console.log(searchField)
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);