'use server'

import { examQuestions } from './examQuestions'

export async function submitExam(answers: Record<number, string>) {
  const totalQuestions = examQuestions.length
  const results = examQuestions.map(question => ({
    id: question.id,
    userAnswer: answers[question.id],
    correctAnswer: question.correctAnswer,
    isCorrect: answers[question.id] === question.correctAnswer,
    explanation: question.explanation
  }))

  const correctAnswers = results.filter(result => result.isCorrect).length
  const score = Math.round((correctAnswers / totalQuestions) * 100)

  return { score, results }
}

