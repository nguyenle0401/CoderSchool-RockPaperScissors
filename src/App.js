
import React, { useState } from "react";
import "./App.css";
import Button from 'react-bootstrap/Button';
import ChoiceButtons from "./components/ChoiceButtons";
import ChoiceCard from "./components/ChoiceCard";
import {CHOICES,getRoundOutcome} from "./utils";





function App() {
    const [prompt, setGamePrompt] = useState("Start");
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [previousWinner, setPreviousWinner] = useState(null);
    const [gameHistory, setGameHistory] = useState([]);
    const [start, setStart] = useState(false);
 

    const onPlayerChoose = playerChoice => {
        const [result, compChoice] = getRoundOutcome(playerChoice);
        console.log("Result:", result);
        console.log("Result:", compChoice)
        const newUserChoice = CHOICES[playerChoice];
        const newComputerChoice = CHOICES[compChoice];
        setPlayerChoice(newUserChoice);
        setComputerChoice(newComputerChoice);
        if (result === "Victory!") {
            setPreviousWinner("You");
        } else if (result === "Defeat!") {
            setPreviousWinner("Computer");
        } else {
            setPreviousWinner("Tie");
        }
        setGamePrompt(result);
        gameHistory.push(result);
        setGameHistory(gameHistory);
      
    }
    const startGame = () => setStart(true);

    return (
        <div className="App">
            <div class="container">
                <div class="row-mb-3">
                    <div className="col-md-8 themed-grid-col">
                        <ChoiceCard title="Computer" imgURL={computerChoice && computerChoice.url}
                            title="Computer"
                            previousWinner={previousWinner}
                            imgURL={computerChoice && computerChoice.url}
                        />
                        <Button variant="warning" onClick={()=> startGame()}>Start</Button>
                        <h1 className = {prompt === "Victory!"? "green-text": prompt === "Defeat!"? "red-text" : "" }>{prompt==="Start"?"":prompt}</h1>
                        { start ?<ChoiceButtons onPlayerChoose={onPlayerChoose}/>: null}
                        <ChoiceCard title="You" imgURL={playerChoice && playerChoice.url}
                            title="You"
                            previousWinner={previousWinner}
                            imgURL={playerChoice && playerChoice.url}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-4 themed-grid-col">
                <h3>History</h3>
                <ul>
                    {gameHistory.map(result => {
                        return <li>{result}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}



export default App;

