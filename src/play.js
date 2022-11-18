import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
let wo ;
function getWord(id) {
    let wordList = [];
    if(id==1)
        wordList = [{
            word: "aim",
            hint: "a purpose or intention"
        },
            {
                word: "gold",
                hint: "a yellow precious metal"
            },
            {
                word: "ebay",
                hint: "online shopping site"
            },
            {
                word: "bugs",
                hint: "related to programming"
            },
            {
                word: "gif",
                hint: "a file format for image"
            },
            {
                word: "map",
                hint: "diagram represent of an area"
            },
            {
                word: "png",
                hint: "a image file format"
            },
            {
                word: "gpu",
                hint: "computer component"
            },
            {
                word: "java",
                hint: "programming language"
            },
            {
                word: "mars",
                hint: "planet of our solar system"
            },
            {
                word: "html",
                hint: "markup language for the web"
            },
            {
                word: "air",
                hint: "related to a gas"
            },
            {
                word: "idea",
                hint: "a thought or suggestion"
            },
            {
                word: "key",
                hint: "small piece of metal"
            },
            {
                word: "nile",
                hint: "largest river in the world"
            },
            {
                word: "rain",
                hint: "related to a water"
            },
            {
                word: "svg",
                hint: "a vector image format"
            },
            {
                word: "jpeg",
                hint: "a image file format"
            }
        ]
    if(id==2)
         wordList = [

            {
                word: "venus",
                hint: "planet of our solar system"
            },
            {
                word: "chess",
                hint: "related to a indoor game"
            },
            {
                word: "viber",
                hint: "a social media app"
            },
            {
                word: "excel",
                hint: "microsoft product for windows"
            },
            {
                word: "mysql",
                hint: "a relational database system"
            },
            {
                word: "nepal",
                hint: "developing country name"
            },
            {
                word: "flute",
                hint: "a musical instrument"
            },
            {
                word: "tesla",
                hint: "unit of magnetic flux density"
            },

            {
                word: "proxy",
                hint: "related to server application"
            },
            {
                word: "email",
                hint: "related to exchanging message"
            },
            {
                word: "egypt",
                hint: "a country name"
            },
            {
                word: "joker",
                hint: "psychological thriller film"
            },
            {
                word: "dubai",
                hint: "developed country name"
            },
            {
                word: "photo",
                hint: "representation of person or scene"
            }
        ]
    if(id==3)
         wordList = [
            {
                word: "python",
                hint: "programming language"
            },
            {
                word: "guitar",
                hint: "a musical instrument"
            },
            {
                word: "golang",
                hint: "programming language"
            },
            {
                word: "coding",
                hint: "related to programming"
            },
            {
                word: "matrix",
                hint: "science fiction movie"
            },

            {
                word: "avatar",
                hint: "epic science fiction film"
            },

            {
                word: "mental",
                hint: "related to the mind"
            },

            {
                word: "island",
                hint: "land surrounded by water"
            },
            {
                word: "hockey",
                hint: "a famous outdoor game"
            },
            {
                word: "github",
                hint: "code hosting platform"
            },

            {
                word: "silver",
                hint: "precious greyish-white metal"
            },
            {
                word: "mobile",
                hint: "an electronic device"
            },


            {
                word: "google",
                hint: "famous search engine"
            },
            {
                word: "venice",
                hint: "famous city of waters"
            },
            {
                word: "crypto",
                hint: "related to cryptocurrency"
            },


            {
                word: "server",
                hint: "related to computer or system"
            },

            {
                word: "search",
                hint: "act to find something"
            }
        ]
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    wo = ranItem;
    // this.state.hint =  ranItem.hint;
    return ranItem
}

function getRemainingGuess(id) {
    if(id==1)
        return 4
    if(id==2)
        return 6
    if(id==3)
        return 8
}

export default class Play extends Component{
    constructor(props) {
        super(props);

        this.state = {
            word: getWord(this.props.match.params.id).word.toLowerCase().split(''),
            originalWord: getWord(this.props.match.params.id).word.split(''),
            remainingGuesses: getRemainingGuess(this.props.match.params.id),
            guessList: [],
            status: 'Playing',
            hint : wo.hint,
            id :this.props.match.params.id
        };


    }


    componentDidMount() {
        window.addEventListener('keypress', this.handleKeyPress);
    }

    setStatus = () => {
        const finished = this.state.word.every((letter) => {
            return this.state.guessList.includes(letter) || letter == ' ';
        });

        let stateVal = '';
        if (this.state.remainingGuesses == 0) {
            stateVal = 'Failed';
        } else if (finished) {
            stateVal = 'Success';
        } else {
            stateVal = 'Playing';
        }

        this.setState({
            status: stateVal,
        });
    };

    getStatusMessage = () => {
        if (this.state.status == 'Playing') {
            return `Guesses Remaining : ${this.state.remainingGuesses}`;
        } else if (this.state.status == 'Failed') {
            return `Nice try, the word was ${this.state.originalWord.join('')}`;
        } else {
            return `Great job! You guessed the word`;
        }
    };

    hint = () => {
        if (this.state.status != 'Playing') {
            return;
        }

        return 'Hint : We love you 3000';
    };

    getPuzzle = () => {
        if (this.state.status != 'Playing') {
            return;
        }

        let puzzle = '';
        this.state.originalWord.forEach((letter) => {
            puzzle =
                puzzle +
                (this.state.guessList.includes(letter.toLowerCase()) || letter == ' '
                    ? letter
                    : '*');
        });

        return puzzle;
    };

    makeGuess = (letter) => {
        if (this.state.status != 'Playing') {
            return;
        }
        const guessedAlready = this.state.guessList.includes(letter.toLowerCase());

        if (letter.length > 0 && letter != ' ' && !guessedAlready) {
            const arr = this.state.guessList;

            arr.push(letter.toLowerCase());

            this.setState({
                guessList: arr,
            });

            const correctGuess = this.state.word.includes(letter.toLowerCase());

            if (!correctGuess) {
                this.setState({
                    remainingGuesses: this.state.remainingGuesses - 1,
                });
            }
        }

        this.setStatus();
    };

    handleKeyPress = (event) => {
        this.makeGuess(event.key);
    };

    render() {
        return (
            <div>
                {this.state.status == 'Playing' ? (
                    <h1>GUESS IT (Press any key)</h1>
                ) : this.state.status == 'Success' ? (
                    <h1>YOU GUESSED IT!</h1>
                ) : (
                    <h1>OH NO!</h1>
                )}
                <h3>{this.state.hint}</h3>
                <h3>{this.getPuzzle()}</h3>
                <h3>{this.getStatusMessage()}</h3>
                <button
                    onClick={() => {
                        this.setState({
                            word: getWord(this.props.match.params.id).word.toLowerCase().split(''),
                            originalWord: wo.word.split(''),
                            remainingGuesses: getRemainingGuess(this.props.match.params.id),
                            guessList: [],
                            status: 'Playing',
                            hint:wo.hint
                        });
                    }}
                >
                    Play Again
                </button>
            </div>
        );
    }
}



