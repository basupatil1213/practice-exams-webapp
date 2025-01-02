export const examQuestions = [
  {
    id: 1,
    text: "What is the primary purpose of Salesforce Einstein?",
    options: [
      "To replace human workers",
      "To provide AI-powered insights and predictions",
      "To manage customer databases",
      "To design user interfaces"
    ],
    correctAnswer: "To provide AI-powered insights and predictions",
    explanation: "Salesforce Einstein is designed to provide AI-powered insights and predictions to enhance decision-making and improve business processes. It's not intended to replace human workers, manage databases, or design UIs."
  },
  {
    id: 2,
    text: "Which of the following is NOT a component of Einstein Language?",
    options: [
      "Intent Classification",
      "Sentiment Analysis",
      "Image Recognition",
      "Named Entity Recognition"
    ],
    correctAnswer: "Image Recognition",
    explanation: "Einstein Language focuses on natural language processing tasks. Image Recognition is part of Einstein Vision, not Einstein Language. The other options (Intent Classification, Sentiment Analysis, and Named Entity Recognition) are all components of Einstein Language."
  },
  {
    id: 3,
    text: "What type of AI model does Einstein Vision use for image classification?",
    options: [
      "Recurrent Neural Networks",
      "Convolutional Neural Networks",
      "Decision Trees",
      "Support Vector Machines"
    ],
    correctAnswer: "Convolutional Neural Networks",
    explanation: "Einstein Vision leverages Convolutional Neural Networks (CNNs), a type of deep learning model particularly well-suited for image processing tasks. CNNs excel at identifying patterns and features in images, making them ideal for image classification and object detection."
  },
  {
    id: 4,
    text: "Which Einstein feature allows you to predict the likelihood of a specific outcome?",
    options: [
      "Einstein Prediction Builder",
      "Einstein Discovery",
      "Einstein Bots",
      "Einstein Vision"
    ],
    correctAnswer: "Einstein Prediction Builder",
    explanation: "Einstein Prediction Builder is specifically designed for building predictive models.  It allows you to create custom AI models to predict various outcomes based on your data without requiring extensive coding knowledge."
  },
  {
    id: 5,
    text: "What is the main advantage of using Einstein Bots?",
    options: [
      "They can completely replace human customer service agents",
      "They can handle simple queries and free up human agents for more complex tasks",
      "They can access customer data without security concerns",
      "They can make autonomous decisions about customer accounts"
    ],
    correctAnswer: "They can handle simple queries and free up human agents for more complex tasks",
    explanation: "Einstein Bots are designed to automate simple customer interactions, freeing up human agents to focus on more complex issues.  They are not intended to replace human agents entirely, nor do they have unrestricted access to customer data or the ability to make autonomous decisions about accounts."
  },
  {
    id: 6,
    text: "Which Einstein feature is used for analyzing unstructured text data?",
    options: [
      "Einstein Language",
      "Einstein Vision",
      "Einstein Prediction Builder",
      "Einstein Analytics"
    ],
    correctAnswer: "Einstein Language",
    explanation: "Einstein Language is Salesforce's natural language processing (NLP) tool. It's designed to analyze unstructured text data to extract insights, understand sentiment, and perform other NLP tasks."
  },
  {
    id: 7,
    text: "What is the purpose of Einstein Discovery?",
    options: [
      "To create chatbots",
      "To classify images",
      "To analyze large datasets and provide actionable insights",
      "To predict customer churn"
    ],
    correctAnswer: "To analyze large datasets and provide actionable insights",
    explanation: "Einstein Discovery is a powerful tool for analyzing large datasets and uncovering hidden patterns and insights. While it can be used to predict customer churn, its primary purpose is broader than that, focusing on providing actionable insights from data."
  },
  {
    id: 8,
    text: "Which Einstein feature is used for creating custom AI models without coding?",
    options: [
      "Einstein Vision",
      "Einstein Language",
      "Einstein Prediction Builder",
      "Einstein Bots"
    ],
    correctAnswer: "Einstein Prediction Builder",
    explanation: "Einstein Prediction Builder provides a no-code/low-code interface for creating custom AI models. This allows users to build predictive models without needing extensive programming skills."
  },
  {
    id: 9,
    text: "What is the primary function of Einstein Next Best Action?",
    options: [
      "To predict sales outcomes",
      "To recommend the most appropriate action or offer for a customer",
      "To automate email responses",
      "To optimize inventory management"
    ],
    correctAnswer: "To recommend the most appropriate action or offer for a customer",
    explanation: "Einstein Next Best Action analyzes customer data to recommend the most relevant action or offer in real-time, personalizing the customer experience and improving engagement."
  },
  {
    id: 10,
    text: "Which Einstein feature is used for forecasting future values based on historical data?",
    options: [
      "Einstein Prediction Builder",
      "Einstein Forecasting",
      "Einstein Discovery",
      "Einstein Analytics"
    ],
    correctAnswer: "Einstein Forecasting",
    explanation: "Einstein Forecasting uses historical data to predict future values, helping businesses plan and make informed decisions.  It's a specialized tool for forecasting, unlike the more general predictive capabilities of Einstein Prediction Builder or Einstein Discovery."
  },
  {
    id: 11,
    text: "What is the main purpose of Einstein Analytics?",
    options: [
      "To create chatbots",
      "To provide AI-powered data analysis and visualization",
      "To classify images",
      "To automate customer service"
    ],
    correctAnswer: "To provide AI-powered data analysis and visualization",
    explanation: "Einstein Analytics provides AI-powered tools for analyzing and visualizing data, making it easier to understand complex information and identify key trends."
  },
  {
    id: 12,
    text: "Which Einstein feature is used for automating repetitive tasks?",
    options: [
      "Einstein Bots",
      "Einstein Vision",
      "Einstein Prediction Builder",
      "Einstein Automate"
    ],
    correctAnswer: "Einstein Automate",
    explanation: "Einstein Automate is designed to automate repetitive tasks and workflows, improving efficiency and reducing manual effort."
  },
  {
    id: 13,
    text: "What type of data does Einstein Vision primarily work with?",
    options: [
      "Text data",
      "Numerical data",
      "Image data",
      "Audio data"
    ],
    correctAnswer: "Image data",
    explanation: "Einstein Vision is specifically designed for processing and analyzing image data. It uses AI to perform tasks such as image classification, object detection, and more."
  },
  {
    id: 14,
    text: "Which Einstein feature is used for personalizing email content?",
    options: [
      "Einstein Engagement Scoring",
      "Einstein Content Selection",
      "Einstein Send Time Optimization",
      "Einstein Copy Insights"
    ],
    correctAnswer: "Einstein Content Selection",
    explanation: "Einstein Content Selection uses AI to personalize email content by selecting the most relevant content for each recipient based on their individual characteristics and behavior."
  },
  {
    id: 15,
    text: "What is the primary function of Einstein Lead Scoring?",
    options: [
      "To classify customer support tickets",
      "To predict which leads are most likely to convert",
      "To optimize email send times",
      "To analyze customer sentiment"
    ],
    correctAnswer: "To predict which leads are most likely to convert",
    explanation: "Einstein Lead Scoring uses AI to predict which leads are most likely to convert into customers, allowing sales teams to prioritize their efforts."
  },
  {
    id: 16,
    text: "Which Einstein feature is used for optimizing email send times?",
    options: [
      "Einstein Engagement Scoring",
      "Einstein Content Selection",
      "Einstein Send Time Optimization",
      "Einstein Copy Insights"
    ],
    correctAnswer: "Einstein Send Time Optimization",
    explanation: "Einstein Send Time Optimization uses AI to determine the optimal time to send emails to maximize engagement and open rates."
  },
  {
    id: 17,
    text: "What is the main purpose of Einstein Opportunity Scoring?",
    options: [
      "To predict which opportunities are most likely to close",
      "To classify customer support tickets",
      "To analyze customer sentiment",
      "To optimize inventory management"
    ],
    correctAnswer: "To predict which opportunities are most likely to close",
    explanation: "Einstein Opportunity Scoring uses AI to predict which sales opportunities are most likely to close, helping sales teams prioritize their efforts and improve forecasting accuracy."
  },
  {
    id: 18,
    text: "Which Einstein feature is used for analyzing customer feedback and support tickets?",
    options: [
      "Einstein Case Classification",
      "Einstein Object Detection",
      "Einstein Prediction Builder",
      "Einstein Next Best Action"
    ],
    correctAnswer: "Einstein Case Classification",
    explanation: "Einstein Case Classification uses AI to automatically classify customer support tickets and feedback, improving routing and resolution times."
  },
  {
    id: 19,
    text: "What is the primary function of Einstein Recommendation Builder?",
    options: [
      "To create chatbots",
      "To predict sales outcomes",
      "To provide personalized product recommendations",
      "To optimize email send times"
    ],
    correctAnswer: "To provide personalized product recommendations",
    explanation: "Einstein Recommendation Builder uses AI to provide personalized product recommendations to customers, increasing sales and improving customer satisfaction."
  },
  {
    id: 20,
    text: "Which Einstein feature is used for detecting and extracting objects from images?",
    options: [
      "Einstein Vision",
      "Einstein Language",
      "Einstein Object Detection",
      "Einstein Image Classification"
    ],
    correctAnswer: "Einstein Object Detection",
    explanation: "Einstein Object Detection is specifically designed for detecting and extracting objects from images. While Einstein Vision is the broader category for image-related AI tasks, Object Detection is the specific feature for this purpose. Einstein Language deals with text, and Image Classification is for categorizing entire images rather than detecting objects within them."
  }
]

