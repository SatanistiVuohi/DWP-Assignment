import axios from "axios"
import { useState } from "react"



function Trivia() {

    const [trivia, setTrivia] = useState('')

    const fetchTrivia = () => {
        axios.get('http://numbersapi.com/random/trivia/')
        .then(response => {
            setTrivia(response.data)
        })
    }

    return (
        <div>
        <h2>Get a random number and a fact about it!</h2>
        <button onClick={fetchTrivia} >Click me!</button>
        <p>{trivia}</p>
        </div>
    )
};

export default Trivia;