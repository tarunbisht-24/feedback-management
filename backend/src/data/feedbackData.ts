interface Feedback {
    id: number;
    name: string;
    feedback: string;
  }
  
  let feedbacks: Feedback[] = [];
  
  export const getFeedbacks = (): Feedback[] => feedbacks;
  
  export const addFeedback = (feedback: Feedback): void => {
    feedbacks.push(feedback);
  };
  
  export const clearFeedbacks = (): void => {
    feedbacks = [];
  };
  