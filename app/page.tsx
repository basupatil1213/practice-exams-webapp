'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full space-y-8 text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Master AI Certifications with Confidence
        </h1>
        <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl">
          Practice exams designed to help you ace your AI certification tests. Start your journey to becoming a certified AI professional today!
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/practice-exams" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10">
            Start Practicing
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-12"
      >
        {[
          { title: 'Comprehensive Coverage', description: 'Our practice exams cover all major AI certifications.' },
          { title: 'Real Exam Experience', description: 'Questions designed to mimic the actual certification exams.' },
          { title: 'Detailed Explanations', description: 'Learn from your mistakes with in-depth answer explanations.' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-base text-gray-500">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

