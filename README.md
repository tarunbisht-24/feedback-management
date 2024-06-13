# Simple Feedback Management System

## Overview

This project is a simple feedback management system built with Node.js, Express, and TypeScript for the backend, and React with TypeScript for the frontend.

## Setup

### Backend

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npx ts-node-dev src/app.ts
    ```

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the React application:
    ```sh
    npm start
    ```

## API Endpoints

- `GET /api/feedback`: Retrieve all feedback entries.
- `POST /api/feedback`: Submit new feedback. Body parameters: `{ name: string, feedback: string }`.

## Additional Notes

- The feedback entries are stored in an in-memory array for simplicity.
- No external databases or in-memory storage solutions like Redis are used.
- Optional rate limiting and virtual/infinite scrolling can be implemented as enhancements.
