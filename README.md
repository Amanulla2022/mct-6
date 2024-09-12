# Task Scheduler App

    - A full-stack task scheduling application built with React (frontend) and Node.js/Express (backend) with cron, allowing users to create, schedule, and track tasks.

# [Hosted_Link](https://mct-6.vercel.app/)

## Features

    - Task Scheduling: Add tasks with details like name, frequency (cron format), and recipient email.
    - Task Logs: Track task execution logs.
    - Real-time Updates: The app automatically refreshes the task list and logs upon task addition.
    - Responsive UI: The app is mobile-friendly, ensuring smooth user experience on different devices.

## Tech Stack

### Frontend:

    - React: For building the UI.
    - TailwindCSS: For styling and layout.
    - Axios: For API communication.
    - Toastify: For toast messgage

### Backend:

    - Node.js: Server-side JavaScript runtime.
    - Express.js: Web framework for handling routes and APIs.
    - MongoDB: NoSQL database for storing task data.
    - Cron Jobs: To schedule tasks based on user-defined frequencies.

## API Endpoints

    - Here are the available API endpoints for the backend:

Method Endpoint Description

GET /api/tasks Fetch all scheduled tasks

POST /api/task Add a new task

GET /api/tasks/taskid Fetch task by id
