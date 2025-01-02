'use server'

import { examQuestions } from './examQuestions'

export async function submitExam(answers: Record<number, string>) {
  const totalQuestions = examQuestions.length
  const correctAnswers = examQuestions.filter(
    (question) => answers[question.id] === question.correctAnswer
  ).length

  const score = Math.round((correctAnswers / totalQuestions) * 100)
  return score
}

