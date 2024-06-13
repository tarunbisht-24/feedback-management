import React, { useState } from 'react';
import { submitFeedback } from '../api';

interface FeedbackFormProps {
  addFeedback: (feedback: { name: string, feedback: string }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitFeedback(name, feedback);
    addFeedback({ name, feedback });
    setName('');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
