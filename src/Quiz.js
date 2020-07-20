import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    render() {
        const isQuizEnd = true;
        return (
            <div>
                    {isQuizEnd && <QuizEnd />}
                    
                    {!isQuizEnd && <QuizQuestion
                        quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}
                    />}
            </div>
        )
        
    }

    constructor(props) {
        super(props)
        this.state = {quiz_position: 1}
    }
}

export default Quiz