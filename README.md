# CollegeFinder

CollegeFinder is a full-stack college discovery platform built to help students explore, compare, and evaluate engineering colleges across India. The application provides detailed college information, college comparison tools, rank-based prediction, personalized saved colleges, authentication, and a college-specific Q&A section.

---

## Features

###  College Discovery
- Browse and explore engineering colleges.
- View detailed college information including:
  - Location
  - Fees
  - Ratings
  - Placement statistics
  - Overview

###  College Comparison
- Compare two colleges side-by-side.
- Compare:
  - Fees
  - Ratings
  - Placements
  - Location

### College Predictor
- Predict suitable colleges based on entrance exam rank.
- Supports:
  - IIT Bombay
  - IIT Delhi
  - COEP
  - VJTI
  - BITS Pilani
  - NIT Trichy
  - MIT Pune
  - IIIT Hyderabad
  - SRM University

###  Saved Colleges
- Save favorite colleges for quick access.
- Personalized saved list for each user.

###  Authentication
- Secure signup and login system.
- Credential-based authentication using NextAuth.
- Password hashing using bcrypt.

###  College Q&A
- College-specific FAQ section.
- Dropdown-based college selection.
- Expandable questions and answers for each college.

###  Responsive UI
- Modern and mobile-friendly design.
- Built using Tailwind CSS.

---

##  Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Prisma ORM

### Database
- PostgreSQL (Neon Database)

### Authentication
- NextAuth.js
- bcryptjs

---

##  Project Structure


app/
│
├── login/
├── signup/
├── compare/
├── predictor/
├── saved/
├── qa/
├── college/[id]/
├── api/
│   ├── register/
│   ├── colleges/
│   ├── save-college/
│   └── questions/
│
components/
│
lib/
│   ├── prisma.ts
│   └── auth.ts
│
prisma/
│   └── schema.prisma


---

## ⚙️ Installation

### Clone Repository

git clone https://github.com/Rutuja-ap/collegefinder.git
cd collegefinder


### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:


DATABASE_URL=your_database_url

NEXTAUTH_SECRET=your_secret_key

NEXTAUTH_URL=http://localhost:3000
```

### Generate Prisma Client


npx prisma generate


### Run Development Server


npm run dev


Open:

http://localhost:3000

---

##  Database

The application uses PostgreSQL with Prisma ORM.

Main entities:

- User
- College
- SavedCollege
- Question
- Answer

---

##  Future Enhancements

- AI-based college recommendations
- Advanced filtering and sorting
- College reviews and ratings by students
- Admission cutoff analysis
- Scholarship information
- College discussion forums
- Placement analytics dashboard

---

##  Author

**Rutuja Patil**

---

##  Live Demo

Deployment Link:

Add your Vercel deployment URL here


---

##  License

This project is developed for educational and learning purposes.