import ExamForm from '@/components/ExamForm'
import { examQuestions } from '@/app/lib/examQuestions'
import { Card, CardContent } from "@/components/ui/card"

export default function SalesforceAISpecialist() {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">Salesforce AI Specialist Practice Exam</h1>
          <p className="text-gray-600">This practice exam consists of 20 multiple-choice questions. Good luck!</p>
        </CardContent>
      </Card>
      <ExamForm questions={examQuestions} />
    </div>
  )
}

