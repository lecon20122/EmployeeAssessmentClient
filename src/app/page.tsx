"use client"
import AssessmentAnswerCard from '@/components/AssessmentAnswer/AssessmentAnswerCard'
import Image from 'next/image'
import { useGetAssessmentAnswersQuery } from '../rest-api/assessment-answers/get-assessment-answers';

export default function Home() {

  const { data, isLoading, isSuccess } = useGetAssessmentAnswersQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data)

  return (
    <AssessmentAnswerCard assessmentAnswers={data} />
  )
}
