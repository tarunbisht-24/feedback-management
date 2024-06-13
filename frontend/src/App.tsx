import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { getAllFeedback } from './api';

interface Feedback {
  name: string;
  feedback: string;
}

const App: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const data = await getAllFeedback();
      setFeedbacks(data);
    };

    fetchFeedback();
  }, []);

  const addFeedback = (feedback: Feedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Simple Feedback Management System</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <FeedbackForm addFeedback={addFeedback} />
      </div>
      <div className="mt-6">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
};

export default App;
