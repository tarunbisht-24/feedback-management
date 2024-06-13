import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getFeedbacks, addFeedback, clearFeedbacks } from './data/feedbackData';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Clear feedbacks each time the server starts
clearFeedbacks();

app.get('/feedback', (req, res) => {
  res.json(getFeedbacks());
});

app.post('/feedback', (req, res) => {
  const { name, feedback } = req.body;
  const newFeedback = { id: Date.now(), name, feedback };
  addFeedback(newFeedback);
  res.status(201).json(newFeedback);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
