import React, {Component} from 'react';
import './App.css';
import Child from "./components/childs/child";
import Clear from "./components/childs/clear";
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {num:0}
    }

    changeIt(num){
        this.state.num = num
        this.setState({num:num})
    }


    render(){
        return (

            <div className="">
                <h1>count:{this.state.num}</h1>
                <Child num = {this.state.num} myfun={this.changeIt.bind(this)}></Child>
                <Child num = {this.state.num} myfun={this.changeIt.bind(this)}></Child>
                <Clear num = {this.state.num} myfun={this.changeIt.bind(this)}></Clear>
                <Child num = {this.state.num} myfun={this.changeIt.bind(this)}></Child>
            </div>

        );
    }

}

export default App;