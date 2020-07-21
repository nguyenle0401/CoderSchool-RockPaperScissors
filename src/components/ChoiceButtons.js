import React from 'react'

export default function ChoiceButtons(props) {
    return (
        
            <div className="container">
                            <button className="btn btn-success btn-lg"
                                onClick={() => props.onPlayerChoose("rock")} >Paper
                            </button>
                            <button className="btn btn-success btn-lg"
                                onClick={() => props.onPlayerChoose("paper")} >Scissors
                            </button>
                            <button className="btn btn-success btn-lg"
                                onClick={() => props.onPlayerChoose("scissors")} >Rock
                            </button>
                        </div>
    )
}

