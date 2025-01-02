'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { submitExam } from '@/app/lib/actions'

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: string
  explanation: string
}

interface ExamFormProps {
  questions: Question[]
}

interface Result {
  id: number
  userAnswer: string
  correctAnswer: string
  isCorrect: boolean
  explanation: string
}

export default function ExamForm({ questions }: ExamFormProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [results, setResults] = useState<{ score: number, results: Result[] } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const examResults = await submitExam(answers)
    setResults(examResults)
  }

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  if (results !== null) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Exam Results</h2>
        <p className="text-xl text-center">Your score: {results.score}%</p>
        <div className="space-y-4">
          {results.results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={result.isCorrect ? "border-green-500" : "border-red-500"}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Question {result.id}: {questions[index].text}</h3>
                  <p className="mb-2">Your answer: {result.userAnswer}</p>
                  <p className="mb-2">Correct answer: {result.correctAnswer}</p>
                  <p className={`font-semibold ${result.isCorrect ? "text-green-600" : "text-red-600"}`}>
                    {result.isCorrect ? "Correct" : "Incorrect"}
                  </p>
                  <p className="mt-2">{result.explanation}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <Button onClick={() => setResults(null)} className="mt-4">Retake Exam</Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Question {question.id}: {question.text}</h3>
                <RadioGroup onValueChange={(value) => handleAnswerChange(question.id, value)}>
                  {question.options.map((option, optionIndex) => (
                    <div className="flex items-center space-x-2" key={optionIndex}>
                      <RadioGroupItem value={option} id={`q${question.id}-option${optionIndex}`} />
                      <Label htmlFor={`q${question.id}-option${optionIndex}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button type="submit" className="mt-6">Submit Exam</Button>
      </motion.div>
    </form>
  )
}

