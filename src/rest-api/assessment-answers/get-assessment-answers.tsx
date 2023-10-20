import { API_ROUTES } from "@/utilities/api-routes";
import { http } from "@/utilities/axios";
import { useQuery } from "react-query";

export interface AssessmentAnswer {
    id: number;
    answer: string;
    assessmentId: number;
    questionId: number;
    assessmentQuestion: AssessmentQuestion;
    userId: number;
    score: number;
}

export interface AssessmentQuestion {
    question: string;
    categoryId: number;
    level: number;
    order: number;
    type: string;
}

export const getAssessmentAnswers = async () => {
    const { data } = await http.get(API_ROUTES.ASSESSMENT_ANSWERS);
    return data;
}

export const useGetAssessmentAnswersQuery = () => {
    return useQuery<AssessmentAnswer[], Error>([API_ROUTES.ASSESSMENT_ANSWERS], () =>
        getAssessmentAnswers(),
        {
            retry: false,
        }
    );
};