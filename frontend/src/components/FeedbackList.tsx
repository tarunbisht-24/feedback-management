import React from 'react';

interface Feedback {
  name: string;
  feedback: string;
}

interface FeedbackListProps {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Feedback List</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
            <span className="font-bold">{feedback.name}:</span> <span>{feedback.feedback}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
