import ExamForm from '@/components/ExamForm'
import { salesforceAIAssociateQuestions } from '@/app/lib/salesforceAIAssociateQuestions'
import { Card, CardContent } from "@/components/ui/card"

export default function SalesforceAIAssociate() {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">Salesforce AI Associate Practice Exam</h1>
          <p className="text-gray-600">This practice exam consists of 20 multiple-choice questions. Good luck!</p>
        </CardContent>
      </Card>
      <ExamForm questions={salesforceAIAssociateQuestions} examType="associate" />
    </div>
  )
}

