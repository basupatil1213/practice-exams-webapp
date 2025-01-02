'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const exams = [
  { 
    title: 'Salesforce AI Specialist',
    description: 'Test your knowledge of Salesforce Einstein and AI capabilities.',
    link: '/practice-exams/salesforce-ai-specialist'
  },
  // Add more exams here as needed
]

export default function PracticeExams() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-8">
          Practice Exams
        </h1>
        <p className="text-xl text-gray-500 mb-12">
          Choose an exam below to start practicing and improve your skills.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={exam.link} className="block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {exam.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {exam.description}
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      Start Practice Exam
                      <span aria-hidden="true"> &rarr;</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

