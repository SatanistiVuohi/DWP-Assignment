import axios from "axios"
import { useState } from "react"

function Trivia() {

    const [trivia, setTrivia] = useState('')
    const [year, setYear] = useState('')
    const [date, setDate] = useState('')
    const [math, setMath] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    const categories = [
        { name: "Trivia", value: "trivia" },
        { name: "Year", value: "year" },
        { name: "Date", value: "date" },
        { name: "Math", value: "math" }
    ];

    const fetchTriviaFact = () => {
        axios.get('http://numbersapi.com/random/trivia/')
            .then(response => {
                setTrivia(response.data)
            })
    }
    const fetchYearFact = () => {
        axios.get('http://numbersapi.com/random/year/')
            .then(response => {
                setYear(response.data)
            })
    }
    const fetchDateFact = () => {
        axios.get('http://numbersapi.com/random/date/')
            .then(response => {
                setDate(response.data)
            })
    }
    const fetchMathFact = () => {
        axios.get('http://numbersapi.com/random/math/')
            .then(response => {
                setMath(response.data)
            })
    }

    const handleTrivia = () => {
        if (selectedCategory === 'trivia') {
            fetchTriviaFact()
        } else if (selectedCategory === 'year') {
            fetchYearFact()
        } else if (selectedCategory === 'date') {
            fetchDateFact()
        } else if (selectedCategory === 'math') {
            fetchMathFact()
        }
    }

    return (
        <div>
            <h2>Get a random number and a fact about it!</h2>
            <span>Select category: </span>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                    <option key={category.value} value={category.value}>{category.name}</option>
                ))}
            </select> 

            <button onClick={handleTrivia}>Gimme facts!</button>
            <p>{selectedCategory === 'trivia' && trivia}
            {selectedCategory === 'year' && year}
            {selectedCategory === 'date' && date}
            {selectedCategory === 'math' && math}
            </p>
        </div>
    )
};

export default Trivia;