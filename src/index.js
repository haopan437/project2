import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import './style.css';
import Play from "./play";

import Rule from "./rule";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {


        return (

            <Router>
            <div>


                <h3>WellComeGuessWorld</h3>


                <Link
                    to={
                        '/play/1'

                    }
                >
                    <button>choose  degree one</button>

                </Link>

                <Link
                    to={
                        '/play/2'
                    }
                >
                    <button>choose  degree two</button>

                </Link>

                <Link
                    to={
                        '/play/3'
                    }
                >
                    <button>choose  degree three</button>

                </Link>
                <hr />

                <Link
                    to="/rule"
                >

                    <button>Playrule</button>

                </Link>
                <hr />
                <Switch>
                    <Route exact path = "/play/:id" component={Play}  >
                        <Play/>
                    </Route>
                    <Route exact path = "/rule/"  component={Rule} >
                        <Rule/>
                    </Route>
                </Switch>


                <hr />

                <Link
                    to={{
                        pathname: '/'

                    }}
                >
                    <button>reset</button>

                </Link>
            </div>
            </Router>

        );
    }
}

render(<App />, document.getElementById('root'));
