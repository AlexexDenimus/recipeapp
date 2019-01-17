import React, {Component} from 'react';

export default class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        return this.state.hasError ?
            <h1>Ooops</h1> :
            this.props.children 
    }
}