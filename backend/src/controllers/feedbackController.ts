import { Request, Response } from 'express';
import { FeedbackService } from '../services/feedbackService';

const feedbackService = new FeedbackService();

export const getAllFeedback = (req: Request, res: Response) => {
  const feedbacks = feedbackService.getAllFeedback();
  res.json(feedbacks);
};

export const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).json({ message: 'Name and feedback are required' });
  }
  feedbackService.submitFeedback({ name, feedback });
  res.status(201).json({ message: 'Feedback submitted successfully' });
};
