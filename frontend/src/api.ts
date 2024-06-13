export const getAllFeedback = async () => {
  const response = await fetch('http://localhost:3001/feedback');
  return response.json();
};

export const submitFeedback = async (name: string, feedback: string) => {
  const response = await fetch('http://localhost:3001/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, feedback }),
  });
  return response.json();
};
