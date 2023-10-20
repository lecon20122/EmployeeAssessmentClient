"use client"
import AssessmentAnswerCard from '@/components/AssessmentAnswer/AssessmentAnswerCard'
import Image from 'next/image'
import { useGetAssessmentAnswersQuery } from '../rest-api/assessment-answers/get-assessment-answers';
import SkeletonCard from '@/components/shared/skeletonCard';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ROUTES } from '@/utilities/routes';

export default function Home() {

  const { data, isLoading, isSuccess } = useGetAssessmentAnswersQuery()
  const { status } = useSession();


  if (status === 'unauthenticated') {
    return <div className='flex justify-center text-black p-4'>
      {/* button says you need to sign in */}
      <div className='flex justify-center text-black p-4'>
        <Link href={ROUTES.SIGNIN} className="text-white">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  }


  if (isLoading) {
    return <SkeletonCard times={8} />
  }

  if (!isSuccess) {
    return <><div className='flex justify-center text-black p-4'><svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="22" stroke="#FF0000" stroke-width="4" />
      <path
        d="M18 18L30 30M18 30L30 18"
        stroke="#FF0000"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
    </div>
      <p className='text-2xl font-semibold text-black text-center'>Something went wrong</p>
    </>
  }

  return (
    <AssessmentAnswerCard assessmentAnswers={data} />
  )
}
