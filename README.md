# Edusity - Full-Stack Educational Platform

Edusity is a modern educational platform built with React, Vite, Node.js, Express, and MongoDB.

## Features
- **Modern UI**: Built with Tailwind CSS and Framer Motion for a premium experience.
- **Authentication**: JWT-based login and signup.
- **Role-Based Access**: Specialized dashboards for Students, Teachers, and Admins.
- **Course Management**: Create, edit, and enroll in courses with progress tracking.
- **Mobile Responsive**: Fully responsive design for all devices.

## Project Structure
- `/client`: React frontend with Vite.
- `/server`: Node.js/Express backend.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running (or use a cloud instance)

### Installation

1. **Clone the repository**
2. **Setup Backend**
   ```bash
   cd server
   npm install
   # Create a .env file based on the provided values
   npm run dev
   ```
3. **Setup Frontend**
   ```bash
   cd client
   npm install
   npm run dev
   ```

### API Endpoints
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login user
- `GET /api/courses`: Get all courses (Coming soon)

## Deployment
- **Frontend**: Deploy `client` folder to Vercel or Netlify.
- **Backend**: Deploy `server` folder to Render, Heroku, or a VPS.
