'use server'

import { examQuestions } from './examQuestions'
import { salesforceAIAssociateQuestions} from './salesforceAIAssociateQuestions'

export async function submitExam(answers: Record<number, string>, examType: 'specialist' | 'associate') {
  const questions = examType === 'specialist' ? examQuestions : salesforceAIAssociateQuestions
  const totalQuestions = questions.length
  const correctAnswers = questions.filter(
    (question) => answers[question.id] === question.correctAnswer
  ).length

  const score = Math.round((correctAnswers / totalQuestions) * 100)
  return score
}

