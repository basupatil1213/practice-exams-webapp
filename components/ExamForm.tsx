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
}

interface ExamFormProps {
  questions: Question[]
  examType: 'specialist' | 'associate'
}

export default function ExamForm({ questions, examType }: ExamFormProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [result, setResult] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const score = await submitExam(answers, examType)
    setResult(score)
  }

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  if (result !== null) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-xl font-bold mb-4">Exam Results</h2>
        <p className="text-lg">Your score: {result}%</p>
        <Button onClick={() => setResult(null)} className="mt-4">Retake Exam</Button>
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

