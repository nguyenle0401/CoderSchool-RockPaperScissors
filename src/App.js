
import React, { useState } from "react";
import "./App.css";
import ChoiceButtons from "./components/ChoiceButtons";
import ChoiceCard from "./components/ChoiceCard";
import {CHOICES,getRoundOutcome} from "./utils";





function App() {
    const [prompt, setGamePrompt] = useState("Start");
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [previousWinner, setPreviousWinner] = useState(null);
    const [gameHistory, setGameHistory] = useState([]);
 

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
                        <h1>{prompt}</h1>
                        <ChoiceButtons onPlayerChoose={onPlayerChoose} />
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

// import React from 'react'

// export default function App() {
//   const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
//   return (
//     <div>
//       <div className="App">
//         <div className="container">
//           <div className="row mb-3">
//             <div className="col-md-8 themed-grid-col">
//               <ChoiceCard title="You" imgURL={choices.rock} winner={this.state.winnerPerson}
//               />
//               <h1>{prompt}</h1>
//               <ChoiceCard title="Computer" winner={true} imgURL={choices.paper}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default App;






// const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");

// function App() {
//   const [prompt, setGamePrompt] = useState("Start!");
//   return (
//           <div className="App">
//             <div className="container">
//               <div className="row mb-3">
//                 <div className="col-md-8 themed-grid-col">
//                   <ChoiceCard title="You" imgURL={choices.rock} winner={this.state.winnerPerson}
//                   />
//                   <h1>{prompt}</h1>
//                   <ChoiceCard title="Computer" winner={true} imgURL={choices.paper}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       }

//       export default App;


// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       winnerPerson: false
//     }

//   }



//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//           <div className="row mb-3">
//             <div className="col-md-8 themed-grid-col">
//               <ChoiceCard title="You" imgURL={choices.rock} winner={this.state.winnerPerson}
//                 />
//               <h1>{prompt}</h1>
//               <ChoiceCard title="Computer" winner={true} imgURL={choices.paper}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

