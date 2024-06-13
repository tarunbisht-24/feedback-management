interface Feedback {
    name: string;
    feedback: string;
  }
  
  export class FeedbackService {
    private feedbacks: Feedback[] = [];
  
    getAllFeedback(): Feedback[] {
      return this.feedbacks;
    }
  
    submitFeedback(feedback: Feedback): void {
      this.feedbacks.push(feedback);
    }
  }
  