import React ,{ Component } from "react";

export default class Rule extends Component{

    render(){

        return (<div>

            <h3>rules</h3>
            <li>You can choose the words to guess according to the difficulty </li>
            <li>You must guess the right word according to the prompts within a limited number of times </li>
        </div>);
    }
}