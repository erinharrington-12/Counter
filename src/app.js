// JavaScript source code
import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            liked: false,
            count: 1
        };
    }
    
    increaseCounter() {
        this.setState(prevState => { return {count: prevState.count + 1} } );
    }

    resetCounter() {
        this.setState({count: 0});
    }
    render() {
        if (this.state.liked) {
            if (((this.state.count) % 5 == 0) && ((this.state.count) != 0)){
                return  (
                <>
                <p> This was a multiple of 5 :) </p>
                    <div class = "counterBox"> Number of times you have clicked the button: 
                        <div class = "centerDisplay">{this.state.count} </div>
                    </div>
                    <div class = "wrapper">
                        <button class = "countButton" onClick={this.increaseCounter.bind(this)}> Click to increase </button>
                        <button class = "resetButton" onClick={this.resetCounter.bind(this)}> Click to reset </button>
                    </div>
                </>
                );
                 
            }
           
            return  (
                <>
                    <div class = "counterBox"> Number of times you have clicked the button: 
                        <div class = "centerDisplay">{this.state.count} </div>
                    </div>
                    <div class = "wrapper">
                        <button class = "countButton" onClick={this.increaseCounter.bind(this)}> Click to increase </button>
                        <button class = "resetButton" onClick={this.resetCounter.bind(this)}> Click to reset </button>
                    </div>
                </>
            );
            
        }   
        return (
            <>
                <h1>Let's make a counter</h1>
                <button onClick={() => this.setState({ liked: true }) }>Click to start counter!</button>
                
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));