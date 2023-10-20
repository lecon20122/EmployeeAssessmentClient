"use client"
import React from 'react'
import { AssessmentAnswer } from '../../rest-api/assessment-answers/get-assessment-answers';

interface Props {
    assessmentAnswers: AssessmentAnswer[] | undefined
}

export default function AssessmentAnswerCard({ assessmentAnswers }: Props) {
    return (
        <div className="container mx-auto text-black p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {assessmentAnswers?.map((assessmentAnswer) => (
                    <div key={assessmentAnswer.id} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">{assessmentAnswer.assessmentQuestion.question}</h3>
                        <p>{assessmentAnswer.answer}</p>
                        <small>score : {assessmentAnswer.score}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}
